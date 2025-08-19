import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Truck, 
  Clock, 
  Award,
  Zap,
  Users,
  Headphones,
  CheckCircle
} from "lucide-react";

export function ModernFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "ISO certified automotive lighting solutions meeting international safety and quality standards",
      gradient: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Nationwide shipping with real-time tracking, express delivery available for urgent orders",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and customer service from our expert team",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600"
    },
    {
      icon: Award,
      title: "Certified Products",
      description: "All products tested and certified for automotive use with comprehensive warranty coverage",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge LED technology with energy-efficient designs and advanced features",
      gradient: "from-yellow-500/20 to-amber-500/20",
      iconColor: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Trusted Brand",
      description: "Serving thousands of satisfied customers across India with proven reliability",
      gradient: "from-teal-500/20 to-cyan-500/20",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/5 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6">
            <CheckCircle className="h-4 w-4" />
            Why Choose Luminex AutoTech?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 leading-tight">
            Engineered for Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine premium quality, innovative technology, and exceptional service 
            to deliver automotive lighting solutions that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="card-feature group relative overflow-hidden border-accent/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center relative z-10">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="bg-gradient-primary w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                    <feature.icon className={`h-10 w-10 text-primary-foreground`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full animate-pulse"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 p-8 bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl border border-accent/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-sm text-muted-foreground font-medium">Customer Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">2-3</div>
              <div className="text-sm text-muted-foreground font-medium">Days Average Delivery</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">1</div>
              <div className="text-sm text-muted-foreground font-medium">Year Warranty</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}