import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Stethoscope, Activity, Baby, Syringe, HeartPulse, Shield,
  Phone, Clock, Star, Users, Award, CalendarCheck,
  UserCheck, IndianRupee, Smile, Quote,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = { Stethoscope, Activity, Baby, Syringe, HeartPulse, Shield };

const services = [
  { name: "General Consultation", icon: "Stethoscope" },
  { name: "Diabetes Management", icon: "Activity" },
  { name: "Child Care", icon: "Baby" },
  { name: "Vaccinations", icon: "Syringe" },
  { name: "Blood Pressure Check", icon: "HeartPulse" },
  { name: "Skin & Allergy", icon: "Shield" },
];

const trustItems = [
  { icon: Clock, label: "10+ Years", sub: "Experience" },
  { icon: Users, label: "5000+", sub: "Happy Patients" },
  { icon: Award, label: "MBBS, MD", sub: "Certified" },
  { icon: Star, label: "4.8 ★", sub: "Google Rating" },
];

const whyUs = [
  { icon: UserCheck, title: "Experienced Doctor", desc: "Qualified MBBS, MD doctor with 10+ years experience." },
  { icon: IndianRupee, title: "Affordable Fees", desc: "Quality healthcare at reasonable and transparent pricing." },
  { icon: CalendarCheck, title: "Quick Appointment", desc: "Minimal wait time with easy online booking." },
  { icon: Smile, title: "Friendly Staff", desc: "Caring and supportive team for a comfortable visit." },
];

const testimonials = [
  { name: "Priya Sharma", text: "Dr. Rajesh is an excellent doctor. Very thorough and caring. My family trusts him completely.", rating: 5 },
  { name: "Ramesh Reddy", text: "The clinic is clean and well maintained. Appointments are always on time. Highly recommended!", rating: 5 },
  { name: "Anita Desai", text: "Great experience with child vaccinations. The staff is very friendly and made my daughter comfortable.", rating: 4 },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Welcome to CarePlus</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Trusted Family Healthcare in <span className="text-primary">Madhapur</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg mx-auto md:mx-0">
              Comprehensive, compassionate medical care for you and your family. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-4">
              <Button size="lg" asChild><Link to="/book-appointment">Book Appointment</Link></Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+919876543210"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              <Clock className="h-4 w-4" /> Mon – Sat: 9:00 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl bg-primary/10 flex items-end justify-center overflow-hidden">
              <Stethoscope className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <t.icon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">{t.label}</span>
              <span className="text-sm text-muted-foreground">{t.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-md mx-auto">Comprehensive medical care for your entire family.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Stethoscope;
              return (
                <Card key={s.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{s.name}</h3>
                    <Button variant="link" asChild><Link to="/services">Learn More</Link></Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <Card key={w.title} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <w.icon className="h-10 w-10 text-accent" />
                  <h3 className="font-semibold text-lg">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{t.name}</span>
                    <span className="text-primary text-sm">{"★".repeat(t.rating)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment Today</h2>
          <p className="text-lg opacity-90 mb-8 max-w-md mx-auto">
            Take the first step towards better health for you and your family.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
