import { Sparkles } from "lucide-react";

interface MarketingMessageProps {
  isDark: boolean;
}

export function MarketingMessage({ isDark }: MarketingMessageProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 p-3 rounded-lg mb-6
      ${isDark ? "bg-indigo-900/30" : "bg-indigo-50"}`}
    >
      <Sparkles
        className={`h-5 w-5 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
      />
      <p
        className={`text-sm ${isDark ? "text-indigo-200" : "text-indigo-700"}`}
      >
        My app translates so well, even Siri and Google are jealous - sorry not
        sorry! 🌙⚡️
      </p>
    </div>
  );
}
