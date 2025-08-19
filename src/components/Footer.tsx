import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-lg">
                <div className="text-accent-foreground font-bold text-sm">L</div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Luminex AutoTech</h3>
                <p className="text-xs text-primary-foreground/80">Automotive Lighting Solutions</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Your trusted partner for premium automotive lighting solutions. 
              Illuminating the road ahead with quality, innovation, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Product Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Head Lights</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Fog Lamps</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Spot Lights</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Fans</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Power & Chargers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">gsnh15@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-xs leading-relaxed">
                  Plot No. E-38, Industrial Sector A-7, Part-1,<br />
                  Trans Delhi Signature City, Loni,<br />
                  Ghaziabad, Uttar Pradesh 201103, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-accent">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start text-primary border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Download className="h-4 w-4 mr-2" />
                Download Catalogue
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start text-primary border-primary-foreground/20 hover:bg-primary-foreground/10">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
            
            <div className="pt-2">
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Need immediate assistance? Contact us via WhatsApp for quick responses 
                and real-time support.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p>© {currentYear} Luminex AutoTech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}