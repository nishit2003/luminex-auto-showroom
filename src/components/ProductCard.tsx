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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Eye,
  Zap,
  Star,
  TrendingUp,
  Lightbulb,
  Fan,
  Battery,
  Car,
  Zap as ZapIcon,
  Package,
  Shield,
  Truck,
  Clock,
  Info,
} from "lucide-react";
import { Product } from "@/data/products";
import { useEnquiryStore } from "@/stores/enquiryStore";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addToEnquiry = useEnquiryStore((state) => state.addItem);

  // Enhanced placeholder image system
  const getProductImage = (product: Product) => {
    // If product has a real image, use it
    if (product.image) {
      return (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      );
    }

    // Otherwise, use enhanced category-based placeholders
    const getCategoryIcon = () => {
      switch (product.category) {
        case "Head Lights":
          return <Car className="h-16 w-16 text-primary" />;
        case "Fog Lamps":
          return <Lightbulb className="h-16 w-16 text-accent" />;
        case "Spot Lights":
          return <ZapIcon className="h-16 w-16 text-yellow-500" />;
        case "Fans":
          return <Fan className="h-16 w-16 text-blue-500" />;
        case "Power & Chargers":
          return <Battery className="h-16 w-16 text-green-500" />;
        default:
          return <Zap className="h-16 w-16 text-accent" />;
      }
    };

    const getCategoryGradient = () => {
      switch (product.category) {
        case "Head Lights":
          return "from-blue-500/20 to-purple-500/20";
        case "Fog Lamps":
          return "from-yellow-500/20 to-orange-500/20";
        case "Spot Lights":
          return "from-yellow-500/20 to-red-500/20";
        case "Fans":
          return "from-blue-500/20 to-cyan-500/20";
        case "Power & Chargers":
          return "from-green-500/20 to-emerald-500/20";
        default:
          return "from-accent/20 to-primary/20";
      }
    };

    return (
      <div
        className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${getCategoryGradient()}`}
      >
        {getCategoryIcon()}
      </div>
    );
  };

  const handleAddToEnquiry = () => {
    // Add product with quantity
    for (let i = 0; i < quantity; i++) {
      addToEnquiry(product);
    }

    toast({
      title: "Added to Enquiry",
      description: `${quantity}x ${product.name} has been added to your enquiry cart.`,
    });

    // Reset quantity and close modal
    setQuantity(1);
    setIsQuickViewOpen(false);
  };

  const getProductSpecs = () => {
    const specs = [
      { label: "Product Code", value: product.code, icon: Package },
      { label: "Category", value: product.category, icon: Info },
      { label: "Quality", value: "Premium Grade", icon: Shield },
      { label: "Warranty", value: "1 Year", icon: Shield },
      { label: "Delivery", value: "2-3 Days", icon: Truck },
      { label: "Support", value: "24/7", icon: Clock },
    ];

    return specs.map((spec, index) => (
      <div
        key={index}
        className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
      >
        <spec.icon className="h-4 w-4 text-accent flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground font-medium">
            {spec.label}
          </p>
          <p className="text-sm font-semibold text-foreground">{spec.value}</p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Card className="card-product group animate-fade-in">
        <CardHeader className="pb-4">
          {/* Enhanced Product Image */}
          <div className="relative aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50">
            <div className="w-full h-full">{getProductImage(product)}</div>

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
                <div className="aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50">
                  {getProductImage(product)}
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

            {/* Quick View Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsQuickViewOpen(true)}
              className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white text-foreground shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Info className="h-4 w-4 mr-1" />
              Quick View
            </Button>
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

          {/* Enhanced Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={() => setIsQuickViewOpen(true)}
              variant="outline"
              className="flex-1 text-sm h-10 font-medium transition-all duration-300"
              size="sm"
            >
              <Info className="h-4 w-4 mr-2" />
              Details
            </Button>
            <Button
              onClick={handleAddToEnquiry}
              className="flex-1 btn-accent text-sm h-10 font-semibold transition-all duration-300"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Enquiry
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Quick View Modal */}
      <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient-primary flex items-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Package className="h-6 w-6 text-primary-foreground" />
              </div>
              {product.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50">
                {getProductImage(product)}
              </div>

              {/* Product Code */}
              <div className="text-center">
                <Badge
                  variant="outline"
                  className="text-sm font-mono bg-secondary/50 border-accent/30 text-accent font-semibold px-4 py-2"
                >
                  {product.code}
                </Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Product Information
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>
                  {product.variant && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Variant:</span>
                      <span className="font-medium">{product.variant}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tags:</span>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {product.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {getProductSpecs()}
                </div>
              </div>

              <Separator />

              {/* Add to Enquiry */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Add to Enquiry
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Label htmlFor="quantity" className="text-sm font-medium">
                      Quantity:
                    </Label>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="h-8 w-8 p-0"
                      >
                        -
                      </Button>
                      <Input
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
                        }
                        className="w-20 text-center h-8"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToEnquiry}
                    className="w-full btn-accent h-12 text-base font-semibold"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add {quantity}x to Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
