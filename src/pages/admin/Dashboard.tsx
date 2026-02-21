import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck, Users } from "lucide-react";
import { getAppointments } from "@/lib/appointments";
import { format } from "date-fns";

const Dashboard = () => {
  const appointments = useMemo(() => getAppointments(), []);
  const today = format(new Date(), "yyyy-MM-dd");
  const todayCount = appointments.filter((a) => a.date === today).length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Appointments</CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{appointments.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Appointments</CardTitle>
            <CalendarCheck className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{todayCount}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
