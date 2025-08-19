import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { PRODUCTS, CATEGORIES, getProductsByCategory } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Star, TrendingUp, Shield, Truck, Clock } from "lucide-react";

const queryClient = new QueryClient();

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        categories={CATEGORIES}
      />

      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 bg-gradient-hero overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full animate-float"></div>
            <div
              className="absolute bottom-20 right-10 w-6 h-6 bg-primary-foreground/20 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-8">
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-primary-foreground border-white/30 px-4 py-2 text-sm font-medium mb-6 animate-fade-in"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Premium Automotive Solutions
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gradient-hero mb-8 animate-fade-in leading-tight">
                Illuminate Your Journey
              </h1>

              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 animate-slide-up max-w-3xl mx-auto leading-relaxed">
                Premium automotive lighting solutions for every vehicle. From
                head lights to power systems, we light the way forward with
                innovation and reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
                <Button className="btn-accent text-lg px-10 py-4 h-14 text-base font-bold">
                  <Star className="h-5 w-5 mr-2" />
                  Browse Catalogue
                </Button>
                <Button
                  variant="outline"
                  className="text-lg px-10 py-4 h-14 text-base font-bold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="card-feature text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-muted-foreground">
                    Certified automotive lighting solutions meeting
                    international standards
                  </p>
                </CardContent>
              </Card>

              <Card className="card-feature text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Truck className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-muted-foreground">
                    Quick nationwide shipping with real-time tracking and
                    support
                  </p>
                </CardContent>
              </Card>

              <Card className="card-feature text-center p-6">
                <CardContent className="p-0">
                  <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    24/7 Support
                  </h3>
                  <p className="text-muted-foreground">
                    Round-the-clock technical assistance and customer service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-medium mb-4"
              >
                <Zap className="h-4 w-4 mr-2" />
                Our Product Range
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
                Automotive Excellence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of automotive lighting and
                electrical accessories, designed for durability, performance,
                and style.
              </p>
            </div>

            {/* Enhanced Product Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              {CATEGORIES.slice(1).map((category) => {
                const count = getProductsByCategory(category).length;
                return (
                  <Card
                    key={category}
                    className="card-feature text-center p-6 hover-lift"
                  >
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-accent mb-2">
                        {count}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium">
                        {category}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Enhanced Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-secondary/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-xl text-muted-foreground font-medium">
                  No products found in this category.
                </p>
                <p className="text-muted-foreground mt-2">
                  Try selecting a different category or browse all products.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
