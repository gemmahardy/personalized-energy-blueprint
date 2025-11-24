import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface DayCardProps {
  day: number;
  week: number;
  isCompleted: boolean;
  isCurrent: boolean;
}

export function DayCard({ day, week, isCompleted, isCurrent }: DayCardProps) {
  return (
    <Link href={`/day/${day}`}>
      <Card 
        className={cn(
          "hover-elevate active-elevate-2 transition-all cursor-pointer relative",
          isCurrent && "ring-2 ring-primary"
        )}
        data-testid={`card-day-${day}`}
      >
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {isCompleted ? (
                <CheckCircle2 
                  className="h-6 w-6 text-primary flex-shrink-0" 
                  data-testid={`icon-day-${day}-complete`}
                />
              ) : (
                <Circle 
                  className="h-6 w-6 text-muted-foreground flex-shrink-0"
                  data-testid={`icon-day-${day}-incomplete`}
                />
              )}
              <div>
                <p className="font-semibold text-foreground" data-testid={`text-day-${day}-number`}>
                  Day {day}
                </p>
                <p className="text-xs text-muted-foreground">
                  Week {week}
                </p>
              </div>
            </div>
            
            {isCurrent && (
              <Badge variant="default" data-testid={`badge-day-${day}-current`}>
                Today
              </Badge>
            )}
            {isCompleted && !isCurrent && (
              <Badge variant="secondary" data-testid={`badge-day-${day}-done`}>
                Done
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
