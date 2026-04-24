"use client";

const hours = [
  { days: "Senin – Jumat", time: "08.00 – 21.00 WIB" },
  { days: "Sabtu – Minggu", time: "09.00 – 18.00 WIB" },
];

export default function OperationalHours() {
  return (
    <div className="p-6 rounded-2xl border border-sage-200 bg-sage-50/50">
      <div className="text-sm font-semibold mb-2 text-sage-700">
        Jam Operasional
      </div>
      <div className="space-y-1 text-xs text-sage-600">
        {hours.map(({ days, time }) => (
          <div key={days} className="flex justify-between">
            <span>{days}</span>
            <span>{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
