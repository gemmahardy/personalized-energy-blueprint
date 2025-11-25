import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Calendar, Award, Zap, Target, Flame, Star, Trophy, Crown, Heart, Sparkles, Sun, Moon, Coffee, Dumbbell, Droplets, Brain, Medal, Rocket, CheckCircle2, PartyPopper } from "lucide-react";
import { programDays } from "@shared/programData";
import type { DailyChecklistItem } from "@shared/schema";

export default function AnalyticsView() {
  const [, setLocation] = useLocation();
  
  const { data: checklistItems = [], isLoading } = useQuery<DailyChecklistItem[]>({
    queryKey: ["/api/checklist"],
  });
  
  const getDayProgress = (day: number) => {
    const dayContent = programDays.find(d => d.day === day);
    if (!dayContent) return 0;
    
    const dayTasks = dayContent.checklistTasks;
    if (dayTasks.length === 0) return 0;
    
    const completedTasks = checklistItems.filter(
      item => item.day === day && item.completed
    );
    return Math.round((completedTasks.length / dayTasks.length) * 100);
  };
  
  const isDayCompleted = (day: number) => getDayProgress(day) === 100;
  
  const completedDays = programDays.filter(day => isDayCompleted(day.day));
  const totalDays = programDays.length;
  const completionRate = Math.round((completedDays.length / totalDays) * 100);
  
  const calculateStreak = () => {
    let longestStreak = 0;
    let tempStreak = 0;
    
    for (let i = 1; i <= totalDays; i++) {
      if (isDayCompleted(i)) {
        tempStreak++;
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak;
        }
      } else {
        tempStreak = 0;
      }
    }
    
    let currentStreak = 0;
    for (let i = totalDays; i >= 1; i--) {
      if (isDayCompleted(i)) {
        currentStreak++;
      } else {
        break;
      }
    }
    
    return { currentStreak, longestStreak };
  };
  
  const { currentStreak, longestStreak } = calculateStreak();
  
  const weeklyProgress = [1, 2, 3, 4].map(weekNum => {
    const weekDays = programDays.filter(d => d.week === weekNum);
    const completedInWeek = weekDays.filter(d => isDayCompleted(d.day));
    return {
      week: weekNum,
      completed: completedInWeek.length,
      total: weekDays.length,
      percentage: Math.round((completedInWeek.length / weekDays.length) * 100)
    };
  });
  
  const totalTasks = programDays.reduce((sum, day) => sum + day.checklistTasks.length, 0);
  const completedTasks = checklistItems.filter(item => item.completed).length;
  const tasksCompletionRate = Math.round((completedTasks / totalTasks) * 100);
  
  const achievements = [
    // Day Milestone Achievements
    {
      id: 'first-day',
      name: 'First Steps',
      description: 'Complete your first day',
      earned: completedDays.length >= 1,
      icon: Target
    },
    {
      id: 'day-3',
      name: 'Triple Threat',
      description: 'Complete 3 days',
      earned: completedDays.length >= 3,
      icon: Star
    },
    {
      id: 'day-5',
      name: 'High Five',
      description: 'Complete 5 days',
      earned: completedDays.length >= 5,
      icon: Sparkles
    },
    {
      id: 'day-10',
      name: 'Double Digits',
      description: 'Complete 10 days',
      earned: completedDays.length >= 10,
      icon: Medal
    },
    {
      id: 'halfway',
      name: 'Halfway Hero',
      description: 'Complete 15 days',
      earned: completedDays.length >= 15,
      icon: TrendingUp
    },
    {
      id: 'day-20',
      name: 'Momentum Master',
      description: 'Complete 20 days',
      earned: completedDays.length >= 20,
      icon: Rocket
    },
    {
      id: 'day-25',
      name: 'Final Countdown',
      description: 'Complete 25 days',
      earned: completedDays.length >= 25,
      icon: Trophy
    },
    {
      id: 'complete-30',
      name: 'Energy Master',
      description: 'Complete all 30 days',
      earned: completedDays.length === 30,
      icon: Crown
    },
    
    // Week Completion Achievements
    {
      id: 'week-one',
      name: 'Week 1 Warrior',
      description: 'Complete Week 1 - Foundation',
      earned: programDays.filter(d => d.week === 1).every(d => isDayCompleted(d.day)),
      icon: Award
    },
    {
      id: 'week-two',
      name: 'Week 2 Champion',
      description: 'Complete Week 2 - Momentum',
      earned: programDays.filter(d => d.week === 2).every(d => isDayCompleted(d.day)),
      icon: Award
    },
    {
      id: 'week-three',
      name: 'Week 3 Virtuoso',
      description: 'Complete Week 3 - Flow State',
      earned: programDays.filter(d => d.week === 3).every(d => isDayCompleted(d.day)),
      icon: Award
    },
    {
      id: 'week-four',
      name: 'Week 4 Legend',
      description: 'Complete Week 4 - Mastery',
      earned: programDays.filter(d => d.week === 4).every(d => isDayCompleted(d.day)),
      icon: Award
    },
    
    // Streak Achievements
    {
      id: 'streak-3',
      name: '3-Day Streak',
      description: 'Maintain a 3-day streak',
      earned: longestStreak >= 3,
      icon: Flame
    },
    {
      id: 'streak-5',
      name: '5-Day Fire',
      description: 'Maintain a 5-day streak',
      earned: longestStreak >= 5,
      icon: Flame
    },
    {
      id: 'streak-7',
      name: 'Week of Power',
      description: 'Maintain a 7-day streak',
      earned: longestStreak >= 7,
      icon: Flame
    },
    {
      id: 'streak-14',
      name: 'Fortnight Force',
      description: 'Maintain a 14-day streak',
      earned: longestStreak >= 14,
      icon: Flame
    },
    {
      id: 'streak-21',
      name: 'Habit Hero',
      description: 'Maintain a 21-day streak',
      earned: longestStreak >= 21,
      icon: Brain
    },
    {
      id: 'streak-30',
      name: 'Perfect Journey',
      description: 'Complete 30-day streak',
      earned: longestStreak >= 30,
      icon: PartyPopper
    },
    
    // Task-Based Achievements
    {
      id: 'tasks-25',
      name: 'Task Starter',
      description: 'Complete 25 tasks',
      earned: completedTasks >= 25,
      icon: CheckCircle2
    },
    {
      id: 'tasks-50',
      name: 'Task Crusher',
      description: 'Complete 50 tasks',
      earned: completedTasks >= 50,
      icon: CheckCircle2
    },
    {
      id: 'tasks-100',
      name: 'Century Club',
      description: 'Complete 100 tasks',
      earned: completedTasks >= 100,
      icon: Zap
    },
    {
      id: 'tasks-150',
      name: 'Task Titan',
      description: 'Complete 150 tasks',
      earned: completedTasks >= 150,
      icon: Zap
    },
    {
      id: 'tasks-200',
      name: 'Task Legend',
      description: 'Complete 200 tasks',
      earned: completedTasks >= 200,
      icon: Crown
    },
    
    // Wellness Category Achievements
    {
      id: 'early-riser',
      name: 'Early Riser',
      description: 'Complete 7 morning sunlight tasks',
      earned: checklistItems.filter(item => item.completed && item.taskId.endsWith('-1')).length >= 7,
      icon: Sun
    },
    {
      id: 'hydration-hero',
      name: 'Hydration Hero',
      description: 'Complete 10 hydration tasks',
      earned: checklistItems.filter(item => item.completed && item.taskId.endsWith('-2')).length >= 10,
      icon: Droplets
    },
    {
      id: 'mindful-master',
      name: 'Mindful Master',
      description: 'Complete 10 meditation tasks',
      earned: checklistItems.filter(item => item.completed && item.taskId.endsWith('-8')).length >= 10,
      icon: Brain
    },
    {
      id: 'walking-wonder',
      name: 'Walking Wonder',
      description: 'Complete 15 walking tasks',
      earned: checklistItems.filter(item => item.completed && item.taskId.endsWith('-7')).length >= 15,
      icon: Dumbbell
    },
    
    // Special Achievements
    {
      id: 'dedication',
      name: 'Dedicated Soul',
      description: 'Complete 50% of all tasks',
      earned: tasksCompletionRate >= 50,
      icon: Heart
    },
    {
      id: 'excellence',
      name: 'Excellence Award',
      description: 'Complete 75% of all tasks',
      earned: tasksCompletionRate >= 75,
      icon: Star
    },
    {
      id: 'perfectionist',
      name: 'Perfectionist',
      description: 'Complete 100% of all tasks',
      earned: tasksCompletionRate === 100,
      icon: Trophy
    }
  ];
  
  const earnedAchievements = achievements.filter(a => a.earned);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center">Loading analytics...</div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 space-y-6">
      <Button
        variant="ghost"
        onClick={() => setLocation("/")}
        className="gap-2"
        data-testid="button-back-dashboard-analytics"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Button>
      
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-analytics-title">
          Progress Analytics
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Track your journey through your energy blueprint with detailed insights and achievements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground" data-testid="text-completion-rate">
              {completionRate}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedDays.length} of {totalDays} days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary flex items-center gap-2" data-testid="text-current-streak">
              <Flame className="h-8 w-8" />
              {currentStreak}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Consecutive days
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Longest Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground" data-testid="text-longest-streak">
              {longestStreak}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Best performance
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground" data-testid="text-tasks-completed">
              {completedTasks}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {tasksCompletionRate}% of all tasks
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
          <CardDescription>Your completion status across each week</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {weeklyProgress.map(week => (
            <div key={week.week} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Week {week.week}</span>
                <span className="text-sm text-muted-foreground" data-testid={`text-week-${week.week}-progress`}>
                  {week.completed} / {week.total} days ({week.percentage}%)
                </span>
              </div>
              <Progress value={week.percentage} className="h-2" data-testid={`progress-week-${week.week}`} />
            </div>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Achievements
            <Badge variant="secondary" className="ml-2">
              {earnedAchievements.length} / {achievements.length}
            </Badge>
          </CardTitle>
          <CardDescription>
            Unlock badges as you progress through your energy journey. You've earned {earnedAchievements.length} of {achievements.length} achievements!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {achievements.map(achievement => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={`p-3 rounded-lg border transition-all ${
                    achievement.earned
                      ? 'bg-primary/10 border-primary shadow-sm'
                      : 'bg-muted/10 border-muted/50 opacity-60'
                  }`}
                  data-testid={`achievement-${achievement.id}`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-full ${achievement.earned ? 'bg-primary/20' : 'bg-muted/30'}`}>
                      <Icon className={`h-5 w-5 ${achievement.earned ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-semibold text-xs truncate">{achievement.name}</h3>
                        {achievement.earned && (
                          <Badge variant="default" className="text-[10px] px-1.5 py-0">Earned</Badge>
                        )}
                      </div>
                      <p className="text-[10px] text-muted-foreground truncate">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center text-sm text-muted-foreground">
        <p>Keep up the great work! Your consistent effort is building lasting energy habits.</p>
      </div>
    </div>
  );
}
