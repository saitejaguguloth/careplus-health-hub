import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, GraduationCap, Clock, CheckCircle } from "lucide-react";

const specializations = [
  "General & Family Medicine",
  "Diabetes Management",
  "Pediatric Care",
  "Preventive Health Check-ups",
  "Hypertension Management",
  "Skin & Allergy Treatment",
];

const About = () => (
  <main className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Doctor image placeholder */}
        <div className="w-full md:w-1/3">
          <div className="w-full aspect-[3/4] rounded-2xl bg-secondary flex items-center justify-center">
            <Stethoscope className="h-24 w-24 text-primary/30" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-1">Meet Your Doctor</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">Dr. Rajesh Kumar</h1>
          <p className="text-muted-foreground mb-6">MBBS, MD (General Medicine)</p>

          <Card className="mb-6">
            <CardContent className="p-6 flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold">10+ Years of Experience</p>
                <p className="text-sm text-muted-foreground">Serving the Madhapur community with dedication and compassion.</p>
              </div>
            </CardContent>
          </Card>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Dr. Rajesh Kumar is a highly qualified and experienced general physician dedicated to providing comprehensive healthcare to individuals and families. With over a decade of experience, he believes in a patient-first approach, combining modern medicine with compassionate care. His expertise covers a wide range of medical conditions, from routine check-ups to managing chronic diseases.
          </p>

          <h3 className="font-semibold text-lg mb-3">Specializations</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {specializations.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" /> {s}
              </li>
            ))}
          </ul>

          <Card className="mb-6">
            <CardContent className="p-6 flex items-center gap-4">
              <Clock className="h-8 w-8 text-primary shrink-0" />
              <div>
                <p className="font-semibold">Clinic Timing</p>
                <p className="text-sm text-muted-foreground">Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sun: 10:00 AM – 2:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Button size="lg" asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  </main>
);

export default About;
