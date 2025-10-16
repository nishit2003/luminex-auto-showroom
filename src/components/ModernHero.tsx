import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Star,
  Download,
  Car,
  Lightbulb,
  Battery,
  Fan,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";

interface ModernHeroProps {
  onBrowseProducts: () => void;
  onDownloadCatalog: () => void;
}

export function ModernHero({
  onBrowseProducts,
  onDownloadCatalog,
}: ModernHeroProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-hero overflow-hidden rounded-2xl sm:rounded-3xl">
      {/* Enhanced Background Elements with Automotive Theme */}
      <div className="absolute inset-0 opacity-20">
        {/* Headlight beam effects */}
        <div className="absolute top-20 left-10 w-32 h-2 bg-gradient-to-r from-accent via-white to-transparent rounded-full opacity-60 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-2 bg-gradient-to-r from-accent via-white to-transparent rounded-full opacity-60 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating automotive elements */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-float flex items-center justify-center">
          <Car className="w-4 h-4 text-accent" />
        </div>
        <div
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-accent/20 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "3s" }}
        >
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 w-7 h-7 bg-white/15 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "1.5s" }}
        >
          <Battery className="w-4 h-4 text-accent" />
        </div>

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="mb-8">
              <Badge
                variant="secondary"
                className="bg-white/20 text-primary-foreground border-white/30 px-6 py-3 text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm"
              >
                <Award className="h-4 w-4 mr-2" />
                Premium Automotive Lighting Solutions
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gradient-hero mb-6 sm:mb-8 animate-fade-in leading-tight">
              Illuminate Your Journey
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 sm:mb-12 animate-slide-up max-w-4xl mx-auto leading-relaxed">
              Premium automotive lighting solutions for every vehicle. From
              advanced LED headlights to intelligent fog lamps, we light the way
              forward with cutting-edge innovation and unmatched reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-scale-in mb-8 sm:mb-12 md:mb-16">
              <Button
                className="btn-accent text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 h-12 sm:h-14 font-bold shadow-2xl hover:shadow-glow"
                onClick={onBrowseProducts}
              >
                <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Explore Products
              </Button>
              <Button
                variant="outline"
                className="text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 h-12 sm:h-14 font-bold border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-white/10 backdrop-blur-sm"
                onClick={onDownloadCatalog}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Download Catalogue
              </Button>
            </div>
          </div>

          {/* Enhanced Product Categories Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up">
            {[
              {
                icon: Car,
                label: "Head Lights",
                count: "30+",
                description: "LED & Halogen",
                color: "from-blue-500/20 to-purple-500/20",
              },
              {
                icon: Lightbulb,
                label: "Fog Lamps",
                count: "50+",
                description: "Universal Fit",
                color: "from-yellow-500/20 to-orange-500/20",
              },
              {
                icon: Zap,
                label: "Spot Lights",
                count: "2+",
                description: "High Power",
                color: "from-yellow-500/20 to-red-500/20",
              },
              {
                icon: Battery,
                label: "Power & Fans",
                count: "15+",
                description: "12V/24V DC",
                color: "from-green-500/20 to-emerald-500/20",
              },
            ].map((category, index) => (
              <Card
                key={category.label}
                className="card-glass hover:scale-105 transition-all duration-500 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={onBrowseProducts}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-primary-foreground mb-2">
                    {category.label}
                  </h3>
                  <div className="text-xl sm:text-2xl font-bold text-accent mb-1">
                    {category.count}
                  </div>
                  <p className="text-xs sm:text-sm text-primary-foreground/90">
                    {category.description}
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-accent to-white transition-all duration-500 mx-auto mt-3"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up">
            {[
              {
                icon: Shield,
                label: "Quality Assured",
                description: "ISO Certified",
              },
              {
                icon: TrendingUp,
                label: "Best Sellers",
                description: "Top Rated",
              },
              {
                icon: Zap,
                label: "Latest Tech",
                description: "LED Innovation",
              },
              {
                icon: Award,
                label: "Industry Leader",
                description: "15+ Years",
              },
            ].map((feature, index) => (
              <div
                key={feature.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-primary-foreground text-xs sm:text-sm mb-1">
                  {feature.label}
                </h4>
                <p className="text-xs text-primary-foreground/90">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
