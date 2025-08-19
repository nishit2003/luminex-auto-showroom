import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Download, Phone, Mail } from "lucide-react";
import { useEnquiryStore } from "@/stores/enquiryStore";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: string[];
}

export function Header({ activeCategory, onCategoryChange, categories }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const enquiryCount = useEnquiryStore(state => state.items.length);

  return (
    <header className="header-sticky">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-border/30">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>gsnh15@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                <Download className="h-3 w-3 mr-1" />
                Download Catalogue
              </Button>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <div className="text-primary-foreground font-bold text-lg">L</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-primary">Luminex AutoTech</h1>
                <p className="text-xs text-muted-foreground">Automotive Lighting Solutions</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onCategoryChange(category)}
                  className={activeCategory === category ? "btn-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu & Cart */}
            <div className="flex items-center gap-2">
              {/* Enquiry Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    {enquiryCount > 0 && (
                      <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                        {enquiryCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Enquiry Cart</SheetTitle>
                  </SheetHeader>
                  <div className="mt-4">
                    {enquiryCount === 0 ? (
                      <p className="text-muted-foreground text-center py-8">No products added to enquiry</p>
                    ) : (
                      <div className="space-y-2">
                        {/* Enquiry items will be rendered here */}
                        <p className="text-sm text-muted-foreground">{enquiryCount} product(s) in enquiry</p>
                        <Button className="w-full btn-accent" size="sm">
                          Send Enquiry
                        </Button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Categories</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-4 space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={activeCategory === category ? "default" : "ghost"}
                        className={`w-full justify-start ${activeCategory === category ? "btn-primary" : ""}`}
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