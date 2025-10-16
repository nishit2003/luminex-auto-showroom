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
  Trash2,
  Plus,
  Minus,
  X,
  Home,
  Package,
  Info,
} from "lucide-react";
import { useEnquiryStore } from "@/stores/enquiryStore";
import { getProductByCode } from "@/data/products";

interface HeaderProps {
  onTabChange: (tab: string) => void;
}

export function Header({ onTabChange }: HeaderProps) {
  const { items, removeItem, clearAll } = useEnquiryStore();

  // Group items by product code and count quantities
  const groupedItems = items.reduce((acc, item) => {
    if (acc[item.product.code]) {
      acc[item.product.code].quantity += 1;
    } else {
      acc[item.product.code] = { ...item.product, quantity: 1 };
    }
    return acc;
  }, {} as Record<string, any>);

  const totalItems = items.length;
  const uniqueItems = Object.values(groupedItems);

  const handleQuantityChange = (code: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(code);
    } else {
      // Remove all instances and add back the new quantity
      const product = getProductByCode(code);
      if (product) {
        // Remove all existing items with this code
        for (
          let i = 0;
          i < items.filter((item) => item.product.code === code).length;
          i++
        ) {
          removeItem(code);
        }
        // Add back the new quantity
        for (let i = 0; i < newQuantity; i++) {
          useEnquiryStore.getState().addItem(product);
        }
      }
    }
  };

  return (
    <header className="header-sticky">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Enhanced Top Bar - Mobile Optimized */}
        <div className="py-2 sm:py-3 border-b border-border/20 bg-gradient-to-r from-secondary/50 to-muted/30">
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2 hover:text-foreground transition-colors">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="font-medium text-xs sm:text-sm">
                  gsnh15@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 hover:text-foreground transition-colors">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="font-medium text-xs sm:text-sm">
                  +91 9643294497
                </span>
              </div>
              <a
                href="https://wa.me/919643294497?text=Hi! I'm interested in your automotive lighting products. Can you help me?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 hover:text-foreground transition-colors text-green-600 hover:text-green-500"
              >
                <svg
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 11.821 0 0020.885 3.488" />
                </svg>
                <span className="font-medium text-xs sm:text-sm">WhatsApp</span>
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 sm:h-8 px-2 sm:px-3 text-xs hover:bg-accent/10 hover:text-accent transition-all duration-200"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Catalogue 2025.pdf";
                  link.download = "Catalogue 2025.pdf";
                  link.click();
                }}
              >
                <Download className="h-3 w-3 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Download</span> Catalogue
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Main Header - Mobile Optimized */}
        <div className="py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Enhanced Logo - Mobile Optimized */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              <div className="relative">
                <div className="bg-gradient-primary p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-primary-foreground font-bold text-lg sm:text-xl">
                    G
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1">
                    <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-accent animate-pulse" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gradient-primary">
                  Grosan
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Automotive Lighting Solutions
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Expanded */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTabChange("home")}
                className="px-3 xl:px-4 py-2 rounded-xl transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:shadow-md text-sm"
              >
                <Home className="h-4 w-4 mr-1 xl:mr-2" />
                Home
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTabChange("products")}
                className="px-3 xl:px-4 py-2 rounded-xl transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:shadow-md text-sm"
              >
                <Package className="h-4 w-4 mr-1 xl:mr-2" />
                Products
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTabChange("about")}
                className="px-3 xl:px-4 py-2 rounded-xl transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:shadow-md text-sm"
              >
                <Info className="h-4 w-4 mr-1 xl:mr-2" />
                About
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onTabChange("contact")}
                className="px-3 xl:px-4 py-2 rounded-xl transition-all duration-300 hover:bg-secondary/60 hover:shadow-md text-sm"
              >
                <Mail className="h-4 w-4 mr-1 xl:mr-2" />
                Contact
              </Button>
            </nav>

            {/* Mobile Navigation - Hamburger Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden px-3 py-2 rounded-xl transition-all duration-300 hover:bg-secondary/60 hover:text-foreground hover:shadow-md text-sm"
                >
                  <Menu className="h-4 w-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-lg sm:text-xl font-bold text-gradient-primary">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 sm:h-12 text-sm sm:text-base rounded-xl transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
                    onClick={() => {
                      onTabChange("home");
                    }}
                  >
                    <Home className="h-4 w-4 mr-2 sm:mr-3" />
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 sm:h-12 text-sm sm:text-base rounded-xl transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
                    onClick={() => {
                      onTabChange("products");
                    }}
                  >
                    <Package className="h-4 w-4 mr-2 sm:mr-3" />
                    Products
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 sm:h-12 text-sm sm:text-base rounded-xl transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
                    onClick={() => {
                      onTabChange("about");
                    }}
                  >
                    <Info className="h-4 w-4 mr-2 sm:mr-3" />
                    About
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 sm:h-12 text-sm sm:text-base rounded-xl transition-all duration-200 hover:bg-secondary/60 hover:text-foreground"
                    onClick={() => {
                      onTabChange("contact");
                    }}
                  >
                    <Mail className="h-4 w-4 mr-2 sm:mr-3" />
                    Contact
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Enhanced Enquiry Cart - Mobile Optimized */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="relative h-8 sm:h-10 px-2 sm:px-4 rounded-xl border-accent/30 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                >
                  <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm font-medium">
                    Enquiry
                  </span>
                  {totalItems > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-6 sm:w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold animate-pulse"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[350px] sm:w-[540px]">
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-lg sm:text-xl font-bold text-gradient-primary">
                      Enquiry Cart
                    </SheetTitle>
                    {totalItems > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAll}
                        className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>
                </SheetHeader>

                <div className="mt-6">
                  {totalItems === 0 ? (
                    <div className="text-center py-12">
                      <div className="bg-secondary/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-lg font-medium">
                        No products added to enquiry
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Start browsing our products to add them to your enquiry
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Cart Summary */}
                      <div className="bg-accent/5 rounded-xl p-4 border border-accent/20">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Total Items:
                          </span>
                          <span className="font-semibold text-accent">
                            {totalItems}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-muted-foreground">
                            Unique Products:
                          </span>
                          <span className="font-semibold text-accent">
                            {uniqueItems.length}
                          </span>
                        </div>
                      </div>

                      {/* Product List */}
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {uniqueItems.map((item) => (
                          <div
                            key={item.code}
                            className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg border border-border/50"
                          >
                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="font-semibold text-sm text-foreground truncate">
                                  {item.name}
                                </p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(item.code)}
                                  className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                                >
                                  <X className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground mb-2">
                                Code: {item.code}
                              </p>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.code,
                                      item.quantity - 1
                                    )
                                  }
                                  className="h-6 w-6 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm font-medium min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.code,
                                      item.quantity + 1
                                    )
                                  }
                                  className="h-6 w-6 p-0"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-3 pt-4 border-t border-border/50">
                        <Button
                          className="w-full btn-accent h-12 text-base font-semibold"
                          onClick={() => {
                            // Switch to contact tab to send enquiry
                            onTabChange("contact");
                          }}
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          Send Enquiry ({totalItems} items)
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            // Switch to products tab to continue shopping
                            onTabChange("products");
                          }}
                          className="w-full h-10"
                        >
                          Continue Shopping
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
