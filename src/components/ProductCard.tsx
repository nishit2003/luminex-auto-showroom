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

    // Enhanced category-based placeholders with automotive styling
    const getCategoryIcon = () => {
      switch (product.category) {
        case "Head Lights":
          return (
            <div className="relative">
              <Car className="h-16 w-16 text-primary" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
          );
        case "Fog Lamps":
          return (
            <div className="relative">
              <Lightbulb className="h-16 w-16 text-accent" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          );
        case "Spot Lights":
          return (
            <div className="relative">
              <ZapIcon className="h-16 w-16 text-yellow-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            </div>
          );
        case "Fans":
          return (
            <div className="relative">
              <Fan
                className="h-16 w-16 text-blue-500 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          );
        case "Power & Chargers":
          return (
            <div className="relative">
              <Battery className="h-16 w-16 text-green-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          );
        default:
          return <Zap className="h-16 w-16 text-accent" />;
      }
    };

    const getCategoryGradient = () => {
      switch (product.category) {
        case "Head Lights":
          return "from-blue-500/30 via-purple-500/20 to-indigo-500/30";
        case "Fog Lamps":
          return "from-yellow-500/30 via-orange-500/20 to-amber-500/30";
        case "Spot Lights":
          return "from-yellow-500/30 via-red-500/20 to-orange-500/30";
        case "Fans":
          return "from-blue-500/30 via-cyan-500/20 to-sky-500/30";
        case "Power & Chargers":
          return "from-green-500/30 via-emerald-500/20 to-teal-500/30";
        default:
          return "from-accent/30 via-primary/20 to-accent/30";
      }
    };

    const getCategoryPattern = () => {
      switch (product.category) {
        case "Head Lights":
          return "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)";
        case "Fog Lamps":
          return "radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)";
        case "Spot Lights":
          return "radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)";
        case "Fans":
          return "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)";
        case "Power & Chargers":
          return "radial-gradient(circle at 35% 35%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 65% 65%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)";
        default:
          return "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)";
      }
    };

    return (
      <div
        className="w-full h-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${getCategoryGradient()
            .replace("from-", "")
            .replace("via-", "")
            .replace("to-", "")
            .replace("/30", "")
            .replace("/20", "")
            .replace(" ", ", ")})`,
        }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{ background: getCategoryPattern() }}
        ></div>

        {/* Icon */}
        <div className="relative z-10">{getCategoryIcon()}</div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
      ...(product.subcategory
        ? [{ label: "Subcategory", value: product.subcategory, icon: Info }]
        : []),
      ...(product.specifications?.power
        ? [{ label: "Power", value: product.specifications.power, icon: Zap }]
        : []),
      ...(product.specifications?.voltage
        ? [
            {
              label: "Voltage",
              value: product.specifications.voltage,
              icon: Battery,
            },
          ]
        : []),
      ...(product.specifications?.material
        ? [
            {
              label: "Material",
              value: product.specifications.material,
              icon: Package,
            },
          ]
        : []),
      ...(product.specifications?.dimensions
        ? [
            {
              label: "Dimensions",
              value: product.specifications.dimensions,
              icon: Info,
            },
          ]
        : []),
      ...(product.specifications?.weight
        ? [
            {
              label: "Weight",
              value: product.specifications.weight,
              icon: Package,
            },
          ]
        : []),
      ...(product.specifications?.warranty
        ? [
            {
              label: "Warranty",
              value: product.specifications.warranty,
              icon: Shield,
            },
          ]
        : []),
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
      <Card className="card-product group animate-fade-in hover:shadow-2xl transition-all duration-500">
        <CardHeader className="pb-4">
          {/* Enhanced Product Image with Automotive Styling */}
          <div className="relative aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50 group-hover:border-accent/50 transition-all duration-500">
            <div className="w-full h-full">{getProductImage(product)}</div>

            {/* Enhanced View Image Button */}
            <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 hover:bg-white text-foreground shadow-xl hover:shadow-2xl transform hover:scale-110 backdrop-blur-sm border border-white/20"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-gradient-primary flex items-center gap-3">
                    <div className="bg-gradient-primary p-2 rounded-lg">
                      <Package className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {product.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="aspect-square bg-gradient-card rounded-2xl overflow-hidden border border-border/50">
                  {getProductImage(product)}
                </div>
              </DialogContent>
            </Dialog>

            {/* Enhanced Category Badge */}
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                className="bg-white/95 text-foreground font-semibold px-4 py-2 rounded-full text-xs backdrop-blur-sm border border-white/20 shadow-lg"
              >
                {product.category}
              </Badge>
            </div>

            {/* Enhanced Quick View Button */}
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsQuickViewOpen(true)}
              className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 hover:bg-white text-foreground shadow-xl hover:shadow-2xl transform hover:scale-110 backdrop-blur-sm border border-white/20"
            >
              <Info className="h-4 w-4 mr-1" />
              Quick View
            </Button>

            {/* Premium Badge for Head Lights */}
            {product.category === "Head Lights" && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-gradient-to-r from-accent to-blue-500 text-white font-bold px-3 py-1 rounded-full text-xs animate-pulse">
                  Premium
                </Badge>
              </div>
            )}
          </div>

          {/* Enhanced Product Code */}
          <div className="flex items-center justify-between mt-4">
            <Badge
              variant="outline"
              className="text-xs font-mono bg-gradient-to-r from-secondary/50 to-accent/10 border-accent/40 text-accent font-bold px-4 py-2 rounded-xl"
            >
              {product.code}
            </Badge>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-accent">
                <Zap className="h-4 w-4 animate-pulse" />
                <span className="text-xs font-bold">Premium</span>
              </div>
              {product.category === "Head Lights" && (
                <div className="flex items-center gap-1 text-blue-500">
                  <Car className="h-4 w-4" />
                  <span className="text-xs font-bold">LED</span>
                </div>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0 space-y-5">
          {/* Enhanced Product Name */}
          <div>
            <h3 className="font-bold text-lg leading-tight mb-3 line-clamp-2 text-foreground group-hover:text-accent transition-colors duration-300">
              {product.name}
            </h3>

            {/* Variant */}
            {product.variant && (
              <p className="text-sm text-muted-foreground line-clamp-1 font-semibold bg-secondary/30 px-3 py-1 rounded-lg">
                {product.variant}
              </p>
            )}
          </div>

          {/* Enhanced Tags with Automotive Styling */}
          <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
            {product.tags.slice(0, 3).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs px-4 py-2 h-7 bg-gradient-to-r from-secondary/80 to-accent/10 hover:from-accent/20 hover:to-accent/30 text-foreground font-semibold transition-all duration-300 hover:scale-105 border border-accent/20"
              >
                {tag}
              </Badge>
            ))}
            {product.tags.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs px-4 py-2 h-7 border-2 border-accent/40 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105 font-bold"
              >
                +{product.tags.length - 3} more
              </Badge>
            )}
          </div>

          {/* Pricing Information */}
          {product.price && (
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 border border-green-200/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                      ₹{product.price.sellingPrice.toLocaleString()}
                    </span>
                    {product.price.mrp > product.price.sellingPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.price.mrp.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {product.price.mrp > product.price.sellingPrice && (
                    <div className="text-xs text-green-600 font-semibold">
                      Save ₹
                      {(
                        product.price.mrp - product.price.sellingPrice
                      ).toLocaleString()}
                    </div>
                  )}
                </div>
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-foreground">
                      {product.rating}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Enhanced Product Features */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {product.isBestSeller && (
              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg">
                <TrendingUp className="h-3 w-3 text-yellow-500" />
                <span className="font-semibold text-foreground">
                  Best Seller
                </span>
              </div>
            )}
            {product.isPopular && (
              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                <Star className="h-3 w-3 text-blue-500 fill-current" />
                <span className="font-semibold text-foreground">Popular</span>
              </div>
            )}
            {product.isNew && (
              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg">
                <Zap className="h-3 w-3 text-green-500" />
                <span className="font-semibold text-foreground">New</span>
              </div>
            )}
            {product.specifications?.warranty && (
              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
                <Shield className="h-3 w-3 text-purple-500" />
                <span className="font-semibold text-foreground">
                  {product.specifications.warranty}
                </span>
              </div>
            )}
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => setIsQuickViewOpen(true)}
              variant="outline"
              className="flex-1 text-sm h-12 font-semibold transition-all duration-300 border-2 border-accent/30 hover:border-accent/60 hover:bg-accent/10 hover:scale-105 shadow-lg hover:shadow-xl"
              size="sm"
            >
              <Info className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button
              onClick={handleAddToEnquiry}
              className="flex-1 btn-accent text-sm h-12 font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-glow"
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
              {/* Pricing Information */}
              {product.price && (
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-200/50">
                  <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500" />
                    Pricing Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        Selling Price:
                      </span>
                      <span className="text-2xl font-bold text-green-600">
                        ₹{product.price.sellingPrice.toLocaleString()}
                      </span>
                    </div>
                    {product.price.mrp > product.price.sellingPrice && (
                      <>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">MRP:</span>
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{product.price.mrp.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">
                            You Save:
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            ₹
                            {(
                              product.price.mrp - product.price.sellingPrice
                            ).toLocaleString()}
                          </span>
                        </div>
                      </>
                    )}
                    {product.rating && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">
                            {product.rating}/5
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

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
                  {product.subcategory && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Subcategory:
                      </span>
                      <span className="font-medium">{product.subcategory}</span>
                    </div>
                  )}
                  {product.variant && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Variant:</span>
                      <span className="font-medium">{product.variant}</span>
                    </div>
                  )}
                  {product.description && (
                    <div className="mt-3">
                      <span className="text-muted-foreground block mb-2">
                        Description:
                      </span>
                      <p className="text-sm text-foreground leading-relaxed">
                        {product.description}
                      </p>
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

              {/* Features */}
              {product.specifications?.features &&
                product.specifications.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {product.specifications.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-secondary/30 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-foreground font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Compatibility */}
              {product.compatibility && product.compatibility.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Vehicle Compatibility
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.compatibility.map((vehicle, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {vehicle}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Separator />

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Technical Specifications
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
