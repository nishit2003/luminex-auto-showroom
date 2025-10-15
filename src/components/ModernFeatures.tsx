import { Card, CardContent } from "@/components/ui/card";
import { Shield, Truck, Clock } from "lucide-react";

export function ModernFeatures() {
  return (
    <section className="py-16 bg-secondary/20 rounded-3xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
            Why Choose Luminex AutoTech?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive automotive solutions with unmatched quality
            and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="card-feature text-center p-6">
            <CardContent className="p-0">
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Certified automotive lighting solutions meeting international
                standards
              </p>
            </CardContent>
          </Card>

          <Card className="card-feature text-center p-6">
            <CardContent className="p-0">
              <div className="bg-gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Quick nationwide shipping with real-time tracking and support
              </p>
            </CardContent>
          </Card>

          <Card className="card-feature text-center p-6">
            <CardContent className="p-0">
              <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                24/7 Support
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock technical assistance and customer service
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
