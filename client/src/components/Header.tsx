import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Home, BarChart3 } from "lucide-react";
import logoUrl from "@assets/image_1764022595591.png";

export function Header() {
  const [location] = useLocation();
  
  return (
    <header className="border-b bg-card sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.location.href = "/"}
              className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-all bg-transparent border-0 cursor-pointer" 
              data-testid="button-home-logo"
            >
              <img 
                src={logoUrl} 
                alt="The Energy Lifestyle Company" 
                className="h-10 w-auto"
                data-testid="img-header-logo"
              />
            </button>
            
            <nav className="flex items-center gap-2">
              <Button 
                variant={location === "/" ? "default" : "ghost"} 
                size="sm"
                onClick={() => window.location.href = "/"}
                data-testid="button-nav-home"
                className="gap-2"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <Button 
                variant={location.startsWith("/day") ? "default" : "ghost"} 
                size="sm"
                onClick={() => window.location.href = "/days"}
                data-testid="button-nav-days"
                className="gap-2"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Calendar</span>
              </Button>
              <Button 
                variant={location === "/analytics" ? "default" : "ghost"} 
                size="sm"
                onClick={() => window.location.href = "/analytics"}
                data-testid="button-nav-analytics"
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </Button>
            </nav>
          </div>
          
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground" data-testid="text-title">
              Personalized Energy Blueprint
            </h1>
            <p className="text-sm text-muted-foreground mt-1" data-testid="text-subtitle">
              For Melissa Gregory • Flow Seeker
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
