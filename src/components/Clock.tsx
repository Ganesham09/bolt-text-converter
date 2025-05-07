import { useState, useEffect } from "react";
import { Clock as ClockIcon } from "lucide-react";

interface ClockProps {
  isDark: boolean;
}

export function Clock({ isDark }: ClockProps) {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    if (is24Hour) {
      return date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    }
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setIs24Hour(!is24Hour)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
          backdrop-blur-md border border-opacity-20
          ${
            isDark
              ? "bg-gray-800/30 hover:bg-gray-700/40 text-gray-200 border-gray-600"
              : "bg-white/30 hover:bg-white/40 text-gray-800 border-gray-300"
          }`}
      >
        <ClockIcon className="h-4 w-4" />
        <span className="font-mono">{formatTime(time)}</span>
      </button>
    </div>
  );
}
