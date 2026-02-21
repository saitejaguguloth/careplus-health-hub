import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Book Appointment", path: "/book-appointment" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="text-xl font-bold text-primary">
          Care<span className="text-accent">Plus</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${l.path === "/book-appointment" ? "!bg-primary !text-primary-foreground" : ""}`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary">
          <Phone className="h-4 w-4" /> +91 98765 43210
        </a>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t bg-card px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 rounded-lg text-sm font-medium ${
                location.pathname === l.path ? "bg-secondary text-primary" : "text-muted-foreground"
              }`}
            >
              {l.name}
            </Link>
          ))}
          <a href="tel:+919876543210" className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" /> +91 98765 43210
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
