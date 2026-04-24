import ContactInfoList from "./ContactInfoList";
import EmergencyCard from "./EmergencyCard";
import OperationalHours from "./OperationalHours";

export default function ContactSidebar() {
  return (
    <div className="lg:col-span-2 space-y-8">
      <ContactInfoList />
      <EmergencyCard />
      <OperationalHours />
    </div>
  );
}
