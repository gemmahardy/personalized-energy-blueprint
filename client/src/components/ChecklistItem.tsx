import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ChecklistItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  category?: string;
}

export function ChecklistItem({ 
  id, 
  label, 
  checked, 
  onCheckedChange,
  category 
}: ChecklistItemProps) {
  return (
    <div 
      className="flex items-start gap-3 p-3 rounded-md hover-elevate transition-all group"
      data-testid={`checklist-item-${id}`}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="mt-0.5 h-6 w-6 flex-shrink-0"
        data-testid={`checkbox-${id}`}
      />
      <div className="flex-1 min-w-0">
        <Label
          htmlFor={id}
          className={cn(
            "text-base cursor-pointer transition-all leading-relaxed",
            checked && "line-through text-muted-foreground"
          )}
          data-testid={`label-${id}`}
        >
          {label}
        </Label>
        {category && (
          <p className="text-xs text-muted-foreground mt-1" data-testid={`text-category-${id}`}>
            {category}
          </p>
        )}
      </div>
    </div>
  );
}
