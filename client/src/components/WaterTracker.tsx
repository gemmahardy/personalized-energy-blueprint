import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { Droplets, Plus, Minus } from "lucide-react";
import type { WaterIntake } from "@shared/schema";
import { useCallback } from "react";

interface WaterTrackerProps {
  weekNumber: number;
}

const DAILY_GOAL = 8;
const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function WaterGlass({ filled }: { filled: boolean }) {
  return (
    <div 
      className={`w-3 h-5 rounded-sm border transition-colors ${
        filled 
          ? "bg-blue-400 border-blue-500" 
          : "bg-muted/30 border-muted-foreground/20"
      }`}
    />
  );
}

function DayWaterCard({ 
  day, 
  dayName, 
  glasses, 
  onUpdate 
}: { 
  day: number; 
  dayName: string; 
  glasses: number;
  onUpdate: (day: number, glasses: number) => void;
}) {
  const percentage = Math.min((glasses / DAILY_GOAL) * 100, 100);
  const isGoalMet = glasses >= DAILY_GOAL;

  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card border">
      <span className="text-xs font-medium text-muted-foreground">{dayName}</span>
      <span className="text-xs text-muted-foreground">Day {day}</span>
      
      <div className="flex gap-0.5 my-1">
        {Array.from({ length: DAILY_GOAL }).map((_, i) => (
          <WaterGlass key={i} filled={i < glasses} />
        ))}
      </div>
      
      <div className="flex items-center gap-1">
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6"
          onClick={() => onUpdate(day, Math.max(0, glasses - 1))}
          disabled={glasses <= 0}
          data-testid={`button-water-minus-${day}`}
        >
          <Minus className="h-3 w-3" />
        </Button>
        <span className={`text-sm font-bold min-w-[2rem] text-center ${isGoalMet ? "text-blue-500" : "text-foreground"}`}>
          {glasses}/{DAILY_GOAL}
        </span>
        <Button
          size="icon"
          variant="ghost"
          className="h-6 w-6"
          onClick={() => onUpdate(day, Math.min(16, glasses + 1))}
          disabled={glasses >= 16}
          data-testid={`button-water-plus-${day}`}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <Progress value={percentage} className="h-1.5 w-full" />
    </div>
  );
}

export function WaterTracker({ weekNumber }: WaterTrackerProps) {
  const startDay = (weekNumber - 1) * 7 + 1;
  
  const { data: waterData = [] } = useQuery<WaterIntake[]>({
    queryKey: ["/api/water/week", weekNumber],
  });

  const updateMutation = useMutation({
    mutationFn: async ({ day, glasses }: { day: number; glasses: number }) => {
      return await apiRequest("POST", "/api/water/update", { day, glasses });
    },
    onMutate: async ({ day, glasses }) => {
      await queryClient.cancelQueries({ queryKey: ["/api/water/week", weekNumber] });
      
      const previousData = queryClient.getQueryData<WaterIntake[]>(["/api/water/week", weekNumber]);
      
      queryClient.setQueryData<WaterIntake[]>(["/api/water/week", weekNumber], (old = []) => {
        const existing = old.find(w => w.day === day);
        if (existing) {
          return old.map(w => w.day === day ? { ...w, glasses } : w);
        }
        return [...old, { id: `temp-${day}`, day, glasses }];
      });
      
      return { previousData };
    },
    onError: (err, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(["/api/water/week", weekNumber], context.previousData);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/water/week", weekNumber] });
      queryClient.invalidateQueries({ queryKey: ["/api/water"] });
    },
  });

  const getGlassesForDay = useCallback((day: number) => {
    const dayData = waterData.find(w => w.day === day);
    return dayData?.glasses || 0;
  }, [waterData]);

  const handleUpdate = useCallback((day: number, newGlasses: number) => {
    updateMutation.mutate({ day, glasses: newGlasses });
  }, [updateMutation]);

  const weekDays = Array.from({ length: 7 }, (_, i) => startDay + i).filter(d => d <= 30);
  
  const totalGlasses = weekDays.reduce((sum, day) => sum + getGlassesForDay(day), 0);
  const weeklyGoal = weekDays.length * DAILY_GOAL;
  const weeklyPercentage = Math.min((totalGlasses / weeklyGoal) * 100, 100);

  return (
    <Card className="border-blue-200 dark:border-blue-900">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2" data-testid="text-water-tracker-title">
          <Droplets className="h-5 w-5 text-blue-500" />
          Water Intake Tracker
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Goal: {DAILY_GOAL} glasses (8oz each) per day
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <DayWaterCard
              key={day}
              day={day}
              dayName={dayNames[index]}
              glasses={getGlassesForDay(day)}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
        
        <div className="pt-3 border-t">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Weekly Progress</span>
            <span className="text-sm text-muted-foreground">
              {totalGlasses} / {weeklyGoal} glasses ({Math.round(weeklyPercentage)}%)
            </span>
          </div>
          <Progress value={weeklyPercentage} className="h-2" />
          {weeklyPercentage >= 100 && (
            <p className="text-sm text-blue-500 mt-2 text-center font-medium">
              Week {weekNumber} hydration goal achieved!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
