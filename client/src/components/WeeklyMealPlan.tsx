import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Printer, Utensils } from "lucide-react";
import type { WeeklyPlanData, DetailedDayMeals } from "@shared/schema";

interface WeeklyMealPlanProps {
  weekPlan: WeeklyPlanData;
}

function MealCard({ meal, mealType }: { meal: { name: string; calories: number; protein: number; carbs: number; fat: number; ingredients?: string[]; addedItems?: string[] }; mealType: string }) {
  return (
    <div className="border-l-4 border-primary/30 pl-4 py-2">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className="font-medium text-foreground">{mealType}:</span>
        <span className="text-muted-foreground">{meal.name}</span>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        <Badge variant="secondary" className="text-xs">{meal.calories} cal</Badge>
        <Badge variant="outline" className="text-xs">{meal.protein}g protein</Badge>
        <Badge variant="outline" className="text-xs">{meal.carbs}g carbs</Badge>
        <Badge variant="outline" className="text-xs">{meal.fat}g fat</Badge>
      </div>
      {meal.ingredients && meal.ingredients.length > 0 && (
        <p className="text-xs text-muted-foreground mt-1">
          Ingredients: {meal.ingredients.join(", ")}
        </p>
      )}
      {meal.addedItems && meal.addedItems.length > 0 && (
        <p className="text-xs text-primary/70 mt-1">
          + {meal.addedItems.join(", ")}
        </p>
      )}
    </div>
  );
}

function DayMealSection({ dayMeals }: { dayMeals: DetailedDayMeals }) {
  return (
    <Card className="print:break-inside-avoid print:shadow-none print:border">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <CardTitle className="text-lg">{dayMeals.dayName}</CardTitle>
          <div className="flex gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {dayMeals.totalCalories} cal
            </Badge>
            <Badge className="bg-green-100 text-green-700 border-green-200">
              {dayMeals.totalProtein}g protein
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <MealCard meal={dayMeals.breakfast} mealType="Breakfast" />
        <MealCard meal={dayMeals.lunch} mealType="Lunch" />
        <MealCard meal={dayMeals.snack} mealType="Snack" />
        <MealCard meal={dayMeals.dinner} mealType="Dinner" />
      </CardContent>
    </Card>
  );
}

export function WeeklyMealPlan({ weekPlan }: WeeklyMealPlanProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2" data-testid="text-meal-plan-title">
            <Utensils className="h-6 w-6 text-primary" />
            Week {weekPlan.weekNumber} Meal Plan
          </h2>
          <p className="text-muted-foreground mt-1">{weekPlan.theme}</p>
        </div>
        <Button onClick={handlePrint} className="gap-2" data-testid="button-print-meal-plan">
          <Printer className="h-4 w-4" />
          Print Meal Plan
        </Button>
      </div>

      <div className="hidden print:block text-center mb-6">
        <h1 className="text-2xl font-bold">Week {weekPlan.weekNumber} Meal Plan</h1>
        <p className="text-lg text-muted-foreground">{weekPlan.theme}</p>
        <p className="text-sm mt-2">Personalized Energy Blueprint - The Energy Lifestyle Company</p>
      </div>

      <Card className="bg-primary/5 border-primary/20 print:bg-white">
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-xs text-muted-foreground">Daily Calories</p>
              <p className="font-semibold text-foreground">{weekPlan.dailyCaloriesRange}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Daily Protein</p>
              <p className="font-semibold text-foreground">{weekPlan.dailyProteinRange}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Daily Carbs</p>
              <p className="font-semibold text-foreground">{weekPlan.dailyCarbsRange}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Daily Veggies</p>
              <p className="font-semibold text-foreground">{weekPlan.dailyVeggiesRange}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {weekPlan.dailyMeals.map((dayMeals, index) => (
          <DayMealSection key={index} dayMeals={dayMeals} />
        ))}
      </div>

      <div className="text-center text-xs text-muted-foreground print:mt-8 print:block hidden">
        <p>This plan is for educational purposes only, not medical advice.</p>
        <p>Consult a licensed physician before changing diet, exercise, or supplements.</p>
      </div>
    </div>
  );
}
