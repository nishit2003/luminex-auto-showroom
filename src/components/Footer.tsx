import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  MessageCircle,
  Sparkles,
  Shield,
  Truck,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-hover to-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Enhanced Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="bg-accent p-3 rounded-xl shadow-lg">
                  <div className="text-accent-foreground font-bold text-lg">
                    L
                  </div>
                  <div className="absolute -top-1 -right-1">
                    <Sparkles className="h-3 w-3 text-primary-foreground animate-pulse" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-accent">
                  Luminex AutoTech
                </h3>
                <p className="text-sm text-primary-foreground/80 font-medium">
                  Automotive Lighting Solutions
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Your trusted partner for premium automotive lighting solutions.
              Illuminating the road ahead with quality, innovation, and
              reliability.
            </p>

            {/* Company Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
                <Shield className="h-3 w-3 text-accent" />
                <span>ISO Certified Quality</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
                <Truck className="h-3 w-3 text-accent" />
                <span>Nationwide Delivery</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-accent">
              Product Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>Head Lights</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>Fog Lamps</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>Spot Lights</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>Fans</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-all duration-200 flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span>Power & Chargers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-accent">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors duration-200">
                  <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  gsnh15@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors duration-200">
                  <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
                <span className="text-primary-foreground/80 text-sm leading-relaxed">
                  +91 XXXXX XXXXX
                </span>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-colors duration-200">
                  <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                </div>
                <span className="text-primary-foreground/80 text-xs leading-relaxed">
                  Plot No. E-38, Industrial Sector A-7, Part-1,
                  <br />
                  Trans Delhi Signature City, Loni,
                  <br />
                  Ghaziabad, Uttar Pradesh 201103, India
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-accent">Quick Actions</h4>
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-primary border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-200 h-11 rounded-xl"
              >
                <Download className="h-4 w-4 mr-3" />
                Download Catalogue
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start text-primary border-primary-foreground/30 hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-200 h-11 rounded-xl"
              >
                <MessageCircle className="h-4 w-4 mr-3" />
                WhatsApp Us
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Need immediate assistance? Contact us via WhatsApp for quick
                responses and real-time support.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-primary-foreground/80">
          <p className="font-medium">
            © {currentYear} Luminex AutoTech. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors duration-200 font-medium"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
