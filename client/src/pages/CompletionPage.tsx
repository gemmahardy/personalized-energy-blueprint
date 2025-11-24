import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Sparkles, ExternalLink, UserPlus, ShoppingCart } from "lucide-react";
import { programDays } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";
import { useEffect } from "react";

export default function CompletionPage() {
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const completedDays = programDays.filter(day => {
    const dayTasks = day.checklistTasks;
    const completedTasks = checklistItems.filter(
      item => item.day === day.day && item.completed
    );
    return completedTasks.length === dayTasks.length && dayTasks.length > 0;
  }).length;
  
  const totalCheckedItems = checklistItems.filter(item => item.completed).length;
  
  useEffect(() => {
    const confetti = () => {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        if (Date.now() > end) return;
        
        requestAnimationFrame(frame);
      };

      frame();
    };
    
    if (completedDays === 30) {
      confetti();
    }
  }, [completedDays]);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-8 max-w-4xl">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Trophy className="h-12 w-12 text-primary" data-testid="icon-trophy" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground" data-testid="text-completion-header">
          Congratulations, Flow Seeker!
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-completion-message">
          You've completed your 30-day Energy Blueprint journey! This is just the beginning 
          of your energized lifestyle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card data-testid="card-stat-days">
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-primary" data-testid="text-stat-days">
              {completedDays}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Days Completed
            </p>
          </CardContent>
        </Card>
        
        <Card data-testid="card-stat-tasks">
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-primary" data-testid="text-stat-tasks">
              {totalCheckedItems}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Tasks Accomplished
            </p>
          </CardContent>
        </Card>
        
        <Card data-testid="card-stat-transformation">
          <CardContent className="p-6 text-center">
            <p className="text-4xl font-bold text-primary">
              <Sparkles className="h-10 w-10 inline" data-testid="icon-transformation" />
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Total Transformation
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground" data-testid="text-next-steps">
              What's Next on Your Energy Journey?
            </h2>
            <p className="text-muted-foreground">
              Continue your transformation with personalized support and new programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://www.theenergylifestyle.com/shop?ref=1on1coach"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid="link-add-coach"
            >
              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer h-full border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Add a 1:1 Coach
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Get personalized guidance from an energy lifestyle expert to take 
                      your transformation to the next level.
                    </p>
                  </div>
                  <Button className="w-full gap-2" data-testid="button-add-coach">
                    Book Your Coach
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </a>
            
            <a 
              href="https://www.theenergylifestyle.com/shop?ref=newplan"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid="link-buy-plan"
            >
              <Card className="hover-elevate active-elevate-2 transition-all cursor-pointer h-full border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Buy a New Plan
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Explore advanced energy blueprints and specialized programs designed 
                      for sustained wellness.
                    </p>
                  </div>
                  <Button variant="outline" className="w-full gap-2" data-testid="button-buy-plan">
                    Browse Programs
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-accent/50">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <p className="text-lg font-medium text-foreground">
              "You didn't just complete a program. You transformed your relationship with energy."
            </p>
            <p className="text-sm text-muted-foreground">
              — The Energy Lifestyle Company
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
