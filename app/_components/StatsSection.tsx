import StatCounter from "@/components/StatCounter";

const stats = [
  { end: 1200, label: "Warga Terdaftar", suffix: "+" },
  { end: 48, label: "Pengumuman Bulan Ini", suffix: "" },
  { end: 15, label: "Kegiatan Terjadwal", suffix: "" },
  { end: 98, label: "Tingkat Kepuasan", suffix: "%" },
];

// Komponen: menampilkan statistik platform dengan animasi angka
export default function StatsSection() {
  return (
    <section className="py-20 border-y border-ink/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              end={stat.end}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
