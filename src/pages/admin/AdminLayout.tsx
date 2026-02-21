import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LayoutDashboard, CalendarCheck, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/admin"); return; }

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");

      if (!roles || roles.length === 0) { navigate("/admin"); return; }
      setAuthorized(true);
      setLoading(false);
    };
    check();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (loading && !authorized) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  const links = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Appointments", path: "/admin/appointments", icon: CalendarCheck },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-60 bg-card border-r flex flex-col">
        <div className="p-4 border-b">
          <Link to="/" className="text-lg font-bold text-primary">CarePlus <span className="text-accent">Admin</span></Link>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === l.path ? "bg-secondary text-primary" : "text-muted-foreground hover:bg-muted"
              }`}
            >
              <l.icon className="h-4 w-4" /> {l.name}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-section-alt p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
