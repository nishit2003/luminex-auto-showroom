import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  ShoppingCart,
  Download,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import { useEnquiryStore } from "@/stores/enquiryStore";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export function Header({
  activeCategory,
  onCategoryChange,
  categories,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const enquiryCount = useEnquiryStore((state) => state.items.length);

  return (
    <header className="header-sticky">
      <div className="container mx-auto px-4">
        {/* Enhanced Top Bar */}
        <div className="py-3 border-b border-border/20 bg-gradient-to-r from-secondary/50 to-muted/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-medium">gsnh15@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-medium">+91 XXXXX XXXXX</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs hover:bg-accent/10 hover:text-accent transition-all duration-200"
              >
                <Download className="h-3 w-3 mr-2" />
                Download Catalogue
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Main Header */}
        <div className="py-6">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-gradient-primary p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-primary-foreground font-bold text-xl">
                    L
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-3 w-3 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient-primary">
                  Luminex AutoTech
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Automotive Lighting Solutions
                </p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeCategory === category
                      ? "btn-primary shadow-lg"
                      : "hover:bg-secondary/60 hover:text-foreground hover:shadow-md"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </nav>

            {/* Enhanced Mobile Menu & Cart */}
            <div className="flex items-center gap-3">
              {/* Enhanced Enquiry Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="relative h-10 px-4 rounded-xl border-accent/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Enquiry</span>
                    {enquiryCount > 0 && (
                      <Badge
                        variant="destructive"
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold animate-pulse"
                      >
                        {enquiryCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold text-gradient-primary">
                      Enquiry Cart
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    {enquiryCount === 0 ? (
                      <div className="text-center py-12">
                        <div className="bg-secondary/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground text-lg font-medium">
                          No products added to enquiry
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Start browsing our products to add them to your
                          enquiry
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                          <p className="text-sm text-muted-foreground text-center">
                            <span className="font-semibold text-accent">
                              {enquiryCount}
                            </span>{" "}
                            product(s) in enquiry
                          </p>
                        </div>
                        <Button className="w-full btn-accent h-12 text-base font-semibold">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Enquiry
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Enhanced Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden h-10 px-4 rounded-xl border-border hover:bg-secondary/50 transition-all duration-200"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold text-gradient-primary">
                      Categories
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="mt-6 space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={
                          activeCategory === category ? "default" : "ghost"
                        }
                        className={`w-full justify-start h-12 text-base rounded-xl transition-all duration-200 ${
                          activeCategory === category
                            ? "btn-primary shadow-lg"
                            : "hover:bg-secondary/60 hover:text-foreground"
                        }`}
                        onClick={() => {
                          onCategoryChange(category);
                          setIsMenuOpen(false);
                        }}
                      >
                        {category}
                      </Button>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
