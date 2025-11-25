import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DayCard } from "@/components/DayCard";
import { WeeklyMealPlan } from "@/components/WeeklyMealPlan";
import { GroceryList } from "@/components/GroceryList";
import { DailyRoutines } from "@/components/DailyRoutines";
import { ExercisePlan } from "@/components/ExercisePlan";
import { WaterTracker } from "@/components/WaterTracker";
import { ArrowLeft, Calendar, Utensils, ShoppingCart, Sunrise, Dumbbell, CheckSquare, Droplets } from "lucide-react";
import { getWeekSummary, getWeekDays } from "@shared/programData";
import { getWeeklyPlan } from "@shared/weeklyPlanData";
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
  const weekPlan = getWeeklyPlan(weekNumber);
  
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
        className="gap-2 print:hidden"
        data-testid="button-back-dashboard"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Button>
      
      <Card className="border-primary/20 print:hidden">
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
      
      <Tabs defaultValue="progress" className="w-full">
        <TabsList className="flex flex-wrap sm:grid sm:grid-cols-6 w-full gap-1 sm:gap-0 h-auto print:hidden" data-testid="tabs-week-view">
          <TabsTrigger value="progress" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-progress">
            <CheckSquare className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Progress</span>
          </TabsTrigger>
          <TabsTrigger value="meals" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-meals">
            <Utensils className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Meals</span>
          </TabsTrigger>
          <TabsTrigger value="grocery" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-grocery">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Grocery</span>
          </TabsTrigger>
          <TabsTrigger value="exercise" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-exercise">
            <Dumbbell className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Exercise</span>
          </TabsTrigger>
          <TabsTrigger value="routines" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-routines">
            <Sunrise className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Routines</span>
          </TabsTrigger>
          <TabsTrigger value="water" className="flex-1 sm:flex-none gap-1 text-xs sm:text-sm px-2 sm:px-3 py-2" data-testid="tab-water">
            <Droplets className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Water</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="progress" className="mt-6">
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
        </TabsContent>
        
        <TabsContent value="meals" className="mt-6">
          {weekPlan ? (
            <WeeklyMealPlan weekPlan={weekPlan} />
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">Meal plan data not available for this week.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="grocery" className="mt-6">
          {weekPlan ? (
            <GroceryList weekPlan={weekPlan} />
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">Grocery list not available for this week.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="exercise" className="mt-6">
          <ExercisePlan weekNumber={weekNumber} />
        </TabsContent>
        
        <TabsContent value="routines" className="mt-6">
          {weekPlan ? (
            <DailyRoutines weekPlan={weekPlan} />
          ) : (
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">Routine data not available for this week.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="water" className="mt-6">
          <WaterTracker weekNumber={weekNumber} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
