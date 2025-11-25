import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Printer, Dumbbell, Clock, Target } from "lucide-react";
import { getWeekDays } from "@shared/programData";
import type { DayContent, Exercise } from "@shared/schema";

interface ExercisePlanProps {
  weekNumber: number;
}

function ExerciseItem({ exercise }: { exercise: Exercise }) {
  return (
    <li className="flex items-start gap-2 py-1">
      <span className="text-primary mt-1">•</span>
      <div className="flex-1">
        <span className="text-foreground">{exercise.name}</span>
        {(exercise.sets || exercise.reps || exercise.duration) && (
          <span className="text-muted-foreground ml-2 text-sm">
            {exercise.sets && `${exercise.sets} sets`}
            {exercise.sets && exercise.reps && " × "}
            {exercise.reps && `${exercise.reps}`}
            {exercise.duration && ` (${exercise.duration})`}
          </span>
        )}
      </div>
    </li>
  );
}

function DayWorkoutCard({ day }: { day: DayContent }) {
  const dayNames = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const dayOfWeek = ((day.day - 1) % 7) + 1;
  const dayName = dayNames[dayOfWeek];

  return (
    <Card className="print:break-inside-avoid print:shadow-none print:border">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-lg">Day {day.day} - {dayName}</CardTitle>
            <p className="text-sm text-primary font-medium mt-1">{day.workout.type}</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {day.workout.duration}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {day.workout.exercises.map((exercise, index) => (
            <ExerciseItem key={index} exercise={exercise} />
          ))}
        </ul>
        {day.workout.notes && (
          <p className="text-sm text-muted-foreground mt-3 italic border-l-2 border-primary/30 pl-3">
            {day.workout.notes}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export function ExercisePlan({ weekNumber }: ExercisePlanProps) {
  const weekDays = getWeekDays(weekNumber);

  const handlePrint = () => {
    window.print();
  };

  const weekThemes = {
    1: "Foundation & Energy Awareness",
    2: "Building Momentum",
    3: "Flow State Mastery",
    4: "Sustainable Energy Lifestyle"
  };

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2" data-testid="text-exercise-plan-title">
            <Dumbbell className="h-6 w-6 text-primary" />
            Week {weekNumber} Exercise Plan
          </h2>
          <p className="text-muted-foreground mt-1">
            {weekThemes[weekNumber as keyof typeof weekThemes]}
          </p>
        </div>
        <Button onClick={handlePrint} className="gap-2" data-testid="button-print-exercise">
          <Printer className="h-4 w-4" />
          Print Exercise Plan
        </Button>
      </div>

      <div className="hidden print:block text-center mb-6">
        <h1 className="text-2xl font-bold">Week {weekNumber} Exercise Plan</h1>
        <p className="text-lg text-muted-foreground">{weekThemes[weekNumber as keyof typeof weekThemes]}</p>
        <p className="text-sm mt-2">Personalized Energy Blueprint - The Energy Lifestyle Company</p>
      </div>

      <Card className="bg-primary/5 border-primary/20 print:bg-white">
        <CardContent className="pt-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <Target className="h-5 w-5 text-primary" />
            <p className="text-foreground">
              <span className="font-semibold">Weekly Focus:</span> Move with intention, honor your body's needs, build sustainable habits
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {weekDays.map((day) => (
          <DayWorkoutCard key={day.day} day={day} />
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground print:mt-8 print:block hidden">
        <p>This plan is for educational purposes only, not medical advice.</p>
        <p>Consult a licensed physician before starting any exercise program.</p>
      </div>
    </div>
  );
}
