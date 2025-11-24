import logoUrl from "@assets/image_1764022595591.png";

export function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
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
