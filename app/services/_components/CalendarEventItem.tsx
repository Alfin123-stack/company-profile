interface CalendarEventItemProps {
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  type: string;
}

const typeStyles: Record<string, string> = {
  Wajib: "bg-red-50 text-red-600",
  Sukarela: "bg-sage-50 text-sage-700",
  Info: "bg-sage-50 text-sage-700",
};

export default function CalendarEventItem({
  day,
  month,
  title,
  time,
  location,
  type,
}: CalendarEventItemProps) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl border border-ink/10 bg-white hover:border-sage-300 transition-colors duration-300 group">
      <div className="text-center min-w-[56px]">
        <div
          className="text-2xl font-bold text-sage-600"
          style={{ fontFamily: "var(--font-display)" }}>
          {day}
        </div>
        <div className="text-xs text-mist">{month}</div>
      </div>
      <div className="w-px h-10 bg-ink/10" />
      <div className="flex-1">
        <div className="font-semibold text-sm">{title}</div>
        <div className="text-xs text-mist">
          {time} · {location}
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeStyles[type] ?? "bg-sage-50 text-sage-700"}`}>
        {type}
      </span>
    </div>
  );
}