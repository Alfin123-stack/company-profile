import type { Metadata } from "next";
import ContactHero from "./_components/ContactHero";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSidebar from "./_components/ContactSidebar";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontak – RW Connect",
  description:
    "Hubungi tim RW Connect atau sampaikan aspirasi Anda melalui halaman kontak kami.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 overflow-x-hidden">
      <ContactHero />

      <AnimatedSection className="pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">
            <ContactSidebar />
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
