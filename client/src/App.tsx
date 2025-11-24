import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Dashboard from "@/pages/Dashboard";
import WeekView from "@/pages/WeekView";
import DayView from "@/pages/DayView";
import AllDaysView from "@/pages/AllDaysView";
import AnalyticsView from "@/pages/AnalyticsView";
import CompletionPage from "@/pages/CompletionPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/week/:weekNumber" component={WeekView} />
      <Route path="/day/:day" component={DayView} />
      <Route path="/days" component={AllDaysView} />
      <Route path="/analytics" component={AnalyticsView} />
      <Route path="/completion" component={CompletionPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
