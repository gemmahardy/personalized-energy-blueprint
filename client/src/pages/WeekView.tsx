import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DayCard } from "@/components/DayCard";
import { ArrowLeft, Calendar } from "lucide-react";
import { getWeekSummary, getWeekDays } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";

export default function WeekView() {
  const params = useParams<{ weekNumber: string }>();
  const [, setLocation] = useLocation();
  const weekNumber = parseInt(params.weekNumber || "1");
  
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const weekSummary = getWeekSummary(weekNumber);
  const weekDays = getWeekDays(weekNumber);
  
  if (!weekSummary) {
    return (
      <div className="container mx-auto px-6 py-8">
        <p>Week not found</p>
      </div>
    );
  }
  
  const isDayCompleted = (day: number) => {
    const dayContent = weekDays.find(d => d.day === day);
    if (!dayContent) return false;
    
    const dayTasks = dayContent.checklistTasks;
    const completedTasks = checklistItems.filter(
      item => item.day === day && item.completed
    );
    return completedTasks.length === dayTasks.length && dayTasks.length > 0;
  };
  
  const currentDay = weekDays.find((_, index) => !isDayCompleted(weekDays[index]?.day))?.day || weekDays[0]?.day;
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 space-y-6">
      <Button
        variant="ghost"
        onClick={() => setLocation("/")}
        className="gap-2"
        data-testid="button-back-dashboard"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Button>
      
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-6 w-6 text-primary" />
            <CardTitle className="text-2xl" data-testid={`text-week-${weekNumber}-header`}>
              Week {weekNumber}: {weekSummary.theme}
            </CardTitle>
          </div>
          <p className="text-muted-foreground" data-testid={`text-week-${weekNumber}-daterange`}>
            {weekSummary.dateRange}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Weekly Goals:</h3>
            <ul className="space-y-2">
              {weekSummary.goals.map((goal, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-2 text-muted-foreground"
                  data-testid={`text-week-${weekNumber}-goal-full-${index}`}
                >
                  <span className="text-primary mt-0.5">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-days-title">
          Daily Progress
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {weekDays.map((day) => (
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
    </div>
  );
}
