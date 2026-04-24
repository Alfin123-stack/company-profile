"use client";

import { useState } from "react";
import { CheckCircle, Send, Loader2, AlertTriangle, Lock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  type: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    type: "aspirasi",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "Nama wajib diisi";

    if (!form.email.trim()) newErrors.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Format email tidak valid";

    if (!form.subject.trim()) newErrors.subject = "Subjek wajib diisi";

    if (!form.message.trim()) newErrors.message = "Pesan wajib diisi";
    else if (form.message.length < 20)
      newErrors.message = "Pesan minimal 20 karakter";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.subject,
          category: form.type,
          message: form.message,
          author: form.name,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          type: "aspirasi",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  /* ================= SUCCESS STATE ================= */
  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-16 rounded-3xl bg-white border border-ink/10">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-green-50">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h3
          className="text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)" }}>
          Terima kasih!
        </h3>

        <p className="text-mist mb-8 max-w-sm leading-relaxed">
          Pesan Anda telah berhasil dikirim. Pengurus RW akan merespons dalam
          1×24 jam di hari kerja.
        </p>

        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 rounded-xl border border-ink/20 text-sm font-medium hover:bg-ink hover:text-white transition-all duration-300">
          Kirim pesan lain
        </button>
      </div>
    );
  }

  /* ================= FORM ================= */
  return (
    <div className="p-8 lg:p-10 rounded-3xl bg-white border border-ink/10 shadow-xl shadow-ink/5">
      <h2
        className="text-2xl font-bold mb-2"
        style={{ fontFamily: "var(--font-display)" }}>
        Kirim Pesan atau Aspirasi
      </h2>

      <p className="text-mist text-sm mb-8">
        Formulir ini terenkripsi dan aman. Respons dalam 1×24 jam.
      </p>

      <div className="space-y-5">
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium mb-1.5 text-ink/70">
              Nama Lengkap <span className="text-red-400">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Anda"
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 ${
                errors.name
                  ? "border-red-300 bg-red-50"
                  : "border-ink/15 bg-white"
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium mb-1.5 text-ink/70">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@contoh.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 ${
                errors.email
                  ? "border-red-300 bg-red-50"
                  : "border-ink/15 bg-white"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-medium mb-1.5 text-ink/70">
            Subjek <span className="text-red-400">*</span>
          </label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Ringkasan singkat pesan Anda"
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 ${
              errors.subject
                ? "border-red-300 bg-red-50"
                : "border-ink/15 bg-white"
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-500 mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium mb-1.5 text-ink/70">
            Pesan <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tuliskan aspirasi atau laporan Anda..."
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 resize-none ${
              errors.message
                ? "border-red-300 bg-red-50"
                : "border-ink/15 bg-white"
            }`}
          />
        </div>

        {/* Error */}
        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-sm text-red-600 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Gagal mengirim pesan. Silakan coba lagi.
          </div>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-sage-500/25 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #1e5c1e, #4d9e4d)" }}>
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Kirim Pesan
            </>
          )}
        </button>

        <p className="text-xs text-center text-mist flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          Pesan Anda bersifat rahasia
        </p>
      </div>
    </div>
  );
}
