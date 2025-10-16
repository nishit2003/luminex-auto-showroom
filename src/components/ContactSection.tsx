import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Shield,
  Truck,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email subject and body
    const subject = `Product Enquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:gsnh15@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description:
        "Your default email client should open with the enquiry details.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact-section"
      className="py-20 bg-gradient-to-br from-secondary/30 via-background to-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="h-4 w-4" />
              Get in Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Ready to Illuminate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to illuminate your vehicle? Contact us for quotes, technical
              support, or partnership opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <Card className="card-feature">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="bg-gradient-primary p-3 rounded-xl shadow-lg">
                      <Mail className="h-5 w-5 text-primary-foreground" />
                    </div>
                    Contact Information
                  </CardTitle>
                  <CardDescription className="text-base">
                    Reach out to our team for any enquiries or support.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                    <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">gsnh15@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                    <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+91 9643294497</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-200">
                    <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Plot No. E-38, Industrial Sector A-7, Part-1
                        <br />
                        Trans Delhi Signature City, Loni
                        <br />
                        Ghaziabad, Uttar Pradesh 201103, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-feature bg-gradient-primary text-primary-foreground">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Why Choose Grosan?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">
                        Premium quality automotive lighting solutions
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">
                        Wide range of products for all vehicle types
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">
                        Competitive pricing and bulk order discounts
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">
                        Fast delivery and reliable customer service
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-primary-foreground/90">
                        Technical support and installation guidance
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Contact Form */}
            <Card className="card-feature">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="h-12 rounded-xl border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="h-12 rounded-xl border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 rounded-xl border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="company"
                        className="text-sm font-semibold"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="h-12 rounded-xl border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements, specific products you're interested in, or any questions you have..."
                      rows={5}
                      className="rounded-xl border-border/50 focus:border-accent/50 focus:ring-accent/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-accent h-14 text-base font-bold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
