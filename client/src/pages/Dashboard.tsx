import { useQuery } from "@tanstack/react-query";
import { WeekCard } from "@/components/WeekCard";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Target, TrendingUp } from "lucide-react";
import { weekSummaries, programDays } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";

export default function Dashboard() {
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const getCompletedDaysForWeek = (weekNumber: number) => {
    const weekDays = programDays.filter(d => d.week === weekNumber);
    return weekDays.filter(day => {
      const dayTasks = day.checklistTasks;
      const completedTasks = checklistItems.filter(
        item => item.day === day.day && item.completed
      );
      return completedTasks.length === dayTasks.length && dayTasks.length > 0;
    }).length;
  };
  
  const totalCompletedDays = programDays.filter(day => {
    const dayTasks = day.checklistTasks;
    const completedTasks = checklistItems.filter(
      item => item.day === day.day && item.completed
    );
    return completedTasks.length === dayTasks.length && dayTasks.length > 0;
  }).length;
  
  const overallProgress = (totalCompletedDays / 30) * 100;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 space-y-8">
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-8 w-8 text-primary" data-testid="icon-welcome" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-welcome">
          Welcome to Your Energy Journey!
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-welcome-description">
          Your personalized 30-day blueprint designed to transform your energy, 
          wellness, and vitality. Let's make every day count, Flow Seeker!
        </p>
      </div>
      
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent" data-testid="card-overall-progress">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Overall Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Your 30-day transformation journey
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary" data-testid="text-overall-progress">
                {totalCompletedDays}/30
              </p>
              <p className="text-sm text-muted-foreground">days completed</p>
            </div>
          </div>
          
          <Progress 
            value={overallProgress} 
            className="h-3"
            data-testid="progress-overall"
          />
        </CardContent>
      </Card>
      
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Target className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground" data-testid="text-weeks-title">
            Your 4-Week Program
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weekSummaries.map((week) => {
            const weekDays = programDays.filter(d => d.week === week.weekNumber);
            const completedDays = getCompletedDaysForWeek(week.weekNumber);
            
            return (
              <WeekCard
                key={week.weekNumber}
                week={week}
                completedDays={completedDays}
                totalDays={weekDays.length}
              />
            );
          })}
        </div>
      </div>
      
      <Card className="bg-accent/50" data-testid="card-motivation">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <p className="text-lg font-medium text-foreground">
              "Your energy is your most valuable resource. Invest in it daily."
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
