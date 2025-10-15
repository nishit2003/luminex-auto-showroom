import { useState, useEffect, useCallback } from "react";
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
import { ModernHero } from "@/components/ModernHero";
import { ModernFeatures } from "@/components/ModernFeatures";
import { HeadlightShowcase } from "@/components/HeadlightShowcase";
import { PRODUCTS, CATEGORIES, getProductsByCategory } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Star,
  TrendingUp,
  Shield,
  Truck,
  Clock,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  ArrowUp,
  Home,
  Package,
  Info,
  Mail,
} from "lucide-react";

const queryClient = new QueryClient();

function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Enhanced filtering and search with loading state and debouncing
  const getFilteredAndSortedProducts = useCallback(() => {
    let filtered = getProductsByCategory(activeCategory);

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          ) ||
          (product.variant &&
            product.variant.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: string | number;
      let bValue: string | number;

      switch (sortBy) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "code":
          aValue = a.code.toLowerCase();
          bValue = b.code.toLowerCase();
          break;
        case "category":
          aValue = a.category.toLowerCase();
          bValue = b.category.toLowerCase();
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }

      if (sortOrder === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [activeCategory, searchQuery, sortBy, sortOrder]);

  const filteredProducts = getFilteredAndSortedProducts();
  const totalProducts = PRODUCTS.length;
  const filteredCount = filteredProducts.length;

  // Handle loading state when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, activeCategory, sortBy, sortOrder]);

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Product skeleton component
  const ProductSkeleton = () => (
    <Card className="card-product animate-pulse">
      <CardHeader className="pb-4">
        <Skeleton className="aspect-square rounded-2xl mb-4" />
        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16" />
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header onTabChange={setActiveTab} />

      <main className="flex-1">
        {/* Tab Content Container */}
        <div className="container mx-auto px-4 pt-8 pb-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsContent value="home" className="space-y-20">
              {/* Modern Hero Section */}
              <ModernHero
                onBrowseProducts={() => {
                  // Switch to products tab using React state
                  setActiveTab("products");
                  // Scroll to top to ensure user sees the products section
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onDownloadCatalog={() => {
                  const link = document.createElement("a");
                  link.href = "/Catalogue 2025.pdf";
                  link.download = "Catalogue 2025.pdf";
                  link.click();
                }}
              />

              {/* Modern Features Section */}
              <ModernFeatures />

              {/* Headlight Showcase Section */}
              <HeadlightShowcase
                onViewProducts={() => {
                  setActiveTab("products");
                  setActiveCategory("Head Lights");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                onAddToEnquiry={(product) => {
                  // Add product to enquiry
                  console.log("Adding to enquiry:", product);
                  // You can integrate with your enquiry store here
                }}
              />

              {/* Product Stats Preview */}
              <section className="py-16">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                      Our Product Range
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Discover our comprehensive range of automotive lighting
                      and electrical accessories
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
                    {CATEGORIES.slice(1).map((category, index) => {
                      const count = getProductsByCategory(category).length;
                      return (
                        <Card
                          key={category}
                          className="card-feature text-center p-4 hover-lift h-28 flex items-center group cursor-pointer transition-all duration-500 hover:scale-105"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CardContent className="p-0 w-full">
                            <div className="text-3xl font-bold text-accent mb-2 group-hover:text-primary transition-colors duration-300">
                              {count}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium leading-tight px-1 group-hover:text-foreground transition-colors duration-300">
                              {category}
                            </div>
                            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-accent to-primary transition-all duration-500 mx-auto mt-2"></div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="text-center mt-8">
                    <Button
                      className="btn-accent text-lg px-8 py-3 h-12 font-semibold"
                      onClick={() => {
                        // Switch to products tab using React state
                        setActiveTab("products");
                        // Scroll to top to ensure user sees the products section
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <Package className="h-5 w-5 mr-2" />
                      View All Products
                    </Button>
                  </div>
                </div>
              </section>
            </TabsContent>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-8">
              {/* Category Filters */}
              <div className="max-w-4xl mx-auto animate-fade-in-up">
                <Card className="p-4 sm:p-6 bg-gradient-to-r from-secondary/30 to-muted/30 border-accent/20">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Filter by Category
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Click on a category to filter products
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button
                      variant={activeCategory === "All" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory("All")}
                      className="px-4 py-2 rounded-xl transition-all duration-300"
                    >
                      All Products
                    </Button>
                    {CATEGORIES.slice(1).map((category) => (
                      <Button
                        key={category}
                        variant={
                          activeCategory === category ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setActiveCategory(category)}
                        className="px-4 py-2 rounded-xl transition-all duration-300"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Search and Filter Bar */}
              <div className="max-w-4xl mx-auto animate-fade-in-up">
                <Card className="p-4 sm:p-6 bg-gradient-to-r from-secondary/30 to-muted/30 border-accent/20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    {/* Search Input */}
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Search Products
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search by name, code, tags, or variant..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10 h-12 border-accent/30 focus:border-accent/50 focus:ring-accent/20"
                        />
                      </div>
                    </div>

                    {/* Sort By */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Sort By
                      </label>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="h-12 border-accent/30 focus:border-accent/50 focus:ring-accent/20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Name</SelectItem>
                          <SelectItem value="code">Code</SelectItem>
                          <SelectItem value="category">Category</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort Order */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Order
                      </label>
                      <Button
                        variant="outline"
                        onClick={() =>
                          setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                        }
                        className="w-full h-12 border-accent/30 hover:border-accent/50 hover:bg-accent/10"
                      >
                        {sortOrder === "asc" ? (
                          <>
                            <SortAsc className="h-4 w-4 mr-2" />
                            <span className="hidden sm:inline">A-Z</span>
                          </>
                        ) : (
                          <>
                            <SortDesc className="h-4 w-4 mr-2" />
                            <span className="hidden sm:inline">Z-A</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Results Summary */}
                  <div className="mt-4 pt-4 border-t border-accent/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <span className="text-xs sm:text-sm">
                          Showing {filteredCount} of {totalProducts} products
                          {activeCategory !== "All" && ` in ${activeCategory}`}
                          {searchQuery && ` matching "${searchQuery}"`}
                        </span>
                      </div>
                      {searchQuery && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSearchQuery("")}
                          className="text-accent hover:text-accent/80 self-start sm:self-auto"
                        >
                          Clear Search
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Products Grid with Loading States */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ProductSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.code} product={product} />
                  ))}
                </div>
              )}

              {!isLoading && filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-secondary/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <p className="text-xl text-muted-foreground font-medium">
                    No products found.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {searchQuery
                      ? `Try adjusting your search terms or browse all products.`
                      : `Try selecting a different category or browse all products.`}
                  </p>
                  {searchQuery && (
                    <Button
                      variant="outline"
                      onClick={() => setSearchQuery("")}
                      className="mt-4"
                    >
                      Clear Search
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="space-y-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                    About Luminex AutoTech
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Leading provider of premium automotive lighting solutions
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Our Story
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Founded with a vision to illuminate the automotive
                        industry with innovative lighting solutions, Luminex
                        AutoTech has been at the forefront of automotive
                        lighting technology for years. We specialize in
                        providing high-quality, durable lighting solutions for
                        all types of vehicles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-8">
                    <CardContent className="p-0">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To provide automotive enthusiasts and professionals with
                        the highest quality lighting solutions that enhance
                        safety, performance, and aesthetics. We are committed to
                        innovation, quality, and customer satisfaction.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mt-8 p-8 bg-gradient-to-r from-secondary/30 to-muted/30">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                      Why Choose Us?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Shield className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Quality Assurance
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          All products meet international standards
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-accent w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Truck className="h-6 w-6 text-accent-foreground" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Fast Delivery
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Quick nationwide shipping
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Clock className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          24/7 Support
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Round-the-clock assistance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-8">
              <ContactSection />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 btn-accent"
          size="sm"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
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
