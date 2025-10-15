import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Car,
  Lightbulb,
  Zap,
  Star,
  Shield,
  Award,
  TrendingUp,
  Eye,
  Info,
  ShoppingCart,
  Package,
  Clock,
  Truck,
} from "lucide-react";
import { ProductComparisonTool } from "./ProductComparisonTool";

interface HeadlightShowcaseProps {
  onViewProducts: () => void;
  onAddToEnquiry: (product: any) => void;
}

export function HeadlightShowcase({
  onViewProducts,
  onAddToEnquiry,
}: HeadlightShowcaseProps) {
  const [activeTab, setActiveTab] = useState("led");

  const headlightCategories = [
    {
      id: "led",
      name: "LED Headlights",
      description: "Advanced LED technology for superior visibility",
      features: [
        "50,000+ hours lifespan",
        "Energy efficient",
        "Instant on/off",
        "Durable construction",
      ],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      count: "25+ Models",
    },
    {
      id: "halogen",
      name: "Halogen Headlights",
      description: "Reliable traditional lighting with modern design",
      features: [
        "Proven technology",
        "Easy installation",
        "Cost effective",
        "Wide compatibility",
      ],
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      count: "15+ Models",
    },
    {
      id: "projector",
      name: "Projector Headlights",
      description: "Precise beam control with superior light distribution",
      features: [
        "Focused beam pattern",
        "Reduced glare",
        "Modern appearance",
        "Enhanced safety",
      ],
      icon: Car,
      color: "from-purple-500 to-pink-500",
      count: "10+ Models",
    },
  ];

  const popularProducts = [
    {
      code: "GS-101",
      name: "Tata Head Light Assy.",
      variant: "1312 LED",
      features: ["LED Technology", "DRL Included", "High Beam", "Low Beam"],
      rating: 4.8,
      compatibility: ["Tata 1312", "Universal Fit"],
      image: "led-headlight",
    },
    {
      code: "GS-104",
      name: "Tata Head Light Assy.",
      variant: "1312 Tri Colour",
      features: [
        "Multi-Color DRL",
        "LED Technology",
        "Weather Resistant",
        "Easy Installation",
      ],
      rating: 4.9,
      compatibility: ["Tata 1312", "Premium Models"],
      image: "tricolor-headlight",
    },
    {
      code: "GS-123",
      name: "Head Light Assy.",
      variant: "Leyland Universal",
      features: [
        "Universal Design",
        "Heavy Duty",
        "Long Lasting",
        "Budget Friendly",
      ],
      rating: 4.7,
      compatibility: ["Leyland", "Commercial Vehicles"],
      image: "leyland-headlight",
    },
  ];

  const getHeadlightIcon = (category: string) => {
    switch (category) {
      case "led":
        return <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />;
      case "halogen":
        return <Lightbulb className="h-8 w-8 text-yellow-400" />;
      case "projector":
        return <Car className="h-8 w-8 text-purple-400" />;
      default:
        return <Lightbulb className="h-8 w-8 text-accent" />;
    }
  };

  const getProductImage = (image: string) => {
    // Placeholder for actual product images
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl relative overflow-hidden">
        <div className="text-6xl opacity-20">💡</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <Badge className="absolute top-3 right-3 bg-accent text-white">
          Premium
        </Badge>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-accent to-blue-500 text-white px-6 py-2 text-sm font-bold mb-6 animate-fade-in">
            <Award className="h-4 w-4 mr-2" />
            Premium Headlight Collection
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 animate-fade-in">
            Illuminate Your Drive
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Discover our comprehensive range of automotive headlights designed
            for superior visibility, durability, and style. From cutting-edge
            LED technology to reliable halogen solutions.
          </p>
        </div>

        {/* Headlight Categories */}
        <div className="mb-16">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary/50 p-2 rounded-2xl">
              {headlightCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-accent data-[state=active]:text-white rounded-xl font-semibold transition-all duration-300"
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {headlightCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-8"
              >
                <Card className="card-feature p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center`}
                        >
                          {getHeadlightIcon(category.id)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {category.name}
                          </h3>
                          <Badge className="bg-accent/20 text-accent font-semibold">
                            {category.count}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {category.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={onViewProducts}
                        className="btn-accent text-lg px-8 py-3 h-12 font-bold"
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        View {category.name}
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden">
                        {getProductImage(category.image)}
                      </div>

                      {/* Floating specs */}
                      <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-xl border border-accent/20">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-bold text-sm">4.8/5</span>
                        </div>
                      </div>

                      <div className="absolute -bottom-4 -left-4 bg-accent text-white rounded-xl p-3 shadow-xl">
                        <div className="text-center">
                          <div className="text-lg font-bold">50K+</div>
                          <div className="text-xs opacity-90">Hours</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Popular Products */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient-primary mb-4">
              Popular Headlight Models
            </h3>
            <p className="text-lg text-muted-foreground">
              Best-selling headlights trusted by automotive professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularProducts.map((product, index) => (
              <Card
                key={product.code}
                className="card-product hover:shadow-2xl transition-all duration-500 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50 mb-4">
                    {getProductImage(product.image)}
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-gradient-to-r from-accent to-blue-500 text-white font-bold">
                      {product.code}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-bold text-sm">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-semibold bg-secondary/30 px-3 py-1 rounded-lg">
                      {product.variant}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      onClick={() => onAddToEnquiry(product)}
                      className="w-full btn-accent h-11 font-bold"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Enquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Product Comparison Tool */}
        <div className="mb-16">
          <ProductComparisonTool
            onProductSelect={(product) => {
              onAddToEnquiry(product);
            }}
          />
        </div>

        {/* Technical Specifications */}
        <Card className="card-feature p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Technical Excellence
            </h3>
            <p className="text-muted-foreground">
              Built to automotive industry standards with premium materials and
              cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                label: "IP65 Rated",
                description: "Water & Dust Resistant",
              },
              {
                icon: Zap,
                label: "50K+ Hours",
                description: "Long-lasting LED",
              },
              {
                icon: Award,
                label: "ISO Certified",
                description: "Quality Assured",
              },
              {
                icon: Truck,
                label: "2-3 Day Delivery",
                description: "Fast Shipping",
              },
            ].map((spec, index) => (
              <div
                key={spec.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-accent/20 to-blue-500/20 flex items-center justify-center">
                  <spec.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{spec.label}</h4>
                <p className="text-sm text-muted-foreground">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
