import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AudioPlayer } from "@/components/AudioPlayer";

const queryClient = new QueryClient();
const STORE_URL = "https://loja.landiturbina.com.br";
const ENCONTRO_HOST = "encontro.landiturbina.com.br";
const MEMORIAL_TITLE = "Memorial Landi Turbina | Novo Ciclo";
const MEMORIAL_DESCRIPTION =
  "Memorial Landi Turbina - O novo ciclo da Landi Turbina, reunindo a história, o encontro e o Time dos Barulhentos.";
const MEMORIAL_CANONICAL_URL = "https://landiturbina.com.br/novociclo";

const isEncontroHost = () =>
  typeof window !== "undefined" && window.location.hostname === ENCONTRO_HOST;

const StoreRedirect = () => {
  useEffect(() => {
    document.title = "Landi Turbina | E-commerce";
    window.location.replace(STORE_URL);
  }, []);

  return null;
};

const setMetaContent = (selector: string, content: string) => {
  const element = document.head.querySelector(selector);

  if (element instanceof HTMLMetaElement) {
    element.content = content;
  }
};

const setCanonicalUrl = (href: string) => {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!(canonical instanceof HTMLLinkElement)) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = href;
};

const SeoTags = () => {
  useEffect(() => {
    document.title = MEMORIAL_TITLE;
    setMetaContent('meta[name="description"]', MEMORIAL_DESCRIPTION);
    setMetaContent('meta[property="og:title"]', MEMORIAL_TITLE);
    setMetaContent('meta[property="og:description"]', MEMORIAL_DESCRIPTION);
    setMetaContent('meta[property="og:url"]', MEMORIAL_CANONICAL_URL);
    setCanonicalUrl(MEMORIAL_CANONICAL_URL);
  }, []);

  return null;
};

const MemorialRoute = () => (
  <>
    <SeoTags />
    <Index />
  </>
);

const RootRoute = () => (isEncontroHost() ? <MemorialRoute /> : <StoreRedirect />);

const CatchAllRoute = () => (isEncontroHost() ? <MemorialRoute /> : <NotFound />);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AudioPlayer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />} />
          <Route path="/novociclo/*" element={<MemorialRoute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<CatchAllRoute />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
