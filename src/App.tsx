import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AudioPlayer } from "@/components/AudioPlayer";

const queryClient = new QueryClient();
const STORE_URL = "https://loja.landiturbina.com.br";
const ENCONTRO_HOST = "encontro.landiturbina.com.br";

const isEncontroHost = () =>
  typeof window !== "undefined" && window.location.hostname === ENCONTRO_HOST;

const StoreRedirect = () => {
  window.location.replace(STORE_URL);
  return null;
};

const RootRoute = () => (isEncontroHost() ? <Index /> : <StoreRedirect />);

const CatchAllRoute = () => (isEncontroHost() ? <Index /> : <NotFound />);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AudioPlayer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRoute />} />
          <Route path="/novociclo/*" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<CatchAllRoute />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
