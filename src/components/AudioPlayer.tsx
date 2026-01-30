import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import capaLandiTurbina from "@/assets/capa-landi-turbina.png";
export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasInitializedRef = useRef(false);
  useEffect(() => {
    if (hasInitializedRef.current || !audioRef.current) return;
    hasInitializedRef.current = true;
    audioRef.current.volume = 0.5;
    audioRef.current.muted = true;
    setIsMuted(true);

    // Keep play/pause state in sync with element events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audioRef.current.addEventListener("play", onPlay);
    audioRef.current.addEventListener("pause", onPause);

    // Wait for user interaction to start playback
    const onInteraction = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      setIsMuted(false);
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
      document.removeEventListener("click", onInteraction);
      document.removeEventListener("scroll", onInteraction);
      document.removeEventListener("keydown", onInteraction);
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("pointerdown", onInteraction);
      document.removeEventListener("wheel", onInteraction);
    };
    document.addEventListener("click", onInteraction, { once: true });
    document.addEventListener("scroll", onInteraction, { once: true });
    document.addEventListener("keydown", onInteraction, { once: true });
    document.addEventListener("touchstart", onInteraction, { once: true });
    document.addEventListener("pointerdown", onInteraction, { once: true });
    document.addEventListener("wheel", onInteraction, { once: true });

    return () => {
      audioRef.current?.removeEventListener("play", onPlay);
      audioRef.current?.removeEventListener("pause", onPause);
    };
  }, []);
  const toggleMute = async () => {
    if (!audioRef.current) return;
    if (!isPlaying) {
      try {
        audioRef.current.muted = false;
        setIsMuted(false);
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.warn("Playback error:", error);
      }
      return;
    }
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return <div className="fixed bottom-6 left-6 z-50">
      <div className="flex items-center gap-3 bg-black/70 backdrop-blur-sm rounded-lg p-2 border border-primary/20 opacity-80">
        <img src={capaLandiTurbina} alt="Capa Landi Turbina" className="w-12 h-12 rounded-md object-cover" />

        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-bold text-foreground">LANDI TURBINA</p>
          <p className="text-[10px] text-muted-foreground">MC Will.G, DJ Farias</p>
        </div>

        <button onClick={toggleMute} className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 hover:bg-primary/40 transition-all duration-300 text-primary hover:text-primary/80 ml-1" aria-label={isMuted ? "Ativar som" : "Silenciar"}>
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      <audio ref={audioRef} loop preload="auto" src="/audio/LANDI_TURBINA.mp3" />
    </div>;
};
