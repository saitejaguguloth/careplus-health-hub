import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Activity, Baby, Syringe, HeartPulse, Shield } from "lucide-react";
import { SERVICES } from "@/lib/appointments";

const iconMap: Record<string, React.ElementType> = { Stethoscope, Activity, Baby, Syringe, HeartPulse, Shield };

const Services = () => (
  <main className="py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Services</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        We offer a wide range of medical services to keep you and your family healthy.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s) => {
          const Icon = iconMap[s.icon] || Stethoscope;
          return (
            <Card key={s.name} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{s.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                {s.fee && (
                  <p className="text-primary font-semibold">{s.fee}</p>
                )}
                <Button asChild className="mt-auto w-full">
                  <Link to={`/book-appointment?service=${encodeURIComponent(s.name)}`}>Book Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  </main>
);

export default Services;
