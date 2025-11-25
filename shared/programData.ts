import type { DayContent, WeekSummary } from "./schema";

export const weekSummaries: WeekSummary[] = [
  {
    weekNumber: 1,
    dateRange: "Days 1-7",
    theme: "Foundation & Energy Awareness",
    goals: [
      "Establish morning routine",
      "Track energy levels",
      "Hydration consistency",
      "Sleep pattern awareness"
    ]
  },
  {
    weekNumber: 2,
    dateRange: "Days 8-14",
    theme: "Building Momentum",
    goals: [
      "Increase movement consistency",
      "Optimize meal timing",
      "Stress management practices",
      "Energy-boosting habits"
    ]
  },
  {
    weekNumber: 3,
    dateRange: "Days 15-21",
    theme: "Flow State Mastery",
    goals: [
      "Peak performance windows",
      "Advanced nutrition strategies",
      "Recovery optimization",
      "Mindful movement practice"
    ]
  },
  {
    weekNumber: 4,
    dateRange: "Days 22-30",
    theme: "Sustainable Energy Lifestyle",
    goals: [
      "Long-term habit integration",
      "Personalized routine refinement",
      "Energy blueprint completion",
      "Future planning & celebration"
    ]
  }
];

export const programDays: DayContent[] = [
  // Week 1
  {
    day: 1,
    week: 1,
    date: "Day 1",
    motivation: "Welcome to your energy transformation journey, Flow Seeker! Today marks the beginning of something powerful.",
    congratulations: "Amazing start! You've taken the first step toward your energized life. Every journey begins with day one.",
    checklistTasks: [
      { id: "d1-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d1-2", label: "Morning hydration: 16oz water upon waking", category: "Hydration" },
      { id: "d1-3", label: "Complete breakfast from meal plan", category: "Nutrition" },
      { id: "d1-4", label: "10-minute morning stretch routine", category: "Movement" },
      { id: "d1-5", label: "Note your energy level (1-10) at 3pm", category: "Awareness" },
      { id: "d1-6", label: "Prepare tomorrow's workout clothes", category: "Preparation" },
      { id: "d1-7", label: "15-minute walk", category: "Movement" },
      { id: "d1-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Energizing Berry Smoothie Bowl with chia seeds, almond butter, and granola",
      lunch: "Mediterranean Quinoa Salad with chickpeas, cucumber, tomatoes, and lemon tahini dressing",
      dinner: "Grilled Salmon with roasted sweet potato and steamed broccoli",
      snacks: "Apple slices with almond butter, handful of mixed nuts",
      notes: "Focus on whole foods and stay hydrated throughout the day"
    },
    workout: {
      type: "Foundation Movement",
      duration: "20 minutes",
      exercises: [
        { name: "Full body warm-up", duration: "5 min" },
        { name: "Bodyweight squats", sets: "3", reps: "12" },
        { name: "Push-ups (modified if needed)", sets: "3", reps: "10" },
        { name: "Plank hold", sets: "3", duration: "30 sec" },
        { name: "Walking lunges", sets: "2", reps: "10 each leg" },
        { name: "Cool down stretch", duration: "5 min" }
      ],
      notes: "Start slow, focus on form over speed"
    }
  },
  {
    day: 2,
    week: 1,
    date: "Day 2",
    motivation: "Your body is waking up to new possibilities. Trust the process, Flow Seeker.",
    congratulations: "Two days strong! You're building consistency, one day at a time.",
    checklistTasks: [
      { id: "d2-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d2-2", label: "Morning hydration routine", category: "Hydration" },
      { id: "d2-3", label: "Eat within 1 hour of waking", category: "Nutrition" },
      { id: "d2-4", label: "Complete today's workout", category: "Movement" },
      { id: "d2-5", label: "Take a 10-minute walk after lunch", category: "Movement" },
      { id: "d2-6", label: "Evening wind-down: 5 min deep breathing", category: "Recovery" },
      { id: "d2-7", label: "15-minute walk", category: "Movement" },
      { id: "d2-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Overnight Oats with blueberries, walnuts, and cinnamon",
      lunch: "Turkey and Avocado Wrap with mixed greens and hummus",
      dinner: "Chicken Stir-fry with colorful vegetables and brown rice",
      snacks: "Greek yogurt with honey, veggie sticks with guacamole",
      notes: "Include protein with every meal for sustained energy"
    },
    workout: {
      type: "Active Recovery & Mobility",
      duration: "25 minutes",
      exercises: [
        { name: "Gentle yoga flow", duration: "15 min" },
        { name: "Hip mobility exercises", duration: "5 min" },
        { name: "Shoulder rolls and neck stretches", duration: "3 min" },
        { name: "Meditation or breathing exercises", duration: "2 min" }
      ],
      notes: "Listen to your body, move with intention"
    }
  },
  {
    day: 3,
    week: 1,
    date: "Day 3",
    motivation: "Energy flows where attention goes. Notice what makes you feel alive today.",
    congratulations: "Three days in! You're creating new neural pathways for wellness.",
    checklistTasks: [
      { id: "d3-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d3-2", label: "Hydration check: 64oz water by end of day", category: "Hydration" },
      { id: "d3-3", label: "Balanced breakfast completed", category: "Nutrition" },
      { id: "d3-4", label: "Morning workout session", category: "Movement" },
      { id: "d3-5", label: "Track afternoon energy dip (if any)", category: "Awareness" },
      { id: "d3-6", label: "Prepare healthy snacks for tomorrow", category: "Preparation" },
      { id: "d3-7", label: "15-minute walk", category: "Movement" },
      { id: "d3-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Veggie Omelet with spinach, mushrooms, and feta cheese, side of whole grain toast",
      lunch: "Asian-Inspired Buddha Bowl with edamame, brown rice, cabbage, and sesame ginger dressing",
      dinner: "Baked Cod with quinoa pilaf and roasted Brussels sprouts",
      snacks: "Protein smoothie, rice cakes with avocado",
      notes: "Eat mindfully, chew thoroughly for better digestion"
    },
    workout: {
      type: "Strength Building",
      duration: "30 minutes",
      exercises: [
        { name: "Warm-up cardio", duration: "5 min" },
        { name: "Dumbbell rows", sets: "3", reps: "12 each arm" },
        { name: "Goblet squats", sets: "3", reps: "15" },
        { name: "Shoulder press", sets: "3", reps: "10" },
        { name: "Bicycle crunches", sets: "3", reps: "20" },
        { name: "Cool down and stretch", duration: "5 min" }
      ],
      notes: "Choose weights that challenge you while maintaining good form"
    }
  },
  {
    day: 4,
    week: 1,
    date: "Day 4",
    motivation: "You're stronger than you think. Your commitment is building your future energy.",
    congratulations: "Four days complete! The habits are taking root.",
    checklistTasks: [
      { id: "d4-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d4-2", label: "Start day with warm lemon water", category: "Hydration" },
      { id: "d4-3", label: "Nutrient-dense breakfast", category: "Nutrition" },
      { id: "d4-4", label: "Complete cardio workout", category: "Movement" },
      { id: "d4-5", label: "Take 3 mindful breathing breaks", category: "Mindfulness" },
      { id: "d4-6", label: "Bedtime by 10:30 PM", category: "Recovery" },
      { id: "d4-7", label: "15-minute walk", category: "Movement" },
      { id: "d4-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Green Power Smoothie with spinach, banana, protein powder, and almond milk",
      lunch: "Grilled Chicken Caesar Salad with whole grain croutons",
      dinner: "Turkey Chili with beans, vegetables, and a side of cornbread",
      snacks: "Energy balls (dates, nuts, coconut), sliced bell peppers with hummus",
      notes: "Focus on colorful vegetables to maximize nutrients"
    },
    workout: {
      type: "Cardio Flow",
      duration: "30 minutes",
      exercises: [
        { name: "Warm-up walk or light jog", duration: "5 min" },
        { name: "Jump rope or jumping jacks", duration: "3 min" },
        { name: "Burpees", sets: "3", reps: "8" },
        { name: "Mountain climbers", sets: "3", duration: "45 sec" },
        { name: "High knees", sets: "3", duration: "30 sec" },
        { name: "Cool down walk", duration: "5 min" }
      ],
      notes: "Modify intensity based on your energy levels"
    }
  },
  {
    day: 5,
    week: 1,
    date: "Day 5",
    motivation: "Five days of showing up for yourself. This is what transformation looks like.",
    congratulations: "High five for Day 5! You're proving your commitment every single day.",
    checklistTasks: [
      { id: "d5-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d5-2", label: "Morning hydration ritual", category: "Hydration" },
      { id: "d5-3", label: "Protein-rich breakfast", category: "Nutrition" },
      { id: "d5-4", label: "Full-body strength workout", category: "Movement" },
      { id: "d5-5", label: "Meal prep for weekend", category: "Preparation" },
      { id: "d5-6", label: "Journal: What gave me energy this week?", category: "Reflection" },
      { id: "d5-7", label: "15-minute walk", category: "Movement" },
      { id: "d5-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Scrambled Eggs with smoked salmon, avocado, and whole grain toast",
      lunch: "Lentil Soup with mixed greens salad and olive oil dressing",
      dinner: "Grilled Chicken Fajitas with peppers, onions, and whole wheat tortillas",
      snacks: "Cottage cheese with berries, trail mix",
      notes: "Prep extras for easy weekend meals"
    },
    workout: {
      type: "Total Body Strength",
      duration: "35 minutes",
      exercises: [
        { name: "Dynamic warm-up", duration: "5 min" },
        { name: "Deadlifts or Romanian deadlifts", sets: "4", reps: "10" },
        { name: "Chest press or push-ups", sets: "3", reps: "12" },
        { name: "Walking lunges with weights", sets: "3", reps: "12 each leg" },
        { name: "Plank variations", sets: "3", duration: "45 sec" },
        { name: "Stretching routine", duration: "5 min" }
      ],
      notes: "Focus on controlled movements and breathing"
    }
  },
  {
    day: 6,
    week: 1,
    date: "Day 6",
    motivation: "Weekend energy is your practice ground. Choose vitality over convenience.",
    congratulations: "Six days strong! You're redefining your weekends.",
    checklistTasks: [
      { id: "d6-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d6-2", label: "Continue hydration habit", category: "Hydration" },
      { id: "d6-3", label: "Balanced weekend breakfast", category: "Nutrition" },
      { id: "d6-4", label: "Outdoor activity or workout", category: "Movement" },
      { id: "d6-5", label: "Try a new healthy recipe", category: "Exploration" },
      { id: "d6-6", label: "Review Week 1 progress", category: "Reflection" },
      { id: "d6-7", label: "15-minute walk", category: "Movement" },
      { id: "d6-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Whole Grain Pancakes with fresh berries and pure maple syrup",
      lunch: "Caprese Salad with fresh mozzarella, tomatoes, basil, and balsamic glaze",
      dinner: "Herb-Crusted Pork Tenderloin with roasted root vegetables",
      snacks: "Dark chocolate and almonds, fruit salad",
      notes: "Enjoy nutritious foods that feel special"
    },
    workout: {
      type: "Adventure Movement",
      duration: "45-60 minutes",
      exercises: [
        { name: "Choose your adventure: Hike, bike ride, swimming, or long walk", duration: "45-60 min" },
        { name: "Optional: Yoga or stretching session", duration: "15 min" }
      ],
      notes: "Make it fun and social if possible!"
    }
  },
  {
    day: 7,
    week: 1,
    date: "Day 7",
    motivation: "One week complete! You've laid the foundation for lasting change.",
    congratulations: "🌟 Week 1 Complete! You showed up every single day. This is just the beginning!",
    checklistTasks: [
      { id: "d7-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d7-2", label: "Hydration throughout the day", category: "Hydration" },
      { id: "d7-3", label: "Nourishing meals all day", category: "Nutrition" },
      { id: "d7-4", label: "Active recovery session", category: "Movement" },
      { id: "d7-5", label: "Plan Week 2 goals", category: "Planning" },
      { id: "d7-6", label: "Celebrate your Week 1 success!", category: "Celebration" },
      { id: "d7-7", label: "15-minute walk", category: "Movement" },
      { id: "d7-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Avocado Toast with poached eggs and microgreens",
      lunch: "Build-Your-Own Power Bowl (choice of protein, grains, veggies)",
      dinner: "Homemade Pizza with whole wheat crust, lots of veggies, and lean protein",
      snacks: "Smoothie, veggie chips with salsa",
      notes: "Reflect on what meals made you feel best"
    },
    workout: {
      type: "Restorative Movement",
      duration: "30 minutes",
      exercises: [
        { name: "Gentle stretching routine", duration: "10 min" },
        { name: "Foam rolling", duration: "10 min" },
        { name: "Meditation or mindful breathing", duration: "10 min" }
      ],
      notes: "Rest is productive. Honor your body's recovery needs."
    }
  },
  // Week 2 - Days 8-14
  {
    day: 8,
    week: 2,
    date: "Day 8",
    motivation: "Week 2 begins! You're building on a strong foundation.",
    congratulations: "Day 8 done! Consistency is your superpower.",
    checklistTasks: [
      { id: "d8-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d8-2", label: "Morning hydration + gratitude practice", category: "Mindfulness" },
      { id: "d8-3", label: "Energizing breakfast", category: "Nutrition" },
      { id: "d8-4", label: "Interval training workout", category: "Movement" },
      { id: "d8-5", label: "Track energy peaks today", category: "Awareness" },
      { id: "d8-6", label: "Evening mobility routine", category: "Recovery" },
      { id: "d8-7", label: "15-minute walk", category: "Movement" },
      { id: "d8-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Protein Power Bowl with Greek yogurt, granola, nuts, and fresh fruit",
      lunch: "Tuna Nicoise Salad with hard-boiled eggs, green beans, and olives",
      dinner: "Lean Beef Stir-fry with snap peas, carrots, and cauliflower rice",
      snacks: "Protein bar, cucumber with tzatziki",
      notes: "Notice how balanced meals affect your afternoon energy"
    },
    workout: {
      type: "HIIT Training",
      duration: "25 minutes",
      exercises: [
        { name: "Warm-up", duration: "5 min" },
        { name: "Circuit: 30 sec work, 15 sec rest", sets: "4 rounds" },
        { name: "- Burpees", reps: "max" },
        { name: "- Squats", reps: "max" },
        { name: "- Push-ups", reps: "max" },
        { name: "- High knees", reps: "max" },
        { name: "Cool down stretch", duration: "5 min" }
      ],
      notes: "Push yourself but maintain form"
    }
  },
  // Continuing with abbreviated content for Days 9-30 to keep within reasonable length
  // Each following day follows similar structure with progressive themes
  {
    day: 9,
    week: 2,
    date: "Day 9",
    motivation: "Your energy is an investment. Every healthy choice compounds.",
    congratulations: "Nine days of excellence! You're in the momentum zone.",
    checklistTasks: [
      { id: "d9-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d9-2", label: "Hydration goal: 80oz today", category: "Hydration" },
      { id: "d9-3", label: "Balanced breakfast with protein", category: "Nutrition" },
      { id: "d9-4", label: "Strength training session", category: "Movement" },
      { id: "d9-5", label: "15-minute walk after dinner", category: "Movement" },
      { id: "d9-6", label: "Prepare healthy lunch for tomorrow", category: "Preparation" },
      { id: "d9-7", label: "15-minute walk", category: "Movement" },
      { id: "d9-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Spinach and Mushroom Frittata with whole grain toast",
      lunch: "Chicken and Vegetable Soup with crusty bread",
      dinner: "Baked Salmon with asparagus and wild rice",
      snacks: "Apple with peanut butter, mixed nuts",
      notes: "Include omega-3s for brain and energy support"
    },
    workout: {
      type: "Upper Body Strength",
      duration: "30 minutes",
      exercises: [
        { name: "Warm-up", duration: "5 min" },
        { name: "Dumbbell bench press", sets: "3", reps: "12" },
        { name: "Bent-over rows", sets: "3", reps: "12" },
        { name: "Overhead press", sets: "3", reps: "10" },
        { name: "Bicep curls", sets: "3", reps: "12" },
        { name: "Tricep dips", sets: "3", reps: "10" }
      ]
    }
  },
  {
    day: 10,
    week: 2,
    date: "Day 10",
    motivation: "Double digits! You're proving that sustainable change is possible.",
    congratulations: "Day 10 complete! You're a third of the way through!",
    checklistTasks: [
      { id: "d10-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d10-2", label: "Morning lemon water ritual", category: "Hydration" },
      { id: "d10-3", label: "Wholesome breakfast", category: "Nutrition" },
      { id: "d10-4", label: "Lower body workout", category: "Movement" },
      { id: "d10-5", label: "Practice stress-relief technique", category: "Mindfulness" },
      { id: "d10-6", label: "Sleep prep: screens off by 9pm", category: "Recovery" },
      { id: "d10-7", label: "15-minute walk", category: "Movement" },
      { id: "d10-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Chia Pudding with almond milk, berries, and sliced almonds",
      lunch: "Grilled Vegetable and Hummus Wrap",
      dinner: "Turkey Meatballs with zucchini noodles and marinara sauce",
      snacks: "Kale chips, protein shake",
      notes: "Focus on anti-inflammatory foods"
    },
    workout: {
      type: "Lower Body Power",
      duration: "35 minutes",
      exercises: [
        { name: "Dynamic warm-up", duration: "5 min" },
        { name: "Squats", sets: "4", reps: "12" },
        { name: "Deadlifts", sets: "4", reps: "10" },
        { name: "Lunges", sets: "3", reps: "12 each" },
        { name: "Calf raises", sets: "3", reps: "15" },
        { name: "Glute bridges", sets: "3", reps: "15" }
      ]
    }
  },
  // Days 11-30 abbreviated for length - following same pattern
  {
    day: 11,
    week: 2,
    date: "Day 11",
    motivation: "Your body is adapting, your mind is strengthening. Keep flowing.",
    congratulations: "Eleven days strong! The transformation is happening.",
    checklistTasks: [
      { id: "d11-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d11-2", label: "Consistent hydration", category: "Hydration" },
      { id: "d11-3", label: "Energizing breakfast", category: "Nutrition" },
      { id: "d11-4", label: "Active recovery or yoga", category: "Movement" },
      { id: "d11-5", label: "Mindful eating - no screens", category: "Mindfulness" },
      { id: "d11-6", label: "Evening gratitude journal", category: "Reflection" },
      { id: "d11-7", label: "15-minute walk", category: "Movement" },
      { id: "d11-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Banana Protein Pancakes with almond butter",
      lunch: "Chicken Caesar Salad with homemade dressing",
      dinner: "Shrimp and Vegetable Kebabs with quinoa",
      snacks: "Greek yogurt parfait, veggie sticks",
      notes: "Eat slowly and savor each bite"
    },
    workout: {
      type: "Flow Yoga",
      duration: "40 minutes",
      exercises: [
        { name: "Vinyasa flow sequence", duration: "30 min" },
        { name: "Hip openers", duration: "5 min" },
        { name: "Savasana and meditation", duration: "5 min" }
      ]
    }
  },
  {
    day: 12,
    week: 2,
    date: "Day 12",
    motivation: "Midway through Week 2. You're building unstoppable momentum!",
    congratulations: "Day 12 achieved! Your consistency is inspiring.",
    checklistTasks: [
      { id: "d12-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d12-2", label: "Hydration throughout day", category: "Hydration" },
      { id: "d12-3", label: "Nutrient-dense meals", category: "Nutrition" },
      { id: "d12-4", label: "Full body circuit workout", category: "Movement" },
      { id: "d12-5", label: "Take movement breaks every hour", category: "Movement" },
      { id: "d12-6", label: "Reflect on energy improvements", category: "Awareness" },
      { id: "d12-7", label: "15-minute walk", category: "Movement" },
      { id: "d12-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Smoothie Bowl with tropical fruits and coconut",
      lunch: "Mediterranean Chickpea Salad",
      dinner: "Grilled Chicken with sweet potato wedges and green beans",
      snacks: "Energy bites, celery with almond butter",
      notes: "Focus on variety in vegetables"
    },
    workout: {
      type: "Circuit Training",
      duration: "30 minutes",
      exercises: [
        { name: "Full body circuit - 3 rounds", sets: "3" },
        { name: "- Squats", reps: "15" },
        { name: "- Push-ups", reps: "12" },
        { name: "- Lunges", reps: "10 each" },
        { name: "- Plank", duration: "45 sec" },
        { name: "- Jumping jacks", reps: "20" }
      ]
    }
  },
  {
    day: 13,
    week: 2,
    date: "Day 13",
    motivation: "Lucky Day 13! Your dedication is creating your own luck.",
    congratulations: "Thirteen days of showing up! You're unstoppable.",
    checklistTasks: [
      { id: "d13-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d13-2", label: "Morning hydration boost", category: "Hydration" },
      { id: "d13-3", label: "Power-packed breakfast", category: "Nutrition" },
      { id: "d13-4", label: "Cardio session", category: "Movement" },
      { id: "d13-5", label: "Try a new energizing recipe", category: "Nutrition" },
      { id: "d13-6", label: "Evening stretch routine", category: "Recovery" },
      { id: "d13-7", label: "15-minute walk", category: "Movement" },
      { id: "d13-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Veggie Scramble with sweet potato hash",
      lunch: "Thai-Inspired Peanut Noodles with vegetables",
      dinner: "Baked Cod with herb-roasted vegetables",
      snacks: "Trail mix, hummus with carrots",
      notes: "Experiment with new flavors and spices"
    },
    workout: {
      type: "Cardio Blast",
      duration: "35 minutes",
      exercises: [
        { name: "Warm-up jog", duration: "5 min" },
        { name: "Sprint intervals", duration: "15 min" },
        { name: "Jump rope", duration: "5 min" },
        { name: "Cool down walk", duration: "5 min" },
        { name: "Stretch", duration: "5 min" }
      ]
    }
  },
  {
    day: 14,
    week: 2,
    date: "Day 14",
    motivation: "Two weeks complete! You've established powerful habits.",
    congratulations: "🎉 Week 2 Done! Halfway through the journey. You're thriving!",
    checklistTasks: [
      { id: "d14-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d14-2", label: "Celebrate with hydration", category: "Hydration" },
      { id: "d14-3", label: "Favorite healthy breakfast", category: "Nutrition" },
      { id: "d14-4", label: "Choose your workout adventure", category: "Movement" },
      { id: "d14-5", label: "Week 2 reflection & wins", category: "Reflection" },
      { id: "d14-6", label: "Set Week 3 intentions", category: "Planning" },
      { id: "d14-7", label: "15-minute walk", category: "Movement" },
      { id: "d14-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Your favorite healthy breakfast from Week 1 or 2",
      lunch: "Build-your-own salad with favorite toppings",
      dinner: "Celebration meal - healthy but special!",
      snacks: "Your choice of healthy snacks",
      notes: "Reward yourself with nourishing foods you love"
    },
    workout: {
      type: "Celebration Movement",
      duration: "45 minutes",
      exercises: [
        { name: "Your favorite workout from Weeks 1-2", duration: "30 min" },
        { name: "Restorative yoga", duration: "15 min" }
      ],
      notes: "Enjoy the movement your body craves"
    }
  },
  // Week 3 - Days 15-21
  {
    day: 15,
    week: 3,
    date: "Day 15",
    motivation: "Welcome to Week 3! You're entering the flow state mastery phase.",
    congratulations: "Halfway home! Day 15 is a milestone moment.",
    checklistTasks: [
      { id: "d15-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d15-2", label: "Hydration + electrolyte balance", category: "Hydration" },
      { id: "d15-3", label: "Optimized breakfast timing", category: "Nutrition" },
      { id: "d15-4", label: "Peak performance workout", category: "Movement" },
      { id: "d15-5", label: "Identify your peak energy window", category: "Awareness" },
      { id: "d15-6", label: "Advanced meal prep", category: "Preparation" },
      { id: "d15-7", label: "15-minute walk", category: "Movement" },
      { id: "d15-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Power Smoothie with greens, protein, healthy fats",
      lunch: "Grilled Chicken Bowl with ancient grains and roasted veggies",
      dinner: "Lean Steak with chimichurri, roasted Brussels sprouts",
      snacks: "Pre/post workout snacks optimized for timing",
      notes: "Focus on nutrient timing for performance"
    },
    workout: {
      type: "Peak Performance Training",
      duration: "40 minutes",
      exercises: [
        { name: "Dynamic warm-up", duration: "8 min" },
        { name: "Compound movements focus", duration: "25 min" },
        { name: "Core stability work", duration: "7 min" }
      ],
      notes: "Train during your peak energy window"
    }
  },
  {
    day: 16,
    week: 3,
    date: "Day 16",
    motivation: "You're in the mastery zone now. Trust your body's wisdom.",
    congratulations: "Day 16! You're flowing with purpose and power.",
    checklistTasks: [
      { id: "d16-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d16-2", label: "Strategic hydration timing", category: "Hydration" },
      { id: "d16-3", label: "Pre-workout nutrition", category: "Nutrition" },
      { id: "d16-4", label: "Strength & conditioning", category: "Movement" },
      { id: "d16-5", label: "Post-workout recovery meal", category: "Nutrition" },
      { id: "d16-6", label: "Track performance improvements", category: "Awareness" },
      { id: "d16-7", label: "15-minute walk", category: "Movement" },
      { id: "d16-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Egg White Omelet with vegetables and avocado",
      lunch: "Sushi bowl with salmon, edamame, and brown rice",
      dinner: "Herb-Crusted Chicken with roasted root vegetables",
      snacks: "Timing-optimized protein and carbs",
      notes: "Fuel for performance and recovery"
    },
    workout: {
      type: "Strength & Power",
      duration: "45 minutes",
      exercises: [
        { name: "Power movements", sets: "4", reps: "6-8" },
        { name: "Accessory work", sets: "3", reps: "10-12" },
        { name: "Metabolic finisher", duration: "5 min" }
      ]
    }
  },
  {
    day: 17,
    week: 3,
    date: "Day 17",
    motivation: "Your energy blueprint is becoming second nature.",
    congratulations: "Seventeen days of excellence! The habits own you now.",
    checklistTasks: [
      { id: "d17-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d17-2", label: "Morning ritual perfected", category: "Routine" },
      { id: "d17-3", label: "Intuitive eating practice", category: "Nutrition" },
      { id: "d17-4", label: "Mindful movement session", category: "Movement" },
      { id: "d17-5", label: "Stress resilience practice", category: "Mindfulness" },
      { id: "d17-6", label: "Quality sleep optimization", category: "Recovery" },
      { id: "d17-7", label: "15-minute walk", category: "Movement" },
      { id: "d17-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Açai Bowl with superfoods",
      lunch: "Harvest Buddha Bowl with tahini dressing",
      dinner: "Wild-caught Fish with Mediterranean vegetables",
      snacks: "Nutrient-dense, energy-sustaining choices",
      notes: "Listen to hunger and fullness cues"
    },
    workout: {
      type: "Mindful Movement",
      duration: "50 minutes",
      exercises: [
        { name: "Tai Chi or Qi Gong", duration: "20 min" },
        { name: "Strength work", duration: "20 min" },
        { name: "Deep stretching", duration: "10 min" }
      ]
    }
  },
  {
    day: 18,
    week: 3,
    date: "Day 18",
    motivation: "Flow Seeker, you're living your name. Feel the energy flow!",
    congratulations: "Day 18! You're in the zone of mastery.",
    checklistTasks: [
      { id: "d18-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d18-2", label: "Hydration excellence", category: "Hydration" },
      { id: "d18-3", label: "Advanced nutrition strategies", category: "Nutrition" },
      { id: "d18-4", label: "High-intensity training", category: "Movement" },
      { id: "d18-5", label: "Energy optimization review", category: "Awareness" },
      { id: "d18-6", label: "Recovery protocol", category: "Recovery" },
      { id: "d18-7", label: "15-minute walk", category: "Movement" },
      { id: "d18-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Performance Smoothie with all the good stuff",
      lunch: "Protein-rich salad with variety of vegetables",
      dinner: "Grass-fed Beef or Bison with sweet potato",
      snacks: "Strategic nutrient timing",
      notes: "Maximize nutrient density"
    },
    workout: {
      type: "HIIT Advanced",
      duration: "30 minutes",
      exercises: [
        { name: "Intense intervals", duration: "20 min" },
        { name: "Active recovery", duration: "5 min" },
        { name: "Mobility work", duration: "5 min" }
      ]
    }
  },
  {
    day: 19,
    week: 3,
    date: "Day 19",
    motivation: "Almost 3 weeks! Your transformation is visible and visceral.",
    congratulations: "Nineteen days of dedication! Excellence is your standard.",
    checklistTasks: [
      { id: "d19-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d19-2", label: "Maintain hydration mastery", category: "Hydration" },
      { id: "d19-3", label: "Balanced nutrition day", category: "Nutrition" },
      { id: "d19-4", label: "Full body workout", category: "Movement" },
      { id: "d19-5", label: "Reflect on transformation", category: "Reflection" },
      { id: "d19-6", label: "Prepare for Week 4", category: "Planning" },
      { id: "d19-7", label: "15-minute walk", category: "Movement" },
      { id: "d19-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "High-protein breakfast of choice",
      lunch: "Colorful, balanced meal",
      dinner: "Omega-3 rich protein with vegetables",
      snacks: "Whole food choices",
      notes: "Celebrate how far you've come"
    },
    workout: {
      type: "Total Body Strength",
      duration: "45 minutes",
      exercises: [
        { name: "Compound lifts", duration: "30 min" },
        { name: "Isolation work", duration: "10 min" },
        { name: "Stretching", duration: "5 min" }
      ]
    }
  },
  {
    day: 20,
    week: 3,
    date: "Day 20",
    motivation: "Twenty days! Two-thirds complete. The finish line is in sight!",
    congratulations: "Day 20 conquered! You're unstoppable now.",
    checklistTasks: [
      { id: "d20-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d20-2", label: "Hydration consistency", category: "Hydration" },
      { id: "d20-3", label: "Wholesome meals", category: "Nutrition" },
      { id: "d20-4", label: "Active recovery", category: "Movement" },
      { id: "d20-5", label: "Gratitude practice", category: "Mindfulness" },
      { id: "d20-6", label: "Self-care ritual", category: "Recovery" },
      { id: "d20-7", label: "15-minute walk", category: "Movement" },
      { id: "d20-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Nutrient-dense breakfast bowl",
      lunch: "Plant-forward meal with lean protein",
      dinner: "Comfort food - healthy version!",
      snacks: "Satisfying, nourishing options",
      notes: "Enjoy the journey, not just destination"
    },
    workout: {
      type: "Gentle Movement",
      duration: "35 minutes",
      exercises: [
        { name: "Yoga flow", duration: "25 min" },
        { name: "Meditation", duration: "10 min" }
      ]
    }
  },
  {
    day: 21,
    week: 3,
    date: "Day 21",
    motivation: "Three weeks = Habit formed! You've rewired your brain!",
    congratulations: "🌟 Week 3 Complete! You're in flow state mastery!",
    checklistTasks: [
      { id: "d21-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d21-2", label: "Celebrate hydration habit", category: "Hydration" },
      { id: "d21-3", label: "Favorite nourishing meals", category: "Nutrition" },
      { id: "d21-4", label: "Joyful movement", category: "Movement" },
      { id: "d21-5", label: "Week 3 wins celebration", category: "Celebration" },
      { id: "d21-6", label: "Final week intentions", category: "Planning" },
      { id: "d21-7", label: "15-minute walk", category: "Movement" },
      { id: "d21-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Your signature energy breakfast",
      lunch: "Build your perfect bowl",
      dinner: "Celebratory healthy feast",
      snacks: "Your favorites",
      notes: "21 days of nourishment - you did it!"
    },
    workout: {
      type: "Celebration Flow",
      duration: "45 minutes",
      exercises: [
        { name: "Your favorite workouts combined", duration: "30 min" },
        { name: "Restorative stretching", duration: "15 min" }
      ],
      notes: "Move with joy and gratitude"
    }
  },
  // Week 4 - Days 22-30 (Final Week)
  {
    day: 22,
    week: 4,
    date: "Day 22",
    motivation: "Final week! This is about sustainability and celebrating your new lifestyle.",
    congratulations: "Day 22! The final stretch begins with strength.",
    checklistTasks: [
      { id: "d22-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d22-2", label: "Sustainable hydration routine", category: "Hydration" },
      { id: "d22-3", label: "Meal plan for longevity", category: "Nutrition" },
      { id: "d22-4", label: "Enjoyable workout", category: "Movement" },
      { id: "d22-5", label: "Document energy improvements", category: "Reflection" },
      { id: "d22-6", label: "Plan post-program routine", category: "Planning" },
      { id: "d22-7", label: "15-minute walk", category: "Movement" },
      { id: "d22-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Sustainable breakfast you'll make forever",
      lunch: "Easy, repeatable lunch",
      dinner: "Go-to healthy dinner",
      snacks: "Your staples",
      notes: "Focus on sustainability, not perfection"
    },
    workout: {
      type: "Sustainable Strength",
      duration: "40 minutes",
      exercises: [
        { name: "Core movements you enjoy", duration: "30 min" },
        { name: "Flexibility work", duration: "10 min" }
      ]
    }
  },
  {
    day: 23,
    week: 4,
    date: "Day 23",
    motivation: "You're not finishing, you're just beginning your energy lifestyle.",
    congratulations: "Twenty-three days! You've built something lasting.",
    checklistTasks: [
      { id: "d23-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d23-2", label: "Effortless hydration", category: "Hydration" },
      { id: "d23-3", label: "Intuitive balanced eating", category: "Nutrition" },
      { id: "d23-4", label: "Movement you love", category: "Movement" },
      { id: "d23-5", label: "Share your journey", category: "Connection" },
      { id: "d23-6", label: "Recovery excellence", category: "Recovery" },
      { id: "d23-7", label: "15-minute walk", category: "Movement" },
      { id: "d23-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Energizing start",
      lunch: "Balanced midday fuel",
      dinner: "Nourishing evening meal",
      snacks: "Smart choices",
      notes: "This is your new normal"
    },
    workout: {
      type: "Feel-Good Fitness",
      duration: "40 minutes",
      exercises: [
        { name: "Mix of cardio and strength", duration: "30 min" },
        { name: "Stretching and breathing", duration: "10 min" }
      ]
    }
  },
  {
    day: 24,
    week: 4,
    date: "Day 24",
    motivation: "Less than a week to go! You're crossing the finish line strong!",
    congratulations: "Day 24! Your consistency is remarkable.",
    checklistTasks: [
      { id: "d24-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d24-2", label: "Hydration mastery continues", category: "Hydration" },
      { id: "d24-3", label: "Nourishing all meals", category: "Nutrition" },
      { id: "d24-4", label: "Strong workout", category: "Movement" },
      { id: "d24-5", label: "Visualize your future energy", category: "Mindfulness" },
      { id: "d24-6", label: "Gratitude for your body", category: "Reflection" },
      { id: "d24-7", label: "15-minute walk", category: "Movement" },
      { id: "d24-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Power breakfast",
      lunch: "Sustaining lunch",
      dinner: "Delicious, healthy dinner",
      snacks: "Energy-supporting snacks",
      notes: "You know what works for your body"
    },
    workout: {
      type: "Power Session",
      duration: "45 minutes",
      exercises: [
        { name: "Strength training", duration: "35 min" },
        { name: "Cool down", duration: "10 min" }
      ]
    }
  },
  {
    day: 25,
    week: 4,
    date: "Day 25",
    motivation: "Five days until completion! You're a wellness warrior!",
    congratulations: "Twenty-five days of showing up! You inspire!",
    checklistTasks: [
      { id: "d25-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d25-2", label: "Hydration habit perfected", category: "Hydration" },
      { id: "d25-3", label: "Balanced nutrition day", category: "Nutrition" },
      { id: "d25-4", label: "Full energy workout", category: "Movement" },
      { id: "d25-5", label: "Plan your maintenance routine", category: "Planning" },
      { id: "d25-6", label: "Celebrate non-scale victories", category: "Celebration" },
      { id: "d25-7", label: "15-minute walk", category: "Movement" },
      { id: "d25-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Your go-to energy meal",
      lunch: "Satisfying, balanced lunch",
      dinner: "Favorite healthy dinner",
      snacks: "Smart snacking",
      notes: "Notice how food makes you feel"
    },
    workout: {
      type: "Full Body Flow",
      duration: "45 minutes",
      exercises: [
        { name: "Dynamic full body workout", duration: "35 min" },
        { name: "Restorative stretching", duration: "10 min" }
      ]
    }
  },
  {
    day: 26,
    week: 4,
    date: "Day 26",
    motivation: "Four days left! The transformation is complete, the journey continues!",
    congratulations: "Day 26! You're living your energy blueprint!",
    checklistTasks: [
      { id: "d26-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d26-2", label: "Natural hydration flow", category: "Hydration" },
      { id: "d26-3", label: "Wholesome eating", category: "Nutrition" },
      { id: "d26-4", label: "Energizing movement", category: "Movement" },
      { id: "d26-5", label: "Reflect on all you've learned", category: "Reflection" },
      { id: "d26-6", label: "Plan next 30 days", category: "Planning" },
      { id: "d26-7", label: "15-minute walk", category: "Movement" },
      { id: "d26-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Energizing choice",
      lunch: "Nourishing midday",
      dinner: "Balanced evening",
      snacks: "Intentional snacks",
      notes: "You've mastered your energy nutrition"
    },
    workout: {
      type: "Cardio & Core",
      duration: "40 minutes",
      exercises: [
        { name: "Cardio workout", duration: "25 min" },
        { name: "Core strengthening", duration: "10 min" },
        { name: "Stretching", duration: "5 min" }
      ]
    }
  },
  {
    day: 27,
    week: 4,
    date: "Day 27",
    motivation: "Three days! You're about to complete an incredible journey!",
    congratulations: "Day 27 done! The finish line is so close!",
    checklistTasks: [
      { id: "d27-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d27-2", label: "Continue hydration excellence", category: "Hydration" },
      { id: "d27-3", label: "Nourishing meals", category: "Nutrition" },
      { id: "d27-4", label: "Joyful movement", category: "Movement" },
      { id: "d27-5", label: "Write your transformation story", category: "Reflection" },
      { id: "d27-6", label: "Self-care ritual", category: "Recovery" },
      { id: "d27-7", label: "15-minute walk", category: "Movement" },
      { id: "d27-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Perfect energy start",
      lunch: "Sustaining fuel",
      dinner: "Satisfying, healthy",
      snacks: "Your favorites",
      notes: "Savor your success"
    },
    workout: {
      type: "Strength & Balance",
      duration: "40 minutes",
      exercises: [
        { name: "Balanced workout", duration: "30 min" },
        { name: "Balance and stability", duration: "10 min" }
      ]
    }
  },
  {
    day: 28,
    week: 4,
    date: "Day 28",
    motivation: "Two days until completion! Feel the pride of commitment!",
    congratulations: "Twenty-eight days! You're extraordinary!",
    checklistTasks: [
      { id: "d28-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d28-2", label: "Hydration excellence", category: "Hydration" },
      { id: "d28-3", label: "Balanced, wholesome eating", category: "Nutrition" },
      { id: "d28-4", label: "Strong workout", category: "Movement" },
      { id: "d28-5", label: "Before/after reflection", category: "Reflection" },
      { id: "d28-6", label: "Share your wins", category: "Celebration" },
      { id: "d28-7", label: "15-minute walk", category: "Movement" },
      { id: "d28-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Powerhouse breakfast",
      lunch: "Energy-sustaining lunch",
      dinner: "Nourishing dinner",
      snacks: "Smart choices",
      notes: "Almost there! Stay strong!"
    },
    workout: {
      type: "Peak Performance",
      duration: "45 minutes",
      exercises: [
        { name: "Your best workout", duration: "35 min" },
        { name: "Recovery work", duration: "10 min" }
      ]
    }
  },
  {
    day: 29,
    week: 4,
    date: "Day 29",
    motivation: "One day left! Tomorrow you complete what you started 29 days ago!",
    congratulations: "Day 29! You're on the threshold of completion!",
    checklistTasks: [
      { id: "d29-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d29-2", label: "Hydration perfection", category: "Hydration" },
      { id: "d29-3", label: "Celebratory healthy eating", category: "Nutrition" },
      { id: "d29-4", label: "Energizing workout", category: "Movement" },
      { id: "d29-5", label: "Prep for Day 30 celebration", category: "Planning" },
      { id: "d29-6", label: "Gratitude meditation", category: "Mindfulness" },
      { id: "d29-7", label: "15-minute walk", category: "Movement" },
      { id: "d29-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Championship breakfast",
      lunch: "Winner's lunch",
      dinner: "Victory dinner",
      snacks: "Success snacks",
      notes: "One more day of excellence!"
    },
    workout: {
      type: "Penultimate Power",
      duration: "45 minutes",
      exercises: [
        { name: "Strong, confident workout", duration: "35 min" },
        { name: "Grateful stretching", duration: "10 min" }
      ]
    }
  },
  {
    day: 30,
    week: 4,
    date: "Day 30",
    motivation: "FINAL DAY! You did it, Flow Seeker! 30 days of transformation complete!",
    congratulations: "🎊 DAY 30 COMPLETE! You finished what you started! Your energy blueprint is now your lifestyle! Celebrate this incredible achievement!",
    checklistTasks: [
      { id: "d30-1", label: "Morning sunlight exposure (5-10 min)", category: "Wellness" },
      { id: "d30-2", label: "Final day hydration victory", category: "Hydration" },
      { id: "d30-3", label: "Celebration nutrition", category: "Nutrition" },
      { id: "d30-4", label: "Victorious final workout", category: "Movement" },
      { id: "d30-5", label: "Complete 30-day reflection", category: "Reflection" },
      { id: "d30-6", label: "CELEBRATE YOUR ACHIEVEMENT!", category: "Celebration" },
      { id: "d30-7", label: "15-minute walk", category: "Movement" },
      { id: "d30-8", label: "10-minute meditation or gratitude journaling", category: "Mindfulness" }
    ],
    mealPlan: {
      breakfast: "Your ultimate energy breakfast",
      lunch: "Perfect balanced lunch",
      dinner: "Celebration dinner - healthy & special!",
      snacks: "Victory snacks",
      notes: "You did it! 30 days of excellence!"
    },
    workout: {
      type: "Victory Workout",
      duration: "50 minutes",
      exercises: [
        { name: "Celebratory full body workout", duration: "40 min" },
        { name: "Gratitude meditation", duration: "10 min" }
      ],
      notes: "Final workout - make it memorable!"
    }
  }
];

// Helper function to get day content
export function getDayContent(day: number): DayContent | undefined {
  return programDays.find(d => d.day === day);
}

// Helper function to get week summary
export function getWeekSummary(week: number): WeekSummary | undefined {
  return weekSummaries.find(w => w.weekNumber === week);
}

// Helper function to get all days for a week
export function getWeekDays(week: number): DayContent[] {
  return programDays.filter(d => d.week === week);
}
