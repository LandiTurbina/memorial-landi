import grafismoVermelho from "@/assets/grafismo-vermelho.svg";
import grafismoNegativo from "@/assets/grafismo-negativo.svg";

interface SpeedLinesProps {
  variant?: "red" | "white";
  className?: string;
}

export const SpeedLines = ({ variant = "red", className = "" }: SpeedLinesProps) => {
  const src = variant === "red" ? grafismoVermelho : grafismoNegativo;
  
  return (
    <div className={`w-full overflow-hidden py-2 ${className}`}>
      <img 
        src={src} 
        alt="" 
        className="w-full h-auto min-w-[200%] md:min-w-full object-cover"
        aria-hidden="true"
      />
    </div>
  );
};
