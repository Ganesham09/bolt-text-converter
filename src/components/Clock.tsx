import { useState, useEffect } from "react";
import { Clock as ClockIcon } from "lucide-react";

interface ClockProps {
  isDark?: boolean;
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
      <div className="flex items-center gap-1">
        <div className={`text-sm ${isDark ? "text-gray-100" : "text-gray-700"}`}>
          {formatTime(time)}
        </div>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className={`text-xs px-1.5 py-0.5 rounded border ${
            isDark
              ? "border-gray-800 text-gray-100 hover:bg-gray-800"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {is24Hour ? "24h" : "12h"}
        </button>
      </div>
      <select
        value={selectedTimeZone}
        onChange={(e) => setSelectedTimeZone(e.target.value)}
        className={`text-xs rounded-md border py-1 px-1.5 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 transition-colors duration-200 w-24
          ${
            isDark
              ? "bg-gray-900 border-gray-800 text-gray-100"
              : "bg-white border-gray-300 text-gray-700"
          }
        `}
      >
        {TIME_ZONES.map((tz) => (
          <option key={tz.value} value={tz.value}>
            {tz.label}
          </option>
        ))}
      </select>
    </div>
  );
}
