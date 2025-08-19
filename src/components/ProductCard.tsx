import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart, Eye, Zap, Star, TrendingUp } from "lucide-react";
import { Product } from "@/data/products";
import { useEnquiryStore } from "@/stores/enquiryStore";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const addToEnquiry = useEnquiryStore((state) => state.addItem);

  // Generate placeholder image based on product type
  const getPlaceholderImage = (product: Product) => {
    if (product.category === "Head Lights") return "🚗";
    if (product.category === "Fog Lamps") return "💡";
    if (product.category === "Spot Lights") return "🔦";
    if (product.category === "Fans") return "🔧";
    if (product.category === "Power & Chargers") return "🔌";
    return "⚡";
  };

  const handleAddToEnquiry = () => {
    addToEnquiry(product);
    toast({
      title: "Added to Enquiry",
      description: `${product.name} has been added to your enquiry cart.`,
    });
  };

  return (
    <Card className="card-product group animate-fade-in">
      <CardHeader className="pb-4">
        {/* Enhanced Product Image */}
        <div className="relative aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/30 to-muted/50">
            <span className="text-5xl opacity-70 group-hover:scale-110 transition-transform duration-300">
              {getPlaceholderImage(product)}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Enhanced View Image Button */}
          <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-foreground shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gradient-primary">
                  {product.name}
                </DialogTitle>
              </DialogHeader>
              <div className="aspect-square bg-gradient-card rounded-2xl flex items-center justify-center border border-border/50">
                <span className="text-9xl opacity-60">
                  {getPlaceholderImage(product)}
                </span>
              </div>
            </DialogContent>
          </Dialog>

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-white/90 text-foreground font-medium px-3 py-1 rounded-full text-xs"
            >
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Enhanced Product Code */}
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className="text-xs font-mono bg-secondary/50 border-accent/30 text-accent font-semibold px-3 py-1"
          >
            {product.code}
          </Badge>
          <div className="flex items-center gap-1 text-accent">
            <Zap className="h-4 w-4 animate-pulse" />
            <span className="text-xs font-medium">Premium</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Enhanced Product Name */}
        <div>
          <h3 className="font-bold text-base leading-tight mb-2 line-clamp-2 text-foreground group-hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>

          {/* Variant */}
          {product.variant && (
            <p className="text-sm text-muted-foreground line-clamp-1 font-medium">
              {product.variant}
            </p>
          )}
        </div>

        {/* Enhanced Tags */}
        <div className="flex flex-wrap gap-2 min-h-[2rem]">
          {product.tags.slice(0, 3).map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-3 py-1 h-6 bg-secondary/70 hover:bg-secondary text-foreground font-medium transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs px-3 py-1 h-6 border-accent/30 text-accent hover:bg-accent/10 transition-colors duration-200"
            >
              +{product.tags.length - 3}
            </Badge>
          )}
        </div>

        {/* Product Features */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current" />
            <span>High Quality</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-green-500" />
            <span>Best Seller</span>
          </div>
        </div>

        {/* Enhanced Action Button */}
        <Button
          onClick={handleAddToEnquiry}
          className="w-full btn-accent text-sm h-10 font-semibold transition-all duration-300"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Enquiry
        </Button>
      </CardContent>
    </Card>
  );
}
