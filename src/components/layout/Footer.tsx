import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            Care<span className="text-accent">Plus</span> Family Clinic
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Trusted family healthcare in Madhapur. Quality medical care with a personal touch.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link to="/" className="hover:opacity-100">Home</Link>
            <Link to="/about" className="hover:opacity-100">About Doctor</Link>
            <Link to="/services" className="hover:opacity-100">Services</Link>
            <Link to="/book-appointment" className="hover:opacity-100">Book Appointment</Link>
            <Link to="/contact" className="hover:opacity-100">Contact</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm opacity-80">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>123 Health Avenue, Madhapur, Hyderabad - 500081</span>
            </div>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-100">
              <Phone className="h-4 w-4 shrink-0" /> +91 98765 43210
            </a>
            <a href="mailto:info@careplusClinic.com" className="flex items-center gap-2 hover:opacity-100">
              <Mail className="h-4 w-4 shrink-0" /> info@careplusclinic.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} CarePlus Family Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
