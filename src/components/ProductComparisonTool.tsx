import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  GitCompare,
  Star,
  Zap,
  Shield,
  Package,
  Info,
  Search,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { PRODUCTS, Product, getProductsByCategory } from "@/data/products";

interface ProductComparisonToolProps {
  onProductSelect?: (product: Product) => void;
}

export function ProductComparisonTool({
  onProductSelect,
}: ProductComparisonToolProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [product1, setProduct1] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const categories = [
    "Head Lights",
    "Fog Lamps",
    "Spot Lights",
    "Fans",
    "Power & Chargers",
  ];

  const categoryProducts = selectedCategory
    ? getProductsByCategory(selectedCategory)
    : [];

  const handleCompare = () => {
    if (!product1 || !product2) {
      toast({
        title: "Select Products",
        description: "Please select two products to compare.",
        variant: "destructive",
      });
      return;
    }

    if (product1.code === product2.code) {
      toast({
        title: "Same Product",
        description: "Please select two different products to compare.",
        variant: "destructive",
      });
      return;
    }

    setShowComparison(true);
    toast({
      title: "Comparison Ready",
      description: `Comparing ${product1.name} vs ${product2.name}`,
    });
  };

  const clearComparison = () => {
    setProduct1(null);
    setProduct2(null);
    setShowComparison(false);
  };

  const getComparisonValue = (
    spec1: string | undefined,
    spec2: string | undefined
  ) => {
    if (!spec1 && !spec2) return { value: "Not Specified", better: null };
    if (!spec1) return { value: spec2!, better: 2 };
    if (!spec2) return { value: spec1!, better: 1 };

    // Simple comparison logic
    const num1 = parseFloat(spec1.replace(/[^\d.]/g, ""));
    const num2 = parseFloat(spec2.replace(/[^\d.]/g, ""));

    if (!isNaN(num1) && !isNaN(num2)) {
      if (num1 > num2) return { value: `${spec1} vs ${spec2}`, better: 1 };
      if (num2 > num1) return { value: `${spec1} vs ${spec2}`, better: 2 };
    }

    return { value: `${spec1} vs ${spec2}`, better: null };
  };

  return (
    <Card className="card-feature p-6 animate-fade-in-up">
      <CardContent className="p-0">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gradient-primary mb-4 flex items-center justify-center gap-3">
            <GitCompare className="h-7 w-7 text-accent" />
            Product Comparison Tool
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare specifications, features, and pricing of our products to
            make the best choice for your needs.
          </p>
        </div>

        {!showComparison ? (
          <div className="space-y-6">
            {/* Category Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium"
                >
                  Product Category
                </Label>
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger id="category" className="h-12">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="product1"
                  className="mb-2 block text-sm font-medium"
                >
                  First Product
                </Label>
                <Select
                  value={product1?.code || ""}
                  onValueChange={(value) => {
                    const prod = categoryProducts.find((p) => p.code === value);
                    setProduct1(prod || null);
                  }}
                >
                  <SelectTrigger id="product1" className="h-12">
                    <SelectValue placeholder="Select First Product" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryProducts.map((product) => (
                      <SelectItem key={product.code} value={product.code}>
                        {product.name}{" "}
                        {product.variant && `- ${product.variant}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="product2"
                  className="mb-2 block text-sm font-medium"
                >
                  Second Product
                </Label>
                <Select
                  value={product2?.code || ""}
                  onValueChange={(value) => {
                    const prod = categoryProducts.find((p) => p.code === value);
                    setProduct2(prod || null);
                  }}
                >
                  <SelectTrigger id="product2" className="h-12">
                    <SelectValue placeholder="Select Second Product" />
                  </SelectTrigger>
                  <SelectContent>
                    {categoryProducts.map((product) => (
                      <SelectItem key={product.code} value={product.code}>
                        {product.name}{" "}
                        {product.variant && `- ${product.variant}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Compare Button */}
            <div className="text-center">
              <Button
                className="btn-accent text-lg px-10 py-4 h-14 font-bold shadow-xl hover:shadow-glow"
                onClick={handleCompare}
                disabled={!product1 || !product2}
              >
                <GitCompare className="h-5 w-5 mr-2" />
                Compare Products
              </Button>
            </div>

            {/* Quick Product Previews */}
            {(product1 || product2) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {product1 && (
                  <Card className="p-4 border-2 border-accent/30">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-foreground">
                          {product1.name}
                        </h4>
                        <Badge variant="secondary">{product1.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product1.variant}
                      </p>
                      {product1.price && (
                        <div className="text-lg font-bold text-accent">
                          ₹{product1.price.sellingPrice.toLocaleString()}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                {product2 && (
                  <Card className="p-4 border-2 border-accent/30">
                    <CardContent className="p-0">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-foreground">
                          {product2.name}
                        </h4>
                        <Badge variant="secondary">{product2.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product2.variant}
                      </p>
                      {product2.price && (
                        <div className="text-lg font-bold text-accent">
                          ₹{product2.price.sellingPrice.toLocaleString()}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Comparison Results */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-foreground">
                Product Comparison Results
              </h4>
              <Button variant="outline" onClick={clearComparison}>
                Compare Different Products
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product 1 */}
              <div className="space-y-4">
                <Card className="p-4 border-2 border-blue-500/30">
                  <CardContent className="p-0">
                    <h5 className="font-bold text-blue-600 mb-2">
                      {product1?.name}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product1?.variant}
                    </p>
                    {product1?.price && (
                      <div className="text-lg font-bold text-blue-600">
                        ₹{product1.price.sellingPrice.toLocaleString()}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Specifications */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Power:
                    </span>
                    <span className="text-sm font-medium">
                      {product1?.specifications?.power || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Voltage:
                    </span>
                    <span className="text-sm font-medium">
                      {product1?.specifications?.voltage || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Material:
                    </span>
                    <span className="text-sm font-medium">
                      {product1?.specifications?.material || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Warranty:
                    </span>
                    <span className="text-sm font-medium">
                      {product1?.specifications?.warranty || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h6 className="font-semibold text-sm mb-2">Key Features:</h6>
                  <div className="space-y-1">
                    {product1?.specifications?.features
                      ?.slice(0, 3)
                      .map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* VS Column */}
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-2">
                    VS
                  </div>
                  <div className="text-xs text-muted-foreground">Compare</div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="space-y-4">
                <Card className="p-4 border-2 border-green-500/30">
                  <CardContent className="p-0">
                    <h5 className="font-bold text-green-600 mb-2">
                      {product2?.name}
                    </h5>
                    <p className="text-sm text-muted-foreground mb-3">
                      {product2?.variant}
                    </p>
                    {product2?.price && (
                      <div className="text-lg font-bold text-green-600">
                        ₹{product2.price.sellingPrice.toLocaleString()}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Specifications */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Power:
                    </span>
                    <span className="text-sm font-medium">
                      {product2?.specifications?.power || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Voltage:
                    </span>
                    <span className="text-sm font-medium">
                      {product2?.specifications?.voltage || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Material:
                    </span>
                    <span className="text-sm font-medium">
                      {product2?.specifications?.material || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">
                      Warranty:
                    </span>
                    <span className="text-sm font-medium">
                      {product2?.specifications?.warranty || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h6 className="font-semibold text-sm mb-2">Key Features:</h6>
                  <div className="space-y-1">
                    {product2?.specifications?.features
                      ?.slice(0, 3)
                      .map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => onProductSelect && onProductSelect(product1!)}
              >
                Choose {product1?.name}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => onProductSelect && onProductSelect(product2!)}
              >
                Choose {product2?.name}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
