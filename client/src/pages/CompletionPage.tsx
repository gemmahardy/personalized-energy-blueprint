import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Sparkles, ExternalLink, UserPlus, ShoppingCart, Share2 } from "lucide-react";
import { SiFacebook, SiX, SiLinkedin, SiPinterest } from "react-icons/si";
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
      
      <Card className="border-primary/20">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground" data-testid="text-share-header">
              Share Your Achievement!
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Inspire others by sharing your 30-day transformation. Let your friends and family know about your incredible journey!
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="outline"
              className="gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white border-[#1877F2] hover:text-white"
              onClick={() => {
                const shareText = encodeURIComponent("I just completed my 30-day Personalized Energy Blueprint! Transform your energy and wellness journey too!");
                const shareUrl = encodeURIComponent("https://www.theenergylifestyle.com/shop");
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`, '_blank', 'width=600,height=400');
              }}
              data-testid="button-share-facebook"
            >
              <SiFacebook className="h-5 w-5" />
              Facebook
            </Button>
            
            <Button
              variant="outline"
              className="gap-2 bg-black hover:bg-black/90 text-white border-black hover:text-white"
              onClick={() => {
                const shareText = encodeURIComponent("I just completed my 30-day Personalized Energy Blueprint! Transform your energy and wellness journey too! #EnergyLifestyle #30DayChallenge #Wellness");
                const shareUrl = encodeURIComponent("https://www.theenergylifestyle.com/shop");
                window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`, '_blank', 'width=600,height=400');
              }}
              data-testid="button-share-x"
            >
              <SiX className="h-5 w-5" />
              X (Twitter)
            </Button>
            
            <Button
              variant="outline"
              className="gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white border-[#0A66C2] hover:text-white"
              onClick={() => {
                const shareUrl = encodeURIComponent("https://www.theenergylifestyle.com/shop");
                const shareTitle = encodeURIComponent("I Completed My 30-Day Energy Blueprint!");
                const shareSummary = encodeURIComponent("I just finished an incredible 30-day wellness transformation journey. Feeling energized and ready for more! Check out The Energy Lifestyle Company for your own transformation.");
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank', 'width=600,height=400');
              }}
              data-testid="button-share-linkedin"
            >
              <SiLinkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              className="gap-2 bg-[#E60023] hover:bg-[#E60023]/90 text-white border-[#E60023] hover:text-white"
              onClick={() => {
                const shareUrl = encodeURIComponent("https://www.theenergylifestyle.com/shop");
                const description = encodeURIComponent("I completed my 30-day Personalized Energy Blueprint! Transform your wellness journey with The Energy Lifestyle Company. #EnergyLifestyle #Wellness #30DayChallenge");
                window.open(`https://pinterest.com/pin/create/button/?url=${shareUrl}&description=${description}`, '_blank', 'width=600,height=400');
              }}
              data-testid="button-share-pinterest"
            >
              <SiPinterest className="h-5 w-5" />
              Pinterest
            </Button>
          </div>
          
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-3">
              Or copy this link to share anywhere:
            </p>
            <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
              <code className="flex-1 px-4 py-2 bg-muted rounded-md text-sm text-foreground truncate">
                https://www.theenergylifestyle.com/shop
              </code>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText("I just completed my 30-day Personalized Energy Blueprint! Transform your energy and wellness journey too! https://www.theenergylifestyle.com/shop");
                }}
                data-testid="button-copy-link"
              >
                Copy
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
