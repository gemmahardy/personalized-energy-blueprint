import { useParams, useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChecklistItem } from "@/components/ChecklistItem";
import { MealPlanCard } from "@/components/MealPlanCard";
import { WorkoutCard } from "@/components/WorkoutCard";
import { CompletionModal } from "@/components/CompletionModal";
import { ArrowLeft, ArrowRight, Lightbulb, CheckCircle2 } from "lucide-react";
import { getDayContent } from "@shared/programData";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { DailyChecklistItem } from "@shared/schema";
import { useState, useEffect } from "react";

export default function DayView() {
  const params = useParams<{ day: string }>();
  const [, setLocation] = useLocation();
  const day = parseInt(params.day || "1");
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [previouslyCompleted, setPreviouslyCompleted] = useState(false);
  
  const { data: checklistItems = [] } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const dayContent = getDayContent(day);
  
  const toggleMutation = useMutation({
    mutationFn: async ({ taskId, day, completed }: { taskId: string; day: number; completed: boolean }) => {
      return apiRequest("POST", "/api/checklist/toggle", { taskId, day, completed });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/checklist"] });
    },
  });
  
  useEffect(() => {
    if (!dayContent) return;
    
    const allTasksCompleted = dayContent.checklistTasks.every(task => {
      const item = checklistItems.find(
        i => i.day === day && i.taskId === task.id
      );
      return item?.completed || false;
    });
    
    if (allTasksCompleted && dayContent.checklistTasks.length > 0 && !previouslyCompleted) {
      setShowCompletionModal(true);
      setPreviouslyCompleted(true);
    }
  }, [checklistItems, day, dayContent, previouslyCompleted]);
  
  if (!dayContent) {
    return (
      <div className="container mx-auto px-6 py-8">
        <p>Day not found</p>
      </div>
    );
  }
  
  const handleToggle = (taskId: string, checked: boolean) => {
    toggleMutation.mutate({ taskId, day, completed: checked });
  };
  
  const isTaskChecked = (taskId: string) => {
    const item = checklistItems.find(
      i => i.day === day && i.taskId === taskId
    );
    return item?.completed || false;
  };
  
  const completedCount = dayContent.checklistTasks.filter(task => 
    isTaskChecked(task.id)
  ).length;
  
  const handlePrintMealPlan = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Meal Plan - Day ${day}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1 { color: #F97316; margin-bottom: 10px; }
            h2 { margin-top: 30px; margin-bottom: 10px; }
            .meal { margin-bottom: 20px; }
            .meal-title { font-weight: bold; margin-bottom: 5px; }
            .notes { margin-top: 30px; padding: 15px; background: #f5f5f5; border-left: 3px solid #F97316; }
            .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <h1>Personalized Energy Blueprint</h1>
          <p><strong>Day ${day} - Week ${dayContent.week}</strong></p>
          <p>Meal Plan for Melissa Gregory</p>
          <h2>Today's Meals</h2>
          <div class="meal">
            <div class="meal-title">Breakfast</div>
            <div>${dayContent.mealPlan.breakfast}</div>
          </div>
          <div class="meal">
            <div class="meal-title">Lunch</div>
            <div>${dayContent.mealPlan.lunch}</div>
          </div>
          <div class="meal">
            <div class="meal-title">Dinner</div>
            <div>${dayContent.mealPlan.dinner}</div>
          </div>
          <div class="meal">
            <div class="meal-title">Snacks</div>
            <div>${dayContent.mealPlan.snacks}</div>
          </div>
          ${dayContent.mealPlan.notes ? `
          <div class="notes">
            <strong>Note:</strong> ${dayContent.mealPlan.notes}
          </div>
          ` : ''}
          <div class="footer">
            <p>The Energy Lifestyle Company</p>
            <p>Support: sunshine@theenergylifestyle.com</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  
  const handlePrintWorkout = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Workout Plan - Day ${day}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            h1 { color: #F97316; margin-bottom: 10px; }
            h2 { margin-top: 30px; margin-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background: #f5f5f5; font-weight: bold; }
            .notes { margin-top: 30px; padding: 15px; background: #f5f5f5; border-left: 3px solid #F97316; }
            .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <h1>Personalized Energy Blueprint</h1>
          <p><strong>Day ${day} - Week ${dayContent.week}</strong></p>
          <p>Workout Plan for Melissa Gregory</p>
          <h2>${dayContent.workout.type}</h2>
          <p><strong>Duration:</strong> ${dayContent.workout.duration}</p>
          <table>
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              ${dayContent.workout.exercises.map(ex => `
                <tr>
                  <td>${ex.name}</td>
                  <td>
                    ${ex.sets && ex.reps ? `${ex.sets} × ${ex.reps}` : ''}
                    ${ex.duration ? ex.duration : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          ${dayContent.workout.notes ? `
          <div class="notes">
            <strong>Note:</strong> ${dayContent.workout.notes}
          </div>
          ` : ''}
          <div class="footer">
            <p>The Energy Lifestyle Company</p>
            <p>Support: sunshine@theenergylifestyle.com</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 space-y-6 max-w-6xl">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Button
          variant="ghost"
          onClick={() => setLocation(`/week/${dayContent.week}`)}
          className="gap-2"
          data-testid="button-back-week"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Week {dayContent.week}
        </Button>
        
        {day < 30 && (
          <Button
            variant="outline"
            onClick={() => setLocation(`/day/${day + 1}`)}
            className="gap-2"
            data-testid="button-next-day"
          >
            Next Day
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid={`text-day-${day}-title`}>
          Day {day}
        </h1>
        <p className="text-muted-foreground">Week {dayContent.week}</p>
      </div>
      
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-medium text-foreground mb-1">
                Today's Motivation
              </p>
              <p className="text-muted-foreground" data-testid={`text-motivation-${day}`}>
                {dayContent.motivation}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Daily Checklist
            </CardTitle>
            <div className="text-sm text-muted-foreground" data-testid={`text-checklist-progress-${day}`}>
              {completedCount}/{dayContent.checklistTasks.length} completed
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-1">
          {dayContent.checklistTasks.map((task) => (
            <ChecklistItem
              key={task.id}
              id={task.id}
              label={task.label}
              checked={isTaskChecked(task.id)}
              onCheckedChange={(checked) => handleToggle(task.id, checked)}
              category={task.category}
            />
          ))}
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MealPlanCard
          mealPlan={dayContent.mealPlan}
          day={day}
          week={dayContent.week}
          onPrint={handlePrintMealPlan}
        />
        
        <WorkoutCard
          workout={dayContent.workout}
          day={day}
          week={dayContent.week}
          onPrint={handlePrintWorkout}
        />
      </div>
      
      <CompletionModal
        open={showCompletionModal}
        onClose={() => {
          setShowCompletionModal(false);
          if (day === 30) {
            setLocation("/completion");
          }
        }}
        day={day}
        totalDays={30}
        congratsMessage={dayContent.congratulations}
      />
    </div>
  );
}
