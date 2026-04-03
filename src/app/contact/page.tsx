"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const ROOM_TYPES   = ["Living Room", "Bedroom", "Pooja Room", "Kitchen", "Office", "Lobby/Reception", "Other"];
const MANDIR_TYPES = ["Corian Mandir", "Wooden Mandir", "Marble Mandir", "Custom Design", "Not Sure Yet"];
const BUDGETS      = ["Under ₹10,000", "₹10,000–₹25,000", "₹25,000–₹50,000", "₹50,000–₹1,00,000", "Above ₹1,00,000"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [form, setForm] = useState({
    name:      "",
    phone:     "",
    city:      "",
    roomType:  "",
    mandirType:"",
    budget:    "",
    message:   "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Build formatted message from form data
    const message = `Hello! I'm interested in a mandir from Vaishno Temple.

📋 *Here are my details:*
Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
Room Type: ${form.roomType || "Not specified"}
Mandir Type: ${form.mandirType || "Not specified"}
Budget: ${form.budget || "Not specified"}
Requirements: ${form.message || "None"}`;

    // URL encode the message and open WhatsApp
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918826858845?text=${encodedMessage}`, "_blank");

    // Show success message after a short delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-12 bg-[#fdfaf5] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#f97d08]/8 blur-[70px] rounded-full pointer-events-none" />
        <div className="section-padding container-site relative z-10">
          <nav className="font-body text-xs text-[#8a7060] mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#f97d08] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1a0e00]">Contact</span>
          </nav>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-[#f97d08] mb-4">Free Consultation</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-[#1a0e00] leading-tight mb-4">
              Get Your Free Design Quote
            </h1>
            <p className="font-body text-base text-[#8a7060] leading-relaxed">
              Fill in the form and our team will reach out within 2 hours. Free home visit, 3D design preview, and no-pressure consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="section-padding container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Left: Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#f97d08] mb-5">
                  Get in Touch
                </p>
                <div className="space-y-6">
                  {[
                    { icon: "📞", label: "Phone / WhatsApp", value: "+91-8826858845", href: "tel:+918826858845" },
                    { icon: "📍", label: "Showroom",          value: "Ground Floor, Shop No.4, Plot No. 12, Block A-1, Whs Kirti Nagar Industrial Area, West Delhi-110015", href: "#" },
                    { icon: "🕐", label: "Hours",             value: "Mon–Sat, 10am – 7pm IST", href: undefined },
                  ].map((c) => (
                    <div key={c.label} className="flex gap-4 items-start">
                      <span className="text-xl flex-shrink-0">{c.icon}</span>
                      <div>
                        <p className="font-body text-[10px] uppercase tracking-wider text-[#8a7060] mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="font-body text-sm text-[#1a0e00] hover:text-[#f97d08] transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <p className="font-body text-sm text-[#1a0e00]">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="http://wa.me/918826858845?text=Hi%2C%20I%20am%20interested%20in%20a%20mandir%20from%20Vaishno%20Temple"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1dbb58] text-white font-body text-sm font-medium px-5 py-3.5 rounded-sm transition-colors duration-300"
              >
                <span className="text-xl">💬</span>
                Chat on WhatsApp — Fast Reply
              </a>

              {/* Trust points */}
              <div className="border-t border-stone-100 pt-8 space-y-3">
                {["No advance payment required", "Free home visit & measurement", "3D design before confirmation", "Pan-India delivery & installation"].map((t) => (
                  <div key={t} className="flex gap-2 items-center">
                    <span className="text-[#f97d08] text-sm">✦</span>
                    <p className="font-body text-sm text-[#4a3520]">{t}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#f0fdf4] border border-green-200 rounded-sm p-12 text-center">
                  <span className="text-5xl block mb-4">🙏</span>
                  <h2 className="font-display text-3xl font-semibold text-[#1a0e00] mb-3">
                    Jai Mata Di! We&apos;ll be in touch.
                  </h2>
                  <p className="font-body text-base text-[#4a3520] mb-6">
                    Thank you for reaching out. Our team will call you within <strong>2 hours</strong>.
                  </p>
                  <Button href="/" variant="outline">Back to Home</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#fdfaf5] border border-stone-100 rounded-sm p-8 md:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="Your Name *" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Ramesh Sharma" required />
                    <FormField label="Phone Number *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                    <FormField label="Your City *" name="city" type="text" value={form.city} onChange={handleChange} placeholder="Delhi, Mumbai, Bangalore…" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <SelectField label="Room Type" name="roomType" value={form.roomType} onChange={handleChange} options={ROOM_TYPES} />
                    <SelectField label="Mandir Type" name="mandirType" value={form.mandirType} onChange={handleChange} options={MANDIR_TYPES} />
                    <SelectField label="Budget Range" name="budget" value={form.budget} onChange={handleChange} options={BUDGETS} />
                  </div>

                  <div>
                    <label className="block font-body text-xs uppercase tracking-wider text-[#8a7060] mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="E.g. wall-mounted, 3 feet wide, LED lighting, specific deity…"
                      className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3 font-body text-sm text-[#1a0e00] placeholder-stone-400 focus:outline-none focus:border-[#f97d08] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#f97d08] hover:bg-[#e06200] disabled:opacity-70 text-white font-body font-medium text-base px-8 py-4 rounded-sm transition-all duration-300 shadow-[0_4px_24px_rgba(249,125,8,0.25)] hover:shadow-[0_6px_32px_rgba(249,125,8,0.40)] flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending your request…
                      </>
                    ) : (
                      "🙏 Send My Free Quote Request"
                    )}
                  </button>
                  <p className="font-body text-xs text-[#8a7060] text-center">
                    By submitting, you agree to be contacted by our team. We never spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-0">
        <div className="h-64 bg-gradient-to-br from-[#fdfaf5] to-[#fff8f0] flex items-center justify-center border-t border-stone-100">
          <div className="text-center">
            <span className="text-4xl block mb-2">📍</span>
            <p className="font-body text-sm text-[#8a7060]">
              Ground Floor, Shop No.4, Plot No. 12, Block A-1,<br />Whs Kirti Nagar Industrial Area, West Delhi-110015
            </p>
            <a
              href="https://share.google/f9a8vJg6WwBkqETQs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-[#f97d08] mt-1 block hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Reusable sub-components ────────────────────────────────────────────────

function FormField({
  label, name, type, value, onChange, placeholder, required,
}: {
  label: string; name: string; type: string; value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-xs uppercase tracking-wider text-[#8a7060] mb-2">
        {label}
      </label>
      <input
        id={name} name={name} type={type} value={value}
        onChange={onChange} placeholder={placeholder} required={required}
        className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3 font-body text-sm text-[#1a0e00] placeholder-stone-400 focus:outline-none focus:border-[#f97d08] transition-colors"
      />
    </div>
  );
}

function SelectField({
  label, name, value, onChange, options,
}: {
  label: string; name: string; value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>; options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block font-body text-xs uppercase tracking-wider text-[#8a7060] mb-2">
        {label}
      </label>
      <select
        id={name} name={name} value={value} onChange={onChange}
        className="w-full bg-white border border-stone-200 rounded-sm px-4 py-3 font-body text-sm text-[#1a0e00] focus:outline-none focus:border-[#f97d08] transition-colors appearance-none"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
