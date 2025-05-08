import { ThemeToggle } from "./ThemeToggle";
import { Clock } from "./Clock";
import { MarketingMessage } from "./MarketingMessage";
import { EarthLogo } from "./EarthLogo";
import { GithubStar } from "./GithubStar";
import { LanguageCycler } from "./LanguageCycler";

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <div className="text-center mb-8 font-typewriter relative">
      <div className="flex justify-between items-center mb-4 animate-fade-in-down">
        <div className="flex items-center gap-4">
          <Clock isDark={isDark} />
          <GithubStar isDark={isDark} />
        </div>
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
      <div className="mx-auto w-20 h-20 text-indigo-600 dark:text-indigo-400 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
        <EarthLogo className="w-full h-full" />
      </div>
      <div className="relative inline-block">
        <h1 className="mt-3 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl overflow-hidden whitespace-nowrap" style={{ animationDelay: '0.4s' }}>
          <LanguageCycler />
        </h1>
        <div className="absolute -bottom-1 left-0 h-1.5 bg-yellow-400/90 animate-line-draw shadow-[0_1px_2px_rgba(234,179,8,0.2)]" style={{ animationDelay: '1.2s' }}></div>
      </div>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 px-4 py-2 animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
        Type your text and see it translated in real-time
      </p>
      <MarketingMessage isDark={isDark} />
    </div>
  );
}
