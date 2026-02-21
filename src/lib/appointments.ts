export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: "pending" | "completed";
  createdAt: string;
}

const STORAGE_KEY = "careplus_appointments";

export const getAppointments = (): Appointment[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const addAppointment = (appt: Omit<Appointment, "id" | "status" | "createdAt">): Appointment => {
  const appointments = getAppointments();
  const newAppt: Appointment = {
    ...appt,
    id: crypto.randomUUID(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  appointments.unshift(newAppt);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  return newAppt;
};

export const updateAppointmentStatus = (id: string, status: "pending" | "completed") => {
  const appointments = getAppointments();
  const idx = appointments.findIndex((a) => a.id === id);
  if (idx !== -1) {
    appointments[idx].status = status;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
  }
};

export const deleteAppointment = (id: string) => {
  const appointments = getAppointments().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
};

export const SERVICES = [
  { name: "General Consultation", description: "Comprehensive health check-up and medical consultation for all ages.", fee: "₹500", icon: "Stethoscope" },
  { name: "Diabetes Management", description: "Expert monitoring, medication management, and lifestyle guidance for diabetes.", fee: "₹700", icon: "Activity" },
  { name: "Child Care", description: "Pediatric care including growth monitoring, vaccinations, and illness treatment.", fee: "₹600", icon: "Baby" },
  { name: "Vaccinations", description: "Complete immunization services for children and adults.", fee: "₹400", icon: "Syringe" },
  { name: "Blood Pressure Check", description: "Regular BP monitoring with lifestyle and medication advice.", fee: "₹300", icon: "HeartPulse" },
  { name: "Skin & Allergy Treatment", description: "Diagnosis and treatment for skin conditions and allergies.", fee: "₹600", icon: "Shield" },
];
