import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/business/Dashboard";
import Auth from "./pages/business/Auth";
import FeedbackForm from "./pages/feedback/FeedbackForm";
import PublicFeedback from "./pages/feedback/PublicFeedback";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          
          {/* Business Routes */}
          <Route path="/business/login" element={<Auth />} />
          <Route path="/business/register" element={<Auth />} />
          <Route path="/business/dashboard" element={<Dashboard />} />
          
          {/* Feedback Routes */}
          <Route path="/feedback/:businessId" element={<FeedbackForm />} />
          <Route path="/feedback/:businessId/public" element={<PublicFeedback />} />
          
          {/* Demo Routes */}
          <Route path="/demo" element={<Demo />} />
          <Route path="/demo/restaurant" element={<PublicFeedback />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
