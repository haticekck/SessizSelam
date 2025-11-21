import heroImage from "@assets/generated_images/Forest_canopy_hero_banner_a9fd88cf.png";
import { tr } from "@/lib/translations";

export function Hero() {
  return (
    <div className="relative h-[200px] overflow-hidden">
      <img 
        src={heroImage} 
        alt="Orman gölgeliği"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-hero-title">
          {tr.home.heroTitle}
        </h1>
        <p className="text-sm md:text-base text-foreground/90 max-w-md" data-testid="text-hero-subtitle">
          {tr.home.heroSubtitle}
        </p>
      </div>
    </div>
  );
}
