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
        {/* Hero Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
                Illuminate Your Journey
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up">
                Premium automotive lighting solutions for every vehicle. 
                From head lights to power systems, we light the way forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
                <Button className="btn-accent text-base px-8 py-3">
                  Browse Catalogue
                </Button>
                <Button variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-base px-8 py-3">
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gradient-primary mb-4">
                Our Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our comprehensive range of automotive lighting and electrical accessories, 
                designed for durability, performance, and style.
              </p>
            </div>

            {/* Product Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {CATEGORIES.slice(1).map((category) => {
                const count = getProductsByCategory(category).length;
                return (
                  <div key={category} className="text-center p-4 rounded-lg bg-gradient-card">
                    <div className="text-2xl font-bold text-accent mb-1">{count}</div>
                    <div className="text-sm text-muted-foreground">{category}</div>
                  </div>
                );
              })}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.code} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
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
