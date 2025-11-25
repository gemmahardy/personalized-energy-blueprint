import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Printer, ShoppingCart, Leaf, Apple, Wheat, Package } from "lucide-react";
import type { WeeklyPlanData } from "@shared/schema";
import { useState } from "react";

interface GroceryListProps {
  weekPlan: WeeklyPlanData;
}

function GroceryCategory({ 
  title, 
  items, 
  icon: Icon,
  checkedItems,
  onToggle 
}: { 
  title: string; 
  items: string[]; 
  icon: React.ElementType;
  checkedItems: Set<string>;
  onToggle: (item: string) => void;
}) {
  return (
    <Card className="print:break-inside-avoid print:shadow-none print:border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <Checkbox 
                id={`${title}-${index}`}
                checked={checkedItems.has(item)}
                onCheckedChange={() => onToggle(item)}
                className="print:hidden"
                data-testid={`checkbox-grocery-${title.toLowerCase()}-${index}`}
              />
              <span className="print:before:content-['☐_'] text-sm text-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function GroceryList({ weekPlan }: GroceryListProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleToggle = (item: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(item)) {
      newChecked.delete(item);
    } else {
      newChecked.add(item);
    }
    setCheckedItems(newChecked);
  };

  const handlePrint = () => {
    window.print();
  };

  const grocery = weekPlan.groceryList;
  const totalItems = 
    grocery.vegetables.length + 
    grocery.proteins.length + 
    grocery.carbsGrains.length + 
    grocery.fruits.length + 
    grocery.pantry.length;

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4 print:hidden">
        <div>
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2" data-testid="text-grocery-list-title">
            <ShoppingCart className="h-6 w-6 text-primary" />
            Week {weekPlan.weekNumber} Grocery List
          </h2>
          <p className="text-muted-foreground mt-1">
            {totalItems} items for {weekPlan.theme.toLowerCase()}
          </p>
        </div>
        <Button onClick={handlePrint} className="gap-2" data-testid="button-print-grocery">
          <Printer className="h-4 w-4" />
          Print Grocery List
        </Button>
      </div>

      <div className="hidden print:block text-center mb-6">
        <h1 className="text-2xl font-bold">Week {weekPlan.weekNumber} Grocery List</h1>
        <p className="text-lg text-muted-foreground">{weekPlan.theme}</p>
        <p className="text-sm mt-2">Personalized Energy Blueprint - The Energy Lifestyle Company</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <GroceryCategory 
          title="Vegetables" 
          items={grocery.vegetables} 
          icon={Leaf}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
        <GroceryCategory 
          title="Proteins" 
          items={grocery.proteins} 
          icon={Package}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
        <GroceryCategory 
          title="Carbs & Grains" 
          items={grocery.carbsGrains} 
          icon={Wheat}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
        <GroceryCategory 
          title="Fruits" 
          items={grocery.fruits} 
          icon={Apple}
          checkedItems={checkedItems}
          onToggle={handleToggle}
        />
      </div>

      <GroceryCategory 
        title="Pantry Staples" 
        items={grocery.pantry} 
        icon={Package}
        checkedItems={checkedItems}
        onToggle={handleToggle}
      />

      <div className="text-center text-xs text-muted-foreground print:mt-8 print:block hidden">
        <p>Personalized Energy Blueprint - The Energy Lifestyle Company</p>
        <p>Shop organic when possible. Adjust quantities based on household size.</p>
      </div>
    </div>
  );
}
