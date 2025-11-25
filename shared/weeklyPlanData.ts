import type { WeeklyPlanData } from "./schema";

export const weeklyPlanData: WeeklyPlanData[] = [
  {
    weekNumber: 1,
    theme: "Stabilize & Structure",
    weeklyGoal: "Ground the body, stabilize energy, create flow + consistency",
    dailyCaloriesRange: "1750-1950",
    dailyProteinRange: "70-85g",
    dailyCarbsRange: "200-240g",
    dailyVeggiesRange: "8-12 servings",
    dailyRoutine: {
      morning: [
        { action: "Hydrate with 12-16 oz water + electrolytes or lemon" },
        { action: "Take 4-8 spirulina/chlorella tablets (Vitality Bits)" },
        { action: "Light Mobility", duration: "3-5 min", details: "Cat/cow, Hip circles, Forward fold" },
        { action: "Breathwork", duration: "2 min", details: "Inhale 4 → Hold 2 → Exhale 6" },
        { action: "Sunlight exposure", duration: "5 min" },
        { action: "Set the Day's Intention", details: "\"I choose clarity, nourishment, and flow.\"" }
      ],
      midday: [
        { action: "Prioritize blood sugar balance", details: "Eat every ~4 hours" },
        { action: "Protein booster", details: "4-8 chlorella tablets OR add hemp seeds/chia to meal" },
        { action: "Walk after lunch", duration: "10 min" },
        { action: "Mental Check-In", details: "\"What do I need more of right now?\"" }
      ],
      evening: [
        { action: "Screen dimming OR blue light blocker at sunset" },
        { action: "Light stretching", duration: "5 min" },
        { action: "Warm herbal tea", details: "Peppermint, chamomile, or ginger" },
        { action: "Journal prompt", details: "\"What flowed well today?\" and \"Where did my energy dip?\"" },
        { action: "Bedtime ritual", details: "Lights out at consistent time, 4 deep breaths to settle the body" }
      ]
    },
    dailyMeals: [
      {
        dayName: "Monday",
        totalCalories: 1900,
        totalProtein: 82,
        breakfast: {
          name: "Protein Blueberry Veggie Smoothie",
          calories: 460,
          protein: 34,
          carbs: 56,
          fat: 12,
          ingredients: ["Pea protein", "Blueberries", "Spinach", "Almond milk"],
          addedItems: ["1/2 frozen banana", "1/2 cup frozen cauliflower", "1/4 cup GF oats"]
        },
        lunch: {
          name: "Green Goddess Bowl + Roasted Veggies",
          calories: 610,
          protein: 22,
          carbs: 72,
          fat: 22,
          ingredients: ["Mixed greens", "Quinoa", "Tahini dressing"],
          addedItems: ["Roasted carrots", "Roasted beets", "1/2 cup extra quinoa", "1 cup arugula mix"]
        },
        snack: {
          name: "Apple + Almond Butter + Spirulina",
          calories: 230,
          protein: 6,
          carbs: 28,
          fat: 12,
          ingredients: ["Apple", "Almond butter", "Spirulina tablets"]
        },
        dinner: {
          name: "Tempeh Power Bowl + Brown Rice",
          calories: 600,
          protein: 20,
          carbs: 60,
          fat: 20,
          ingredients: ["Tempeh", "Tamari", "Sesame oil"],
          addedItems: ["1/2 cup brown rice", "Extra broccoli (1 cup)", "1 cup mixed greens"]
        }
      },
      {
        dayName: "Tuesday",
        totalCalories: 1870,
        totalProtein: 78,
        breakfast: {
          name: "Chia Protein Pudding w/ Fruit",
          calories: 420,
          protein: 19,
          carbs: 50,
          fat: 14,
          ingredients: ["Chia seeds", "Almond milk", "Pea protein"],
          addedItems: ["Strawberries", "1 tbsp ground flax"]
        },
        lunch: {
          name: "Lentil Coconut Curry + Veggie Boost",
          calories: 600,
          protein: 24,
          carbs: 70,
          fat: 18,
          ingredients: ["Lentils", "Coconut milk", "Curry spices"],
          addedItems: ["1 cup sweet potato chunks", "Carrots", "Spinach (big handful)", "Cauliflower florets"]
        },
        snack: {
          name: "Veggies + Hummus + Berries",
          calories: 200,
          protein: 6,
          carbs: 20,
          fat: 10,
          ingredients: ["Hummus", "Mixed berries"],
          addedItems: ["Carrots", "Peppers"]
        },
        dinner: {
          name: "High-Protein Stir Fry + Rice Noodles",
          calories: 650,
          protein: 29,
          carbs: 70,
          fat: 18,
          ingredients: ["Tofu", "Tamari", "Sesame oil"],
          addedItems: ["Rice noodles (1/2-1 cup)", "Snow peas", "Bok choy", "Mushrooms", "Red onion"]
        }
      },
      {
        dayName: "Wednesday",
        totalCalories: 1860,
        totalProtein: 76,
        breakfast: {
          name: "Oat Bowl + Veggie/Fruit Add-Ins",
          calories: 460,
          protein: 20,
          carbs: 62,
          fat: 12,
          ingredients: ["GF oats", "Almond milk", "Hemp seeds"],
          addedItems: ["1/2 banana", "Blueberries", "1 tbsp pumpkin seeds", "1/4 cup shredded zucchini"]
        },
        lunch: {
          name: "Green Goddess Bowl + Chickpeas",
          calories: 620,
          protein: 24,
          carbs: 70,
          fat: 20,
          ingredients: ["Mixed greens", "Tahini dressing"],
          addedItems: ["1/2 cup chickpeas (8g protein)", "Roasted zucchini", "Extra kale"]
        },
        snack: {
          name: "Nuts + Grapes + Spirulina",
          calories: 200,
          protein: 5,
          carbs: 25,
          fat: 10,
          ingredients: ["Mixed nuts", "Grapes", "Spirulina tablets"]
        },
        dinner: {
          name: "Lentil Curry + Brown Rice",
          calories: 580,
          protein: 27,
          carbs: 55,
          fat: 18,
          ingredients: ["Lentils", "Coconut milk", "Curry spices"],
          addedItems: ["1/2 cup brown rice", "Extra spinach", "Carrots"]
        }
      },
      {
        dayName: "Thursday",
        totalCalories: 1910,
        totalProtein: 84,
        breakfast: {
          name: "Protein Smoothie",
          calories: 450,
          protein: 34,
          carbs: 56,
          fat: 12,
          ingredients: ["Pea protein", "Spinach", "Almond milk"],
          addedItems: ["1/4 cup GF oats", "Frozen cauliflower", "Mango chunks"]
        },
        lunch: {
          name: "High-Protein Snack Plate + Roasted Potatoes",
          calories: 520,
          protein: 25,
          carbs: 55,
          fat: 16,
          ingredients: ["GF crackers", "Hummus", "Carrots", "Cucumber"],
          addedItems: ["1 cup roasted baby potatoes (20g carbs)"]
        },
        snack: {
          name: "Fruit + Spirulina",
          calories: 160,
          protein: 4,
          carbs: 20,
          fat: 2,
          ingredients: ["Mixed fruit", "Spirulina tablets"]
        },
        dinner: {
          name: "Tempeh Bowl + Whole Grain Add-In",
          calories: 780,
          protein: 21,
          carbs: 85,
          fat: 26,
          ingredients: ["Tempeh", "Tamari", "Ginger"],
          addedItems: ["1/2 cup quinoa", "Roasted Brussels sprouts", "Roasted carrots"]
        }
      },
      {
        dayName: "Friday",
        totalCalories: 1890,
        totalProtein: 80,
        breakfast: {
          name: "Oat Bowl + Extra Fruit",
          calories: 460,
          protein: 20,
          carbs: 62,
          fat: 12,
          ingredients: ["GF oats", "Almond milk", "Hemp seeds"],
          addedItems: ["Strawberries", "1/2 banana"]
        },
        lunch: {
          name: "Lentil Curry + Quinoa",
          calories: 590,
          protein: 26,
          carbs: 68,
          fat: 18,
          ingredients: ["Lentils", "Coconut milk", "Curry spices"],
          addedItems: ["1/2 cup quinoa", "Spinach", "Cauliflower"]
        },
        snack: {
          name: "Dark Chocolate + Berries",
          calories: 180,
          protein: 5,
          carbs: 20,
          fat: 12,
          ingredients: ["Dark chocolate", "Mixed berries"]
        },
        dinner: {
          name: "Stir Fry Veggies + Tofu + Noodles",
          calories: 660,
          protein: 29,
          carbs: 70,
          fat: 16,
          ingredients: ["Tofu", "Tamari", "Sesame oil"],
          addedItems: ["Rice noodles", "Snow peas", "Mushrooms", "Peppers", "Cabbage"]
        }
      },
      {
        dayName: "Saturday",
        totalCalories: 1850,
        totalProtein: 78,
        breakfast: {
          name: "Chia Pudding + Granola Topping",
          calories: 430,
          protein: 18,
          carbs: 55,
          fat: 14,
          ingredients: ["Chia seeds", "Almond milk"],
          addedItems: ["1/4 cup GF granola", "Blueberries", "Strawberries"]
        },
        lunch: {
          name: "Goddess Bowl + Beans",
          calories: 600,
          protein: 24,
          carbs: 70,
          fat: 20,
          ingredients: ["Mixed greens", "Tahini dressing"],
          addedItems: ["1/2 cup black beans", "Extra kale", "Steamed broccoli"]
        },
        snack: {
          name: "Hummus + Peppers + Mango",
          calories: 190,
          protein: 6,
          carbs: 24,
          fat: 8,
          ingredients: ["Hummus", "Bell peppers", "Mango"]
        },
        dinner: {
          name: "Tempeh Bowl + Sweet Potato",
          calories: 630,
          protein: 30,
          carbs: 60,
          fat: 19,
          ingredients: ["Tempeh", "Tamari", "Ginger"],
          addedItems: ["1 sweet potato", "Extra greens"]
        }
      },
      {
        dayName: "Sunday",
        totalCalories: 1870,
        totalProtein: 77,
        breakfast: {
          name: "Smoothie + Oats",
          calories: 450,
          protein: 32,
          carbs: 56,
          fat: 12,
          ingredients: ["Pea protein", "GF oats", "Almond milk", "Spinach"]
        },
        lunch: {
          name: "Curry + Rice + Extra Veggies",
          calories: 580,
          protein: 24,
          carbs: 65,
          fat: 18,
          ingredients: ["Curry base", "Rice"],
          addedItems: ["Cauliflower", "Carrots", "Spinach"]
        },
        snack: {
          name: "Fruit + Nuts",
          calories: 180,
          protein: 4,
          carbs: 24,
          fat: 10,
          ingredients: ["Mixed fruit", "Mixed nuts"]
        },
        dinner: {
          name: "Stir Fry + Tempeh + Brown Rice",
          calories: 660,
          protein: 27,
          carbs: 65,
          fat: 18,
          ingredients: ["Tempeh", "Tamari", "Ginger"],
          addedItems: ["Brown rice", "Zucchini", "Broccoli", "Peppers"]
        }
      }
    ],
    groceryList: {
      vegetables: [
        "Kale", "Spinach", "Arugula", "Broccoli", "Cauliflower", "Zucchini",
        "Mushrooms", "Bell peppers", "Carrots", "Beets", "Sweet potatoes",
        "Brussels sprouts", "Frozen cauliflower", "Bok choy", "Snow peas"
      ],
      carbsGrains: [
        "GF oats", "Brown rice", "Rice noodles", "GF granola", "Quinoa", "Potatoes"
      ],
      proteins: [
        "Pea protein", "Hemp seeds", "Chia seeds", "Black beans", "Chickpeas",
        "Lentils (red + green)", "Tempeh", "Tofu", "Pumpkin seeds", "Spirulina/chlorella tablets"
      ],
      fruits: [
        "Bananas", "Apples", "Strawberries", "Blueberries", "Grapes", "Mango"
      ],
      pantry: [
        "Coconut milk", "Almond milk", "Tahini", "Tamari", "Olive oil",
        "Curry spices", "Ginger", "Garlic"
      ]
    }
  },
  {
    weekNumber: 2,
    theme: "Expand & Energize",
    weeklyGoal: "New flavors, more variety, strengthen nutrient diversity and energy flow",
    dailyCaloriesRange: "1800-2000",
    dailyProteinRange: "75-90g",
    dailyCarbsRange: "200-250g",
    dailyVeggiesRange: "8-12 servings",
    dailyRoutine: {
      morning: [
        { action: "Hydrate with 16 oz water + electrolytes" },
        { action: "Take 6 spirulina + 6 chlorella tablets" },
        { action: "Mobility routine", duration: "5 min" },
        { action: "Sunlight exposure", duration: "5 min" },
        { action: "Breathwork", duration: "2 min" }
      ],
      midday: [
        { action: "Walk after lunch", duration: "10 min" },
        { action: "Add 1-2 extra cups of vegetables at lunch" }
      ],
      evening: [
        { action: "Herbal tea" },
        { action: "Light stretching", duration: "5 min" },
        { action: "Reflection journal" }
      ]
    },
    dailyMeals: [
      {
        dayName: "Monday",
        totalCalories: 1890,
        totalProtein: 85,
        breakfast: {
          name: "Mango Protein Smoothie Bowl",
          calories: 480,
          protein: 33,
          carbs: 62,
          fat: 14,
          ingredients: ["Pea protein", "Mango", "Spinach", "1/2 banana", "1 tbsp chia", "1 tbsp hemp", "Frozen cauliflower"]
        },
        lunch: {
          name: "Southwest Quinoa + Black Bean Bowl",
          calories: 620,
          protein: 24,
          carbs: 78,
          fat: 20,
          ingredients: ["Quinoa", "Black beans", "Corn", "Romaine", "Tomato", "Avocado", "Cilantro", "Lime", "Pumpkin seeds"]
        },
        snack: {
          name: "Strawberries + Almonds + Spirulina",
          calories: 220,
          protein: 7,
          carbs: 22,
          fat: 12,
          ingredients: ["Strawberries", "Almonds", "Spirulina tablets"]
        },
        dinner: {
          name: "Tofu Broccoli & Buckwheat Noodle Stir Fry",
          calories: 570,
          protein: 21,
          carbs: 62,
          fat: 19,
          ingredients: ["Buckwheat noodles", "Tofu (6 oz)", "Broccoli", "Carrots", "Peppers", "Tamari", "Ginger", "Sesame seeds"]
        }
      },
      {
        dayName: "Tuesday",
        totalCalories: 1870,
        totalProtein: 82,
        breakfast: {
          name: "Apple Cinnamon Buckwheat Bowl",
          calories: 430,
          protein: 18,
          carbs: 64,
          fat: 10,
          ingredients: ["Cooked buckwheat", "Apple slices", "Cinnamon", "Hemp seeds", "Almond milk"]
        },
        lunch: {
          name: "Edamame + Wild Rice Rainbow Plate",
          calories: 610,
          protein: 28,
          carbs: 75,
          fat: 18,
          ingredients: ["Wild rice", "Edamame (1 cup = 17g protein)", "Red cabbage", "Carrots", "Cucumbers", "Sesame dressing"]
        },
        snack: {
          name: "Hummus + Veggies + Spirulina",
          calories: 190,
          protein: 6,
          carbs: 20,
          fat: 8,
          ingredients: ["Hummus", "Mixed veggies", "Spirulina tablets"]
        },
        dinner: {
          name: "Chickpea Spinach Coconut Stew",
          calories: 640,
          protein: 30,
          carbs: 58,
          fat: 22,
          ingredients: ["Chickpeas (1.25 cups)", "Coconut milk", "Spinach", "Tomatoes", "Turmeric", "Cumin", "Garlic"],
          addedItems: ["Served over millet (1/2 cup cooked)"]
        }
      },
      {
        dayName: "Wednesday",
        totalCalories: 1880,
        totalProtein: 80,
        breakfast: {
          name: "Green Pear Protein Smoothie",
          calories: 460,
          protein: 32,
          carbs: 56,
          fat: 12,
          ingredients: ["Pear", "Spinach", "Pea protein", "Frozen cauliflower", "Chia", "Lemon"]
        },
        lunch: {
          name: "Roasted Veggie + Lentil Power Plate",
          calories: 580,
          protein: 26,
          carbs: 72,
          fat: 18,
          ingredients: ["Lentils (1 cup cooked = 18g protein)", "Roasted sweet potato", "Roasted broccoli", "Arugula", "Tahini dressing"]
        },
        snack: {
          name: "Kiwi + Cashews",
          calories: 180,
          protein: 4,
          carbs: 22,
          fat: 10,
          ingredients: ["Kiwi", "Cashews"]
        },
        dinner: {
          name: "Tofu Curry + Basmati Rice + Veggies",
          calories: 660,
          protein: 28,
          carbs: 70,
          fat: 18,
          ingredients: ["Tofu", "Basmati rice", "Peas", "Carrots", "Coconut milk", "Curry spices"]
        }
      },
      {
        dayName: "Thursday",
        totalCalories: 1920,
        totalProtein: 86,
        breakfast: {
          name: "Raspberry Protein Oats",
          calories: 470,
          protein: 24,
          carbs: 66,
          fat: 12,
          ingredients: ["GF oats", "Raspberries", "Hemp seeds", "Chia", "Protein powder"]
        },
        lunch: {
          name: "Mediterranean Quinoa & Falafel Bowl (GF)",
          calories: 640,
          protein: 22,
          carbs: 78,
          fat: 24,
          ingredients: ["GF falafel", "Quinoa", "Cucumber", "Tomato", "Spinach", "Olives", "Hummus", "Lemon"]
        },
        snack: {
          name: "Mango + Almonds + Spirulina",
          calories: 210,
          protein: 6,
          carbs: 24,
          fat: 12,
          ingredients: ["Mango", "Almonds", "Spirulina tablets"]
        },
        dinner: {
          name: "Tempeh Veggie Stir Fry w/ Rice",
          calories: 600,
          protein: 34,
          carbs: 58,
          fat: 18,
          ingredients: ["GF tempeh (1/2 block = 16-18g protein)", "Brown rice", "Asparagus", "Mushrooms", "Peppers", "Garlic"]
        }
      },
      {
        dayName: "Friday",
        totalCalories: 1900,
        totalProtein: 78,
        breakfast: {
          name: "Chocolate Berry Protein Smoothie",
          calories: 460,
          protein: 32,
          carbs: 55,
          fat: 12,
          ingredients: ["Chocolate pea protein", "Berries", "Spinach", "Hemp seeds", "Frozen cauliflower"]
        },
        lunch: {
          name: "Millet Buddha Bowl",
          calories: 610,
          protein: 23,
          carbs: 76,
          fat: 20,
          ingredients: ["Millet", "Chickpeas", "Baby kale", "Roasted carrots", "Avocado", "Lemon tahini"]
        },
        snack: {
          name: "Orange + Pistachios",
          calories: 180,
          protein: 5,
          carbs: 22,
          fat: 10,
          ingredients: ["Orange", "Pistachios"]
        },
        dinner: {
          name: "Black Bean Sweet Potato Chili",
          calories: 650,
          protein: 18,
          carbs: 75,
          fat: 18,
          ingredients: ["Black beans", "Sweet potato", "Tomatoes", "Onions", "Garlic", "Corn", "Peppers"]
        }
      },
      {
        dayName: "Saturday",
        totalCalories: 1840,
        totalProtein: 80,
        breakfast: {
          name: "Protein Pancakes (GF, Vegan)",
          calories: 480,
          protein: 28,
          carbs: 68,
          fat: 10,
          ingredients: ["GF oats", "Banana", "Pea protein", "Almond milk"],
          addedItems: ["Topped with berries"]
        },
        lunch: {
          name: "Tofu Sushi Bowl",
          calories: 600,
          protein: 28,
          carbs: 75,
          fat: 18,
          ingredients: ["Sushi rice", "Tofu", "Cucumber", "Carrots", "Seaweed", "Avocado", "Ginger", "Edamame (1/2 cup)"]
        },
        snack: {
          name: "Grapes + Pumpkin Seeds",
          calories: 170,
          protein: 7,
          carbs: 22,
          fat: 6,
          ingredients: ["Grapes", "Pumpkin seeds"]
        },
        dinner: {
          name: "White Bean + Veggie Stew",
          calories: 590,
          protein: 17,
          carbs: 65,
          fat: 16,
          ingredients: ["White beans", "Zucchini", "Kale", "Potatoes", "Tomatoes", "Spices"]
        }
      },
      {
        dayName: "Sunday",
        totalCalories: 1880,
        totalProtein: 84,
        breakfast: {
          name: "Vanilla Berry Smoothie",
          calories: 440,
          protein: 32,
          carbs: 54,
          fat: 12,
          ingredients: ["Pea protein", "Mixed berries", "Vanilla", "Almond milk"]
        },
        lunch: {
          name: "Harvest Plate",
          calories: 630,
          protein: 26,
          carbs: 68,
          fat: 24,
          ingredients: ["Quinoa", "Lentils", "Roasted butternut squash", "Kale", "Tahini lemon"]
        },
        snack: {
          name: "Apple + Almonds + Spirulina",
          calories: 200,
          protein: 6,
          carbs: 24,
          fat: 10,
          ingredients: ["Apple", "Almonds", "Spirulina tablets"]
        },
        dinner: {
          name: "Veggie Pad Thai (Rice Noodles + Tofu)",
          calories: 610,
          protein: 20,
          carbs: 70,
          fat: 16,
          ingredients: ["Rice noodles", "Tofu", "Bok choy", "Peppers", "Carrots", "Snap peas", "Lime", "Tamari"]
        }
      }
    ],
    groceryList: {
      proteins: [
        "Pea protein", "Hemp seeds", "Chia seeds", "Tempeh", "Tofu (extra firm)",
        "Edamame", "Black beans", "Chickpeas", "White beans", "Lentils",
        "Pumpkin seeds", "Spirulina/chlorella tablets"
      ],
      carbsGrains: [
        "Buckwheat", "Millet", "Wild rice", "Basmati rice", "Sushi rice",
        "Rice noodles", "GF oats"
      ],
      fruits: [
        "Mango", "Pears", "Grapes", "Oranges", "Berries", "Apples"
      ],
      vegetables: [
        "Red cabbage", "Brussels sprouts", "Carrots", "Kale", "Baby kale",
        "Zucchini", "Sweet potatoes", "Broccoli", "Asparagus", "Spinach",
        "Cucumbers", "Peppers", "Tomatoes", "Bok choy", "Snap peas", "Potatoes", "Squash"
      ],
      pantry: [
        "Coconut milk", "Tamari", "Almond milk", "Tahini", "Olive oil",
        "Ginger", "Spices (cumin, turmeric, curry powder, paprika)"
      ]
    }
  },
  {
    weekNumber: 3,
    theme: "Flow State Mastery",
    weeklyGoal: "Expand with new flavors, strengthen nutrient diversity, optimize energy flow",
    dailyCaloriesRange: "1800-2000",
    dailyProteinRange: "78-90g",
    dailyCarbsRange: "210-250g",
    dailyVeggiesRange: "8-12 servings",
    dailyRoutine: {
      morning: [
        { action: "Hydrate with 16 oz water + electrolytes" },
        { action: "Take 6 spirulina + 6 chlorella tablets" },
        { action: "Mobility routine", duration: "5 min" },
        { action: "Sunlight exposure", duration: "5 min" },
        { action: "Breathwork", duration: "2 min" }
      ],
      midday: [
        { action: "Walk after lunch", duration: "10-15 min" },
        { action: "Add 1-2 extra cups of vegetables at lunch" }
      ],
      evening: [
        { action: "Herbal tea" },
        { action: "Light stretching", duration: "5 min" },
        { action: "Reflection", details: "\"Where did my energy flow today?\"" }
      ]
    },
    dailyMeals: [
      {
        dayName: "Monday",
        totalCalories: 1920,
        totalProtein: 88,
        breakfast: {
          name: "Tropical Protein Smoothie",
          calories: 480,
          protein: 34,
          carbs: 60,
          fat: 12,
          ingredients: ["Pea protein", "Pineapple", "Spinach", "Frozen cauliflower", "Hemp seeds", "1/2 banana", "Coconut water splash"]
        },
        lunch: {
          name: "Red Bean & Quinoa Fiesta Bowl",
          calories: 620,
          protein: 26,
          carbs: 78,
          fat: 20,
          ingredients: ["Red beans", "Quinoa", "Romaine", "Corn", "Cherry tomatoes", "Salsa", "Avocado", "Cilantro", "Lime"]
        },
        snack: {
          name: "Blueberries + Almonds + Spirulina",
          calories: 210,
          protein: 7,
          carbs: 22,
          fat: 12,
          ingredients: ["Blueberries", "Almonds", "Spirulina tablets"]
        },
        dinner: {
          name: "Tofu Veggie Korma + Basmati Rice",
          calories: 620,
          protein: 21,
          carbs: 68,
          fat: 20,
          ingredients: ["Tofu", "Basmati rice", "Cauliflower", "Carrots", "Spinach", "Coconut milk", "Curry spices"]
        }
      },
      {
        dayName: "Tuesday",
        totalCalories: 1900,
        totalProtein: 82,
        breakfast: {
          name: "High-Protein Overnight Oats",
          calories: 460,
          protein: 26,
          carbs: 62,
          fat: 12,
          ingredients: ["GF oats", "Pea protein", "Chia seeds", "Raspberries", "Almond milk"]
        },
        lunch: {
          name: "Edamame Soba Noodle Salad",
          calories: 620,
          protein: 30,
          carbs: 78,
          fat: 16,
          ingredients: ["Buckwheat soba noodles", "Edamame (1 cup = 17g protein)", "Shredded cabbage", "Carrot", "Cucumber", "Sesame-lime dressing"]
        },
        snack: {
          name: "Kiwi + Pistachios",
          calories: 180,
          protein: 5,
          carbs: 22,
          fat: 9,
          ingredients: ["Kiwi", "Pistachios"]
        },
        dinner: {
          name: "Lentil Dahl + Sweet Potato + Spinach",
          calories: 640,
          protein: 21,
          carbs: 68,
          fat: 22,
          ingredients: ["Lentils (3/4-1 cup)", "Sweet potato", "Spinach", "Coconut milk", "Ginger", "Turmeric"]
        }
      },
      {
        dayName: "Wednesday",
        totalCalories: 1870,
        totalProtein: 84,
        breakfast: {
          name: "Peach Protein Smoothie",
          calories: 440,
          protein: 32,
          carbs: 54,
          fat: 12,
          ingredients: ["Pea protein", "Peaches", "Spinach", "Frozen cauliflower", "Hemp seeds"]
        },
        lunch: {
          name: "Roasted Veggie + Chickpea Plate",
          calories: 590,
          protein: 24,
          carbs: 76,
          fat: 20,
          ingredients: ["Chickpeas", "Roasted zucchini", "Roasted broccoli", "Butternut squash", "Mixed greens", "Lemon tahini"]
        },
        snack: {
          name: "Grapes + Pumpkin Seeds",
          calories: 170,
          protein: 8,
          carbs: 22,
          fat: 6,
          ingredients: ["Grapes", "Pumpkin seeds"]
        },
        dinner: {
          name: "Veggie Paella (GF) with Tofu",
          calories: 670,
          protein: 20,
          carbs: 75,
          fat: 18,
          ingredients: ["Brown rice", "Peas", "Tomatoes", "Bell peppers", "Garlic", "Saffron", "Tofu pieces"]
        }
      },
      {
        dayName: "Thursday",
        totalCalories: 1950,
        totalProtein: 90,
        breakfast: {
          name: "Protein Berry Bowl",
          calories: 470,
          protein: 28,
          carbs: 66,
          fat: 12,
          ingredients: ["GF granola", "Pea protein blended with berries", "Chia", "Hemp seeds"]
        },
        lunch: {
          name: "Thai Peanut Tempeh Bowl",
          calories: 650,
          protein: 32,
          carbs: 78,
          fat: 22,
          ingredients: ["Tempeh", "Brown rice", "Cabbage", "Carrots", "Snap peas", "Peanut-lime sauce (GF)"]
        },
        snack: {
          name: "Orange + Almonds",
          calories: 180,
          protein: 5,
          carbs: 22,
          fat: 10,
          ingredients: ["Orange", "Almonds"]
        },
        dinner: {
          name: "White Bean + Kale Soup + Millet",
          calories: 650,
          protein: 25,
          carbs: 65,
          fat: 18,
          ingredients: ["White beans", "Kale", "Potatoes", "Onion", "Garlic", "Carrots", "Millet"]
        }
      },
      {
        dayName: "Friday",
        totalCalories: 1880,
        totalProtein: 80,
        breakfast: {
          name: "Banana Split Protein Bowl (Vegan)",
          calories: 460,
          protein: 30,
          carbs: 68,
          fat: 12,
          ingredients: ["Sliced banana", "Berry protein yogurt (vegan yogurt + pea protein)", "Hemp seeds", "Blueberries", "Almond butter drizzle"]
        },
        lunch: {
          name: "Sweet Potato Black Bean Tacos (GF)",
          calories: 620,
          protein: 24,
          carbs: 76,
          fat: 20,
          ingredients: ["Corn tortillas", "Black beans", "Sweet potato cubes", "Cabbage slaw", "Lime", "Cilantro", "Avocado"]
        },
        snack: {
          name: "Mango + Spirulina",
          calories: 180,
          protein: 5,
          carbs: 24,
          fat: 4,
          ingredients: ["Mango", "Spirulina tablets"]
        },
        dinner: {
          name: "Veggie Stir Fry + Tofu + Rice Noodles",
          calories: 620,
          protein: 21,
          carbs: 75,
          fat: 16,
          ingredients: ["Tofu", "Rice noodles", "Snow peas", "Broccoli", "Mushrooms", "Peppers"]
        }
      },
      {
        dayName: "Saturday",
        totalCalories: 1910,
        totalProtein: 82,
        breakfast: {
          name: "Protein Pumpkin Oats",
          calories: 460,
          protein: 26,
          carbs: 66,
          fat: 12,
          ingredients: ["GF oats", "Pumpkin puree", "Pumpkin pie spice", "Pea protein", "Almond milk"]
        },
        lunch: {
          name: "Buddha Bowl w/ Lentils + Rice",
          calories: 620,
          protein: 30,
          carbs: 75,
          fat: 20,
          ingredients: ["Lentils", "Brown rice", "Spinach", "Cauliflower", "Roasted carrots", "Tahini lemon"]
        },
        snack: {
          name: "Hummus + Cucumber + Peppers",
          calories: 170,
          protein: 6,
          carbs: 20,
          fat: 8,
          ingredients: ["Hummus", "Cucumber", "Bell peppers"]
        },
        dinner: {
          name: "Tofu Poke Bowl (GF)",
          calories: 660,
          protein: 20,
          carbs: 78,
          fat: 20,
          ingredients: ["Sushi rice", "Tofu", "Edamame", "Cucumber", "Carrot", "Avocado", "Seaweed", "Tamari"]
        }
      },
      {
        dayName: "Sunday",
        totalCalories: 1880,
        totalProtein: 84,
        breakfast: {
          name: "Cherry Almond Protein Smoothie",
          calories: 440,
          protein: 32,
          carbs: 54,
          fat: 12,
          ingredients: ["Pea protein", "Cherries", "Almond butter", "Almond milk"]
        },
        lunch: {
          name: "Chickpea Caesar Salad (GF + Vegan)",
          calories: 600,
          protein: 24,
          carbs: 70,
          fat: 20,
          ingredients: ["Chickpeas", "Romaine", "GF croutons", "Vegan Caesar dressing", "Nutritional yeast", "Lemon"]
        },
        snack: {
          name: "Pear + Pumpkin Seeds",
          calories: 180,
          protein: 8,
          carbs: 22,
          fat: 6,
          ingredients: ["Pear", "Pumpkin seeds"]
        },
        dinner: {
          name: "Vegan Jambalaya (High-Protein Version)",
          calories: 660,
          protein: 20,
          carbs: 76,
          fat: 18,
          ingredients: ["Brown rice", "Kidney beans", "Tomatoes", "Celery", "Onions", "Peppers", "Cajun spices"]
        }
      }
    ],
    groceryList: {
      proteins: [
        "Pea protein", "Hemp seeds", "Edamame", "Red beans", "Black beans",
        "Chickpeas", "White beans", "Tempeh", "Tofu", "Lentils", "Pumpkin seeds",
        "Spirulina/chlorella tablets", "Nutritional yeast"
      ],
      carbsGrains: [
        "Brown rice", "Basmati rice", "Millet", "Buckwheat soba noodles",
        "Rice noodles", "GF oats", "Quinoa", "Corn tortillas"
      ],
      fruits: [
        "Pineapple", "Peaches", "Cherries", "Grapes", "Oranges", "Pears"
      ],
      vegetables: [
        "Romaine", "Spinach", "Cabbage", "Zucchini", "Broccoli", "Cauliflower",
        "Peppers", "Carrots", "Butternut squash", "Snap peas", "Potatoes", "Kale"
      ],
      pantry: [
        "Coconut milk", "Tamari", "Tahini", "Peanut butter", "Almond milk",
        "Salsa", "Spices (curry, turmeric, cumin, garlic, saffron, Cajun)"
      ]
    }
  },
  {
    weekNumber: 4,
    theme: "Sustainable Energy Lifestyle",
    weeklyGoal: "Integrate everything into a deeply energizing rhythm",
    dailyCaloriesRange: "1800-2000",
    dailyProteinRange: "75-90g",
    dailyCarbsRange: "210-250g",
    dailyVeggiesRange: "8-12 servings",
    dailyRoutine: {
      morning: [
        { action: "Hydrate with 16 oz water + electrolytes" },
        { action: "Take 6 spirulina + 6 chlorella tablets" },
        { action: "Flow mobility", duration: "5 min" },
        { action: "Natural light exposure", duration: "5 min" },
        { action: "3 deep exhale-focused breaths" },
        { action: "Affirmation", details: "\"My energy flows with ease today.\"" }
      ],
      midday: [
        { action: "Joyful walk", duration: "10-20 min" },
        { action: "Eat slowly + mindfully" },
        { action: "Add 1-2 extra cups of vegetables" }
      ],
      evening: [
        { action: "Herbal tea", details: "Chamomile, peppermint, or lemon balm" },
        { action: "Gentle hip & back release stretch" },
        { action: "Journal", details: "\"What helped me feel my best today?\"" }
      ]
    },
    dailyMeals: [
      {
        dayName: "Monday",
        totalCalories: 1900,
        totalProtein: 84,
        breakfast: {
          name: "Strawberry Matcha Protein Smoothie",
          calories: 450,
          protein: 32,
          carbs: 55,
          fat: 12,
          ingredients: ["Pea protein", "Strawberries", "Matcha powder", "Spinach", "Hemp seeds", "Frozen cauliflower", "Almond milk"]
        },
        lunch: {
          name: "Roasted Broccoli & White Bean Quinoa Plate",
          calories: 620,
          protein: 28,
          carbs: 76,
          fat: 18,
          ingredients: ["White beans", "Quinoa", "Roasted broccoli", "Red onion", "Kale", "Lemon-tahini dressing"]
        },
        snack: {
          name: "Blueberries + Walnuts + Spirulina",
          calories: 180,
          protein: 6,
          carbs: 18,
          fat: 12,
          ingredients: ["Blueberries", "Walnuts", "Spirulina tablets"]
        },
        dinner: {
          name: "Tofu Veggie Teriyaki + Rice Noodles",
          calories: 650,
          protein: 18,
          carbs: 76,
          fat: 18,
          ingredients: ["Tofu", "Rice noodles", "Bok choy", "Mushrooms", "Peppers", "Snap peas"]
        }
      },
      {
        dayName: "Tuesday",
        totalCalories: 1870,
        totalProtein: 82,
        breakfast: {
          name: "Protein Banana Oat Bake (GF)",
          calories: 470,
          protein: 26,
          carbs: 66,
          fat: 12,
          ingredients: ["GF oats", "Banana", "Pea protein", "Almond milk", "Cinnamon", "Berries on top"]
        },
        lunch: {
          name: "Moroccan Lentil & Carrot Bowl",
          calories: 600,
          protein: 28,
          carbs: 70,
          fat: 18,
          ingredients: ["Lentils", "Carrots", "Raisins", "Spinach", "Roasted potatoes", "Moroccan spice blend", "Lemon"]
        },
        snack: {
          name: "Kiwi + Cashews",
          calories: 180,
          protein: 5,
          carbs: 22,
          fat: 9,
          ingredients: ["Kiwi", "Cashews"]
        },
        dinner: {
          name: "High-Protein Veggie Pad Khing (Thai Ginger Stir Fry)",
          calories: 620,
          protein: 23,
          carbs: 68,
          fat: 20,
          ingredients: ["Brown rice", "Tofu", "Bell peppers", "Carrots", "Snow peas", "Ginger"]
        }
      },
      {
        dayName: "Wednesday",
        totalCalories: 1930,
        totalProtein: 86,
        breakfast: {
          name: "Peach Cobbler Protein Smoothie",
          calories: 460,
          protein: 32,
          carbs: 58,
          fat: 12,
          ingredients: ["Peaches", "Pea protein", "GF oats", "Cinnamon", "Spinach", "Frozen cauliflower"]
        },
        lunch: {
          name: "Sweet Potato Chickpea Harvest Bowl",
          calories: 620,
          protein: 24,
          carbs: 75,
          fat: 20,
          ingredients: ["Chickpeas", "Sweet potato", "Kale", "Brussels sprouts", "Apple slices", "Tahini-maple drizzle"]
        },
        snack: {
          name: "Grapes + Pumpkin Seeds",
          calories: 170,
          protein: 8,
          carbs: 24,
          fat: 6,
          ingredients: ["Grapes", "Pumpkin seeds"]
        },
        dinner: {
          name: "Tofu Pho Broth Bowl (GF)",
          calories: 680,
          protein: 22,
          carbs: 74,
          fat: 18,
          ingredients: ["Rice noodles", "Tofu", "Mushrooms", "Bean sprouts", "Cilantro", "Lime", "Broth with ginger + star anise"]
        }
      },
      {
        dayName: "Thursday",
        totalCalories: 1910,
        totalProtein: 88,
        breakfast: {
          name: "Chocolate Cherry Protein Shake",
          calories: 450,
          protein: 32,
          carbs: 54,
          fat: 10,
          ingredients: ["Chocolate pea protein", "Cherries", "Almond milk", "Spinach"]
        },
        lunch: {
          name: "Buddha Bowl with Edamame + Millet",
          calories: 630,
          protein: 32,
          carbs: 74,
          fat: 18,
          ingredients: ["Millet", "Edamame (1 cup = 17g protein)", "Roasted broccoli", "Carrots", "Baby spinach", "Lemon dressing"]
        },
        snack: {
          name: "Pear + Almonds",
          calories: 190,
          protein: 5,
          carbs: 24,
          fat: 10,
          ingredients: ["Pear", "Almonds"]
        },
        dinner: {
          name: "Vegan Paella with Tofu",
          calories: 640,
          protein: 19,
          carbs: 74,
          fat: 18,
          ingredients: ["Saffron rice", "Tofu", "Tomatoes", "Peppers", "Peas", "Zucchini", "Garlic", "Onion"]
        }
      },
      {
        dayName: "Friday",
        totalCalories: 1880,
        totalProtein: 82,
        breakfast: {
          name: "Berry Lemon Protein Smoothie",
          calories: 440,
          protein: 32,
          carbs: 52,
          fat: 10,
          ingredients: ["Pea protein", "Mixed berries", "Lemon", "Spinach", "Almond milk"]
        },
        lunch: {
          name: "Mexican Rice & Bean Bowl",
          calories: 620,
          protein: 28,
          carbs: 80,
          fat: 18,
          ingredients: ["Black beans", "Brown rice", "Salsa", "Corn", "Cilantro", "Lime", "Avocado"]
        },
        snack: {
          name: "Dark Chocolate + Strawberries",
          calories: 180,
          protein: 4,
          carbs: 20,
          fat: 10,
          ingredients: ["Dark chocolate", "Strawberries"]
        },
        dinner: {
          name: "Coconut Curry Vegetable Ramen (GF)",
          calories: 640,
          protein: 18,
          carbs: 78,
          fat: 20,
          ingredients: ["GF ramen noodles", "Mushrooms", "Bok choy", "Carrots", "Peas", "Nori", "Coconut broth"]
        }
      },
      {
        dayName: "Saturday",
        totalCalories: 1910,
        totalProtein: 85,
        breakfast: {
          name: "Protein Chia Yogurt Parfait",
          calories: 460,
          protein: 28,
          carbs: 62,
          fat: 12,
          ingredients: ["Vegan yogurt", "Pea protein", "Chia seeds", "Berries", "GF granola"]
        },
        lunch: {
          name: "Pesto Veggie Bowl with White Beans (GF)",
          calories: 630,
          protein: 28,
          carbs: 72,
          fat: 20,
          ingredients: ["White beans", "GF pasta", "Zucchini", "Tomatoes", "Spinach", "Vegan pesto"]
        },
        snack: {
          name: "Mango + Pumpkin Seeds",
          calories: 180,
          protein: 7,
          carbs: 24,
          fat: 6,
          ingredients: ["Mango", "Pumpkin seeds"]
        },
        dinner: {
          name: "Tofu Stir Fry + Jasmine Rice",
          calories: 640,
          protein: 22,
          carbs: 72,
          fat: 18,
          ingredients: ["Tofu", "Jasmine rice", "Broccoli", "Snap peas", "Mushrooms", "Bell peppers"]
        }
      },
      {
        dayName: "Sunday",
        totalCalories: 1880,
        totalProtein: 84,
        breakfast: {
          name: "Pineapple Ginger Protein Smoothie",
          calories: 440,
          protein: 32,
          carbs: 55,
          fat: 10,
          ingredients: ["Pea protein", "Pineapple", "Ginger", "Spinach", "Almond milk"]
        },
        lunch: {
          name: "Lentil Mushroom Bowl",
          calories: 620,
          protein: 28,
          carbs: 72,
          fat: 18,
          ingredients: ["Lentils", "Mushrooms", "Kale", "Wild rice", "Lemon-garlic dressing"]
        },
        snack: {
          name: "Apple + Almond Butter + Spirulina",
          calories: 200,
          protein: 6,
          carbs: 24,
          fat: 10,
          ingredients: ["Apple", "Almond butter", "Spirulina tablets"]
        },
        dinner: {
          name: "Gluten-Free Vegan \"Mac & Greens\"",
          calories: 620,
          protein: 18,
          carbs: 72,
          fat: 18,
          ingredients: ["GF pasta", "Cashew cream sauce", "Broccoli", "Spinach", "Garlic", "Nutritional yeast"]
        }
      }
    ],
    groceryList: {
      proteins: [
        "Pea protein", "Tofu", "Tempeh", "Edamame", "White beans", "Black beans",
        "Lentils", "Chickpeas", "Pumpkin seeds", "Hemp seeds", "Spirulina/chlorella tablets"
      ],
      carbsGrains: [
        "Rice noodles", "GF ramen", "Jasmine rice", "Wild rice", "Quinoa",
        "GF oats", "GF pasta", "Millet"
      ],
      fruits: [
        "Strawberries", "Peaches", "Pineapple", "Cherries", "Pears", "Apples", "Bananas"
      ],
      vegetables: [
        "Broccoli", "Spinach", "Kale", "Bok choy", "Mushrooms", "Snap peas",
        "Brussels sprouts", "Peppers", "Carrots", "Zucchini", "Cauliflower",
        "Sweet potatoes", "Tomatoes", "Red onion"
      ],
      pantry: [
        "Coconut milk", "Almond milk", "Vegan pesto", "Tamari", "Tahini",
        "Rice vinegar", "Matcha", "Ginger", "Garlic", "Nutritional yeast"
      ]
    }
  }
];

export function getWeeklyPlan(weekNumber: number): WeeklyPlanData | undefined {
  return weeklyPlanData.find(w => w.weekNumber === weekNumber);
}
