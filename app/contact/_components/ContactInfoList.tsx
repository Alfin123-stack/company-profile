import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

const contactInfo = [
  {
    icon: MapPin,
    color: "text-rose-500",
    label: "Alamat Sekretariat",
    value: "Jl. Raya Lingkungan No.1, Balai RW 05",
  },
  {
    icon: Mail,
    color: "text-blue-500",
    label: "Email",
    value: "admin@rwconnect.id",
  },
  {
    icon: MessageCircle,
    color: "text-green-500",
    label: "WhatsApp",
    value: "+62 812-0000-0000",
  },
  {
    icon: Clock,
    color: "text-amber-500",
    label: "Rata-rata Respons",
    value: "Dalam 2 jam di jam operasional",
  },
];

export default function ContactInfoList() {
  return (
    <div>
      <h2
        className="text-2xl font-bold mb-6"
        style={{ fontFamily: "var(--font-display)" }}>
        Informasi Kontak
      </h2>
      <div className="space-y-4">
        {contactInfo.map((item, i) => (
          <ContactInfoCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
