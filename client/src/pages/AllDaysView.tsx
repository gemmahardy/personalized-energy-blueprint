import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DayCard } from "@/components/DayCard";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { programDays, weekSummaries } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";

export default function AllDaysView() {
  const [, setLocation] = useLocation();
  
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const getDayProgress = (day: number) => {
    const dayContent = programDays.find(d => d.day === day);
    if (!dayContent) return 0;
    
    const dayTasks = dayContent.checklistTasks;
    if (dayTasks.length === 0) return 0;
    
    const completedTasks = checklistItems.filter(
      item => item.day === day && item.completed
    );
    return Math.round((completedTasks.length / dayTasks.length) * 100);
  };
  
  const isDayCompleted = (day: number) => getDayProgress(day) === 100;
  
  const currentDay = programDays.find((day) => !isDayCompleted(day.day))?.day || 1;
  
  const totalDays = programDays.length;
  const completedDays = programDays.filter(day => isDayCompleted(day.day)).length;
  const overallProgress = Math.round((completedDays / totalDays) * 100);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 space-y-6">
      <Button
        variant="ghost"
        onClick={() => setLocation("/")}
        className="gap-2"
        data-testid="button-back-dashboard-alldays"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Button>
      
      <div className="text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-alldays-title">
          30-Day Calendar View
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your complete energy blueprint journey. Select any day to view details.
        </p>
        
        <Card className="max-w-2xl mx-auto p-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground" data-testid="text-overall-progress">
                {completedDays} of {totalDays} days completed
              </span>
            </div>
            <Progress value={overallProgress} className="h-2" data-testid="progress-overall" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Circle className="h-3 w-3" /> Not Started
              </span>
              <span className="flex items-center gap-1">
                <Circle className="h-3 w-3 fill-primary text-primary opacity-50" /> In Progress
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-primary" /> Completed
              </span>
            </div>
          </div>
        </Card>
      </div>
      
      {weekSummaries.map((week) => (
        <div key={week.weekNumber} className="space-y-4">
          <Card className="p-4 bg-muted/30">
            <h2 className="text-xl font-semibold text-foreground" data-testid={`text-week-${week.weekNumber}-header`}>
              Week {week.weekNumber}: {week.theme}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{week.dateRange}</p>
          </Card>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {programDays
              .filter(day => day.week === week.weekNumber)
              .map((day) => (
                <DayCard
                  key={day.day}
                  day={day.day}
                  week={day.week}
                  isCompleted={isDayCompleted(day.day)}
                  isCurrent={day.day === currentDay}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
