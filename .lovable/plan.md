

# CarePlus Family Clinic Website

## Overview
A professional, mobile-first clinic website with a clean medical aesthetic (white + soft blue palette), featuring 5 public pages, an admin panel with Supabase authentication, and local appointment storage as a starting point.

---

## Design System
- **Colors**: Primary blue (#2563EB), light blue backgrounds (#DBEAFE), teal accents (#14B8A6), slate text tones
- **Typography**: Inter font, clean professional hierarchy
- **Style**: Rounded corners (8px), minimal soft shadows, generous spacing (60px sections), large CTAs
- **Responsive**: Mobile-first, fully responsive across all breakpoints

---

## Pages & Features

### 1. Home Page
- **Hero**: Clinic name, tagline ("Trusted Family Healthcare in Madhapur"), doctor image placeholder, "Book Appointment" and "Call Now" buttons, clinic timing
- **Trust Bar**: 10+ Years, 5000+ Patients, MBBS/MD Certified, 4.8★ Rating
- **Services Preview**: 4–6 cards (General Consultation, Diabetes, Child Care, Vaccinations, BP Check) with icons
- **Why Choose Us**: 4 feature cards (Experienced Doctor, Affordable Fees, Quick Appointment, Friendly Staff)
- **Testimonials**: 3 patient reviews (dummy data)
- **CTA Banner**: "Book Your Appointment Today" with prominent button

### 2. About Doctor Page
- Doctor profile: Dr. Rajesh Kumar, qualifications, bio, specializations, clinic timing
- Book Appointment button

### 3. Services Page
- Grid of all services with name, description, optional fee, and individual Book Appointment buttons

### 4. Book Appointment Page
- Form: Full Name, Phone, Email (optional), Service dropdown, Date picker, Time input, Message textarea
- On submit: success toast, form reset, WhatsApp redirect (placeholder number — you'll update later)
- Appointments stored in localStorage for now (backend can be added later)
- Loading spinner during submission, email validation

### 5. Contact Page
- Clinic address, Google Maps embed placeholder, clickable phone/email, clinic timing, Call Now button

---

## Navigation & Layout
- **Sticky navbar**: Home, About, Services, Book Appointment (highlighted), Contact
- **Footer**: Address, phone, email, social links, copyright
- Smooth scrolling between sections

---

## Admin Panel (/admin)
- **Login**: Supabase Auth (email/password) with admin role protection
- **Sidebar layout**: Dashboard, Appointments, Logout
- **Dashboard**: Total appointments count, today's appointments count
- **Appointments**: Table (Name, Phone, Service, Date, Time, Status), mark complete/delete, filter by date, sort newest first
- Data sourced from localStorage initially

---

## Backend (Supabase — Auth Only for Now)
- Supabase Auth for admin login
- User roles table to protect admin routes
- Appointment storage in localStorage (can migrate to Supabase database later)

---

## Bonus
- Subtle scroll animations
- SEO meta tags
- Favicon
- Loading spinners on form actions

