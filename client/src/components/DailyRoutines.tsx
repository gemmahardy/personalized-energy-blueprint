import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Sunrise, Sun, Moon, Clock } from "lucide-react";
import type { WeeklyPlanData, RoutineStep } from "@shared/schema";

interface DailyRoutinesProps {
  weekPlan: WeeklyPlanData;
}

function RoutineSection({ 
  title, 
  icon: Icon, 
  steps,
  colorClass
}: { 
  title: string; 
  icon: React.ElementType; 
  steps: RoutineStep[];
  colorClass: string;
}) {
  return (
    <Card className={`print:break-inside-avoid print:shadow-none print:border ${colorClass}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-background border flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              <div className="flex-1">
                <p className="font-medium text-foreground">{step.action}</p>
                {step.duration && (
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock className="h-3 w-3" />
                    {step.duration}
                  </p>
                )}
                {step.details && (
                  <p className="text-sm text-muted-foreground mt-0.5 italic">
                    {step.details}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  );
}

export function DailyRoutines({ weekPlan }: DailyRoutinesProps) {
  const handlePrint = () => {
    window.print();
  };

  const routine = weekPlan.dailyRoutine;

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2" data-testid="text-routines-title">
            <Sunrise className="h-6 w-6 text-primary" />
            Daily Routines
          </h2>
          <p className="text-muted-foreground mt-1">
            Week {weekPlan.weekNumber}: {weekPlan.theme}
          </p>
        </div>
        <Button onClick={handlePrint} className="gap-2" data-testid="button-print-routines">
          <Printer className="h-4 w-4" />
          Print Routines
        </Button>
      </div>

      <div className="hidden print:block text-center mb-6">
        <h1 className="text-2xl font-bold">Week {weekPlan.weekNumber} Daily Routines</h1>
        <p className="text-lg text-muted-foreground">{weekPlan.theme}</p>
        <p className="text-sm mt-2">Personalized Energy Blueprint - The Energy Lifestyle Company</p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <RoutineSection 
          title="Morning Protocol" 
          icon={Sunrise} 
          steps={routine.morning}
          colorClass="border-l-4 border-l-amber-400"
        />
        <RoutineSection 
          title="Midday Protocol" 
          icon={Sun} 
          steps={routine.midday}
          colorClass="border-l-4 border-l-yellow-400"
        />
        <RoutineSection 
          title="Evening Protocol" 
          icon={Moon} 
          steps={routine.evening}
          colorClass="border-l-4 border-l-indigo-400"
        />
      </div>

      <Card className="bg-primary/5 border-primary/20 print:bg-white">
        <CardContent className="pt-4">
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-2">Weekly Goal</h3>
            <p className="text-muted-foreground">{weekPlan.weeklyGoal}</p>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-muted-foreground print:mt-8 print:block hidden">
        <p>Personalized Energy Blueprint - The Energy Lifestyle Company</p>
        <p>Adjust routines based on your schedule. Consistency is key!</p>
      </div>
    </div>
  );
}
