import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart, Eye, Zap } from "lucide-react";
import { Product } from "@/data/products";
import { useEnquiryStore } from "@/stores/enquiryStore";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const addToEnquiry = useEnquiryStore(state => state.addItem);
  
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
    <Card className="card-product animate-fade-in">
      <CardHeader className="pb-3">
        {/* Product Image */}
        <div className="relative aspect-square bg-gradient-card rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
            <span className="text-4xl opacity-60">{getPlaceholderImage(product)}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* View Image Button */}
          <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="sm"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Eye className="h-3 w-3" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{product.name}</DialogTitle>
              </DialogHeader>
              <div className="aspect-square bg-gradient-card rounded-lg flex items-center justify-center">
                <span className="text-8xl opacity-60">{getPlaceholderImage(product)}</span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Product Code */}
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="text-xs font-mono">
            {product.code}
          </Badge>
          <div className="flex items-center gap-1 text-accent">
            <Zap className="h-3 w-3" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Product Name */}
        <h3 className="font-semibold text-sm leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Variant */}
        {product.variant && (
          <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
            {product.variant}
          </p>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4 min-h-[1.5rem]">
          {product.tags.slice(0, 3).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs px-2 py-0 h-5"
            >
              {tag}
            </Badge>
          ))}
          {product.tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-0 h-5">
              +{product.tags.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Action Button */}
        <Button 
          onClick={handleAddToEnquiry}
          className="w-full btn-accent text-xs h-8"
          size="sm"
        >
          <ShoppingCart className="h-3 w-3 mr-1" />
          Add to Enquiry
        </Button>
      </CardContent>
    </Card>
  );
}