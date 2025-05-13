import { LANGUAGES } from "../config/constants";

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  isDark?: boolean;
}

export function LanguageSelector({
  value,
  onChange,
  label,
  isDark,
}: LanguageSelectorProps) {
  return (
    <div className="flex flex-col gap-1.5 sm:gap-2">
      <label
        className={`text-xs sm:text-sm font-medium ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-md border py-1.5 sm:py-2 px-2 sm:px-3 text-sm sm:text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors duration-200
          ${
            isDark
              ? "bg-gray-700 border-gray-600 text-gray-100"
              : "bg-white border-gray-300 text-gray-700"
          }
        `}
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
