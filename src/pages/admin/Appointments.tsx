import { useState, useMemo } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getAppointments, updateAppointmentStatus, deleteAppointment, type Appointment } from "@/lib/appointments";
import { CheckCircle, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Appointments = () => {
  const { toast } = useToast();
  const [dateFilter, setDateFilter] = useState("");
  const [refresh, setRefresh] = useState(0);

  const appointments = useMemo(() => {
    const all = getAppointments();
    const filtered = dateFilter ? all.filter((a) => a.date === dateFilter) : all;
    return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter, refresh]);

  const markComplete = (id: string) => {
    updateAppointmentStatus(id, "completed");
    setRefresh((r) => r + 1);
    toast({ title: "Marked as completed" });
  };

  const remove = (id: string) => {
    deleteAppointment(id);
    setRefresh((r) => r + 1);
    toast({ title: "Appointment deleted" });
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="w-auto" />
      </div>

      {appointments.length === 0 ? (
        <p className="text-muted-foreground">No appointments found.</p>
      ) : (
        <div className="rounded-lg border bg-card overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.name}</TableCell>
                  <TableCell>{a.phone}</TableCell>
                  <TableCell>{a.service}</TableCell>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.time}</TableCell>
                  <TableCell>
                    <Badge variant={a.status === "completed" ? "default" : "secondary"}>
                      {a.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    {a.status === "pending" && (
                      <Button size="sm" variant="outline" onClick={() => markComplete(a.id)}>
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button size="sm" variant="destructive" onClick={() => remove(a.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Appointments;
