import { Sparkles } from "lucide-react";

interface MarketingMessageProps {
  isDark: boolean;
}

export function MarketingMessage({ isDark }: MarketingMessageProps) {
  return (
    <div
      className={`flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg mb-4 sm:mb-6
      ${isDark ? "bg-indigo-900/30" : "bg-indigo-50"}`}
    >
      <Sparkles
        className={`h-4 w-4 sm:h-5 sm:w-5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
      />
      <p
        className={`text-xs sm:text-sm ${isDark ? "text-indigo-200" : "text-indigo-700"}`}
      >
        My app translates so well, even Siri and Google are jealous - sorry not
        sorry! 🌙⚡️
      </p>
    </div>
  );
}
