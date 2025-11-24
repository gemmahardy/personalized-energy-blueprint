import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface CompletionModalProps {
  open: boolean;
  onClose: () => void;
  day: number;
  totalDays: number;
  congratsMessage: string;
}

export function CompletionModal({ 
  open, 
  onClose, 
  day, 
  totalDays, 
  congratsMessage 
}: CompletionModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md" data-testid="modal-completion">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary" data-testid="icon-completion" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl" data-testid="text-completion-title">
            Day {day} Complete!
          </DialogTitle>
          <DialogDescription className="text-center pt-2 text-base" data-testid="text-completion-message">
            {congratsMessage}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Your Progress</p>
            <p className="text-3xl font-bold text-primary" data-testid="text-completion-progress">
              {day}/{totalDays}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              days completed
            </p>
          </div>
        </div>
        
        <Button 
          onClick={onClose}
          className="w-full"
          data-testid="button-continue"
        >
          {day < totalDays ? "Continue Tomorrow" : "View Completion"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
