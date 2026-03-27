"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  role: z.enum(["parent", "school", "student", "other"]),
  message: z.string().min(10, "Please write a short message"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Harare, Zimbabwe" },
  { icon: Mail, label: "Email", value: "codepathconsulting@gmail.com" },
  { icon: Phone, label: "Phone", value: "+263 77 166 8918 / +263 77 175 8466" },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      {/* Page Hero */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 50%, #2D7A63 100%)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.8)",
            }}
          >
            We'd love to hear from you
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #E84E0F, #FF6B35)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            Book a consultation, ask about our programs, or partner with us.
            We respond within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F7FAF9" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left — Contact Info */}
          <div>
            <h2 className="text-2xl font-black mb-2" style={{ color: "#0F3D30" }}>
              Contact Info
            </h2>
            <p className="text-sm mb-8" style={{ color: "#5A7A70" }}>
              Reach us directly through any of these channels.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{
                    background: "white",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 24px rgba(26,92,74,0.06)",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "#F7FAF9",
                      border: "2px solid rgba(26,92,74,0.15)",
                    }}
                  >
                    <c.icon size={20} style={{ color: "#1A5C4A" }} />
                  </div>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: "#5A7A70" }}
                    >
                      {c.label}
                    </div>
                    <div className="font-semibold text-sm" style={{ color: "#1A2E28" }}>
                      {c.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Info Box */}
            <motion.div
              className="mt-8 p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0F3D30 0%, #1A5C4A 100%)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-black text-white text-lg mb-2">Office Hours</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Monday – Friday
              </p>
              <p className="font-bold text-white text-sm">8:00 AM – 5:00 PM CAT</p>
              <div
                className="mt-4 pt-4 text-sm"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                We aim to respond to all enquiries within 24 hours.
              </div>
            </motion.div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            className="lg:col-span-2 rounded-3xl p-8 md:p-10"
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              boxShadow: "0 4px 24px rgba(26,92,74,0.08)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitSuccessful ? (
              /* Success State */
              <div className="h-full flex items-center justify-center text-center py-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: "#F0F9F6",
                      border: "3px solid #1A5C4A",
                    }}
                  >
                    <Send size={36} style={{ color: "#1A5C4A" }} />
                  </div>
                  <h3 className="text-3xl font-black mb-3" style={{ color: "#0F3D30" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "#5A7A70" }} className="text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours at{" "}
                    <strong style={{ color: "#1A5C4A" }}>codepathconsulting@gmail.com</strong>.
                  </p>
                </motion.div>
              </div>
            ) : (
              /* Form */
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-black mb-2" style={{ color: "#0F3D30" }}>
                    Send Us a Message
                  </h2>
                  <p style={{ color: "#5A7A70" }}>
                    Fill in the form below and we'll be in touch shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-bold mb-2"
                        style={{ color: "#1A2E28" }}
                      >
                        Full Name <span style={{ color: "#E84E0F" }}>*</span>
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{
                          background: "#F7FAF9",
                          border: "2px solid #e5e7eb",
                          color: "#1A2E28",
                        }}
                        onFocus={e => (e.target.style.borderColor = "#1A5C4A")}
                        onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                      />
                      {errors.name && (
                        <p className="text-xs mt-1.5" style={{ color: "#E84E0F" }}>
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm font-bold mb-2"
                        style={{ color: "#1A2E28" }}
                      >
                        Email Address <span style={{ color: "#E84E0F" }}>*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                        style={{
                          background: "#F7FAF9",
                          border: "2px solid #e5e7eb",
                          color: "#1A2E28",
                        }}
                        onFocus={e => (e.target.style.borderColor = "#1A5C4A")}
                        onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                      />
                      {errors.email && (
                        <p className="text-xs mt-1.5" style={{ color: "#E84E0F" }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      style={{ color: "#1A2E28" }}
                    >
                      I am a... <span style={{ color: "#E84E0F" }}>*</span>
                    </label>
                    <select
                      {...register("role")}
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm"
                      style={{
                        background: "#F7FAF9",
                        border: "2px solid #e5e7eb",
                        color: "#1A2E28",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#1A5C4A")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    >
                      <option value="parent">Parent / Guardian</option>
                      <option value="school">School Administrator</option>
                      <option value="student">Student</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-sm font-bold mb-2"
                      style={{ color: "#1A2E28" }}
                    >
                      Message <span style={{ color: "#E84E0F" }}>*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      placeholder="Tell us how we can help — ask about programs, partnership opportunities, or anything else..."
                      className="w-full px-4 py-3 rounded-xl outline-none transition-all text-sm resize-none"
                      style={{
                        background: "#F7FAF9",
                        border: "2px solid #e5e7eb",
                        color: "#1A2E28",
                      }}
                      onFocus={e => (e.target.style.borderColor = "#1A5C4A")}
                      onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                    />
                    {errors.message && (
                      <p className="text-xs mt-1.5" style={{ color: "#E84E0F" }}>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button — fully visible, always orange */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 font-black rounded-xl transition-all text-lg disabled:opacity-50"
                    style={{
                      background: "linear-gradient(135deg, #E84E0F 0%, #FF6B35 100%)",
                      color: "white",
                      boxShadow: "0 4px 20px rgba(232, 78, 15, 0.45)",
                    }}
                  >
                    {isSubmitting ? (
                      "Sending your message..."
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: "#5A7A70" }}>
                    Your message goes directly to{" "}
                    <span style={{ color: "#1A5C4A", fontWeight: 600 }}>
                      codepathconsulting@gmail.com
                    </span>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}