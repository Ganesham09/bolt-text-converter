import React from "react";
import { GlobeIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Clock } from "./Clock";
import { MarketingMessage } from "./MarketingMessage";

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-between items-center mb-4">
        <Clock isDark={isDark} />
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
      <GlobeIcon className="mx-auto h-12 w-12 text-indigo-600 dark:text-indigo-400" />
      <h1 className="mt-3 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        Browser Lingo
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
        Type your text and see it translated in real-time
      </p>
      <MarketingMessage isDark={isDark} />
    </div>
  );
}
