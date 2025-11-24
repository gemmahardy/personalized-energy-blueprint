import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, UtensilsCrossed } from "lucide-react";
import type { MealPlanDay } from "@shared/schema";

interface MealPlanCardProps {
  mealPlan: MealPlanDay;
  day: number;
  week: number;
  onPrint?: () => void;
}

export function MealPlanCard({ mealPlan, day, week, onPrint }: MealPlanCardProps) {
  return (
    <Card data-testid={`card-meal-plan-day-${day}`}>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="h-5 w-5 text-primary" />
          <CardTitle data-testid={`text-meal-plan-title-${day}`}>
            Today's Meal Plan
          </CardTitle>
        </div>
        <CardDescription>
          Nourishing meals to fuel your energy
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Breakfast</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-breakfast-${day}`}>
              {mealPlan.breakfast}
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Lunch</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-lunch-${day}`}>
              {mealPlan.lunch}
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Dinner</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-dinner-${day}`}>
              {mealPlan.dinner}
            </p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-semibold text-foreground">Snacks</p>
            <p className="text-sm text-muted-foreground" data-testid={`text-snacks-${day}`}>
              {mealPlan.snacks}
            </p>
          </div>
          
          {mealPlan.notes && (
            <div className="pt-2 border-t">
              <p className="text-xs font-medium text-foreground">Note:</p>
              <p className="text-xs text-muted-foreground mt-1" data-testid={`text-meal-notes-${day}`}>
                {mealPlan.notes}
              </p>
            </div>
          )}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full gap-2"
          onClick={onPrint}
          data-testid={`button-print-meal-plan-${day}`}
        >
          <Printer className="h-4 w-4" />
          Print Meal Plan
        </Button>
      </CardContent>
    </Card>
  );
}
