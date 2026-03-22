"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let hasError = false;
    if (!form.name) {
      newErrors.name = "Name is required.";
      hasError = true;
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
      hasError = true;
    }
    if (!form.message) {
      newErrors.message = "Message is required.";
      hasError = true;
    }
    setErrors(newErrors);
    if (hasError) return;

    const subject = `Message from ${form.name}`;
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.location.href = `mailto:labya31@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Message Sent
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Great! Your message has been sent.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: "top-right",
      },
    );
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const inputClass =
    "block w-full px-4 py-3 mt-1 text-sm bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 hover:border-cyan-300";

  return (
    <section id="contact" data-aos="fade-up" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Contact <span className="text-cyan-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-500 text-sm">
            Have a project in mind? Let&apos;s talk!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-500 text-white shadow-md shadow-cyan-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</p>
              <a href="mailto:labya31@gmail.com" className="text-sm font-medium text-gray-800 hover:text-cyan-500 transition-colors">labya31@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl border border-cyan-100">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-teal-500 text-white shadow-md shadow-teal-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Location</p>
              <p className="text-sm font-medium text-gray-800">Tubigon, Bohol, Philippines</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-cyan-50/30 rounded-2xl p-8 shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="John Doe"
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="john@example.com"
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell me about your project..."
                className={inputClass}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-white bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-cyan-200 hover:shadow-lg hover:shadow-cyan-300"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path
                  d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                  stroke="#ffffff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
