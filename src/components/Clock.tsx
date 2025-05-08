import { useState, useEffect } from "react";
import { Clock as ClockIcon } from "lucide-react";

interface ClockProps {
  isDark: boolean;
}

// Common time zones with their labels
const TIME_ZONES = [
  { value: "UTC", label: "UTC" },
  { value: "Asia/Kolkata", label: "Kolkata (IST)" },
  { value: "America/New_York", label: "New York (EST)" },
  { value: "America/Los_Angeles", label: "Los Angeles (PST)" },
  { value: "Europe/London", label: "London (GMT)" },
  { value: "Europe/Paris", label: "Paris (CET)" },
  { value: "Asia/Tokyo", label: "Tokyo (JST)" },
  { value: "Australia/Sydney", label: "Sydney (AEST)" },
  { value: "Asia/Dubai", label: "Dubai (GST)" },
  { value: "Asia/Shanghai", label: "Shanghai (CST)" },
  { value: "Pacific/Auckland", label: "Auckland (NZST)" },
];

export function Clock({ isDark }: ClockProps) {
  const [time, setTime] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  const [is24Hour, setIs24Hour] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
      timeZone: selectedTimeZone,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <select
          value={selectedTimeZone}
          onChange={(e) => setSelectedTimeZone(e.target.value)}
          className={`px-3 py-1.5 rounded-lg transition-all backdrop-blur-md border text-sm max-w-[180px]
            ${
              isDark
                ? "bg-gray-800/30 hover:bg-gray-700/40 text-gray-200 border-gray-600/50 hover:border-gray-500/50"
                : "bg-white/30 hover:bg-white/40 text-gray-800 border-gray-300/50 hover:border-gray-400/50"
            }`}
        >
          {TIME_ZONES.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all
            backdrop-blur-md border text-sm
            ${
              isDark
                ? "bg-gray-800/30 hover:bg-gray-700/40 text-gray-200 border-gray-600/50 hover:border-gray-500/50"
                : "bg-white/30 hover:bg-white/40 text-gray-800 border-gray-300/50 hover:border-gray-400/50"
            }`}
        >
          <ClockIcon className="h-4 w-4" />
          <span className="font-mono">{formatTime(time)}</span>
        </button>
      </div>
    </div>
  );
}
