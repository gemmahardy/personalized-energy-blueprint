import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import type { WeekSummary } from "@shared/schema";

interface WeekCardProps {
  week: WeekSummary;
  completedDays: number;
  totalDays: number;
}

export function WeekCard({ week, completedDays, totalDays }: WeekCardProps) {
  const progress = (completedDays / totalDays) * 100;
  const isComplete = completedDays === totalDays;
  
  return (
    <Link href={`/week/${week.weekNumber}`}>
      <Card 
        className="hover-elevate active-elevate-2 transition-all cursor-pointer h-full"
        data-testid={`card-week-${week.weekNumber}`}
      >
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <CardTitle className="text-xl flex items-center gap-2" data-testid={`text-week-${week.weekNumber}-title`}>
                Week {week.weekNumber}
                {isComplete && (
                  <CheckCircle2 className="h-5 w-5 text-primary" data-testid={`icon-week-${week.weekNumber}-complete`} />
                )}
              </CardTitle>
              <CardDescription data-testid={`text-week-${week.weekNumber}-range`}>
                {week.dateRange}
              </CardDescription>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
          </div>
          
          <Badge variant="secondary" className="w-fit" data-testid={`badge-week-${week.weekNumber}-theme`}>
            {week.theme}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium" data-testid={`text-week-${week.weekNumber}-progress`}>
                {completedDays}/{totalDays} days
              </span>
            </div>
            <Progress 
              value={progress} 
              className="h-2"
              data-testid={`progress-week-${week.weekNumber}`}
            />
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Weekly Goals:</p>
            <ul className="space-y-1">
              {week.goals.slice(0, 3).map((goal, index) => (
                <li 
                  key={index} 
                  className="text-sm text-muted-foreground flex items-start gap-2"
                  data-testid={`text-week-${week.weekNumber}-goal-${index}`}
                >
                  <span className="text-primary mt-0.5">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
