import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { DayCard } from "@/components/DayCard";
import { ArrowLeft } from "lucide-react";
import { programDays } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";

export default function AllDaysView() {
  const [, setLocation] = useLocation();
  
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const isDayCompleted = (day: number) => {
    const dayContent = programDays.find(d => d.day === day);
    if (!dayContent) return false;
    
    const dayTasks = dayContent.checklistTasks;
    const completedTasks = checklistItems.filter(
      item => item.day === day && item.completed
    );
    return completedTasks.length === dayTasks.length && dayTasks.length > 0;
  };
  
  const currentDay = programDays.find((day) => !isDayCompleted(day.day))?.day || 1;
  
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
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-alldays-title">
          All 30 Days
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your complete energy blueprint journey. Select any day to view details.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {programDays.map((day) => (
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
  );
}
