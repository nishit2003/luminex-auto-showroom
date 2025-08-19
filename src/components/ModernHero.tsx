import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Star, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Target
} from "lucide-react";

interface ModernHeroProps {
  onBrowseProducts: () => void;
  onDownloadCatalog: () => void;
}

export function ModernHero({ onBrowseProducts, onDownloadCatalog }: ModernHeroProps) {
  return (
    <section className="hero-modern py-24 lg:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent/40 rounded-full animate-float blur-sm"></div>
        <div 
          className="absolute bottom-20 right-10 w-6 h-6 bg-primary-foreground/30 rounded-full animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-float blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/30 rounded-full animate-float blur-sm"
          style={{ animationDelay: "3s" }}
        ></div>
        <div 
          className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-primary-foreground/20 rounded-full animate-float blur-sm"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-white/20 text-primary-foreground border-white/30 px-6 py-3 text-sm font-semibold mb-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 group">
              <Sparkles className="h-4 w-4 mr-2 group-hover:animate-spin" />
              Premium Automotive Solutions Since 2020
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-hero mb-8 animate-fade-in leading-tight tracking-tight">
            Illuminate Your
            <span className="block text-white drop-shadow-2xl">Journey</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 animate-slide-up max-w-4xl mx-auto leading-relaxed font-light">
            Experience premium automotive lighting solutions engineered for performance, 
            designed for durability, and crafted for excellence. From head lights to power systems, 
            we illuminate the path to automotive innovation.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto animate-scale-in">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Certified Products</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Target className="h-6 w-6 text-accent" />
              <span className="text-white font-medium">Fast Delivery</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button
              onClick={onBrowseProducts}
              className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 text-lg px-12 py-6 h-16 font-bold rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              <Star className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Browse Products
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              onClick={onDownloadCatalog}
              variant="outline"
              className="text-lg px-12 py-6 h-16 font-bold border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300 rounded-2xl group"
            >
              <TrendingUp className="h-6 w-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              Download Catalog
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-primary-foreground/80 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}