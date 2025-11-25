import logoUrl from "@assets/image_1764022595591.png";
import { AlertTriangle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 max-w-2xl text-center" data-testid="disclaimer-box">
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm font-semibold text-amber-800 dark:text-amber-300">Disclaimer</span>
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400" data-testid="text-disclaimer">
              This program is for educational purposes only and is not intended as medical advice. 
              Please consult a licensed physician before making any changes to your diet, exercise routine, 
              or supplement regimen.
            </p>
          </div>
          
          <img 
            src={logoUrl} 
            alt="The Energy Lifestyle Company" 
            className="h-12 w-auto"
            data-testid="img-footer-logo"
          />
          <div className="text-center">
            <p className="text-sm text-muted-foreground" data-testid="text-support-label">
              Support
            </p>
            <a 
              href="mailto:sunshine@theenergylifestyle.com"
              className="text-primary hover-elevate active-elevate-2 font-medium transition-colors px-2 py-1 rounded-md inline-block"
              data-testid="link-support-email"
            >
              sunshine@theenergylifestyle.com
            </a>
          </div>
          <p className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} The Energy Lifestyle Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
