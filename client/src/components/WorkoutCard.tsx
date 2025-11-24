import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Dumbbell } from "lucide-react";
import type { WorkoutDay } from "@shared/schema";

interface WorkoutCardProps {
  workout: WorkoutDay;
  day: number;
  week: number;
  onPrint?: () => void;
}

export function WorkoutCard({ workout, day, week, onPrint }: WorkoutCardProps) {
  return (
    <Card data-testid={`card-workout-day-${day}`}>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-5 w-5 text-primary" />
          <CardTitle data-testid={`text-workout-title-${day}`}>
            Today's Workout
          </CardTitle>
        </div>
        <CardDescription>
          {workout.type} • {workout.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {workout.exercises.map((exercise, index) => (
            <div 
              key={index}
              className="flex justify-between items-start gap-3 py-2 border-b last:border-0"
              data-testid={`exercise-${day}-${index}`}
            >
              <p className="text-sm font-medium text-foreground flex-1">
                {exercise.name}
              </p>
              <div className="text-sm text-muted-foreground text-right flex-shrink-0">
                {exercise.sets && exercise.reps && (
                  <span>{exercise.sets} × {exercise.reps}</span>
                )}
                {exercise.duration && (
                  <span>{exercise.duration}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {workout.notes && (
          <div className="pt-2 border-t">
            <p className="text-xs font-medium text-foreground">Note:</p>
            <p className="text-xs text-muted-foreground mt-1" data-testid={`text-workout-notes-${day}`}>
              {workout.notes}
            </p>
          </div>
        )}
        
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={onPrint}
          data-testid={`button-print-workout-${day}`}
        >
          <Printer className="h-4 w-4" />
          Print Workout Plan
        </Button>
      </CardContent>
    </Card>
  );
}
