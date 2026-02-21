import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <main className="py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Contact Us</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        We're here to help. Reach out to us for appointments or any inquiries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Clinic Address</h3>
                <p className="text-sm text-muted-foreground">123 Health Avenue, Madhapur, Hyderabad – 500081</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+919876543210" className="text-sm text-primary hover:underline">+91 98765 43210</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:info@careplusclinic.com" className="text-sm text-primary hover:underline">info@careplusclinic.com</a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Clinic Timing</h3>
                <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sun: 10:00 AM – 2:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          </Button>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden bg-muted h-80 md:h-full min-h-[320px]">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3875!3d17.4482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUzLjUiTiA3OMKwMjMnMTUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Contact;
