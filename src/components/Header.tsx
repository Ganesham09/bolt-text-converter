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
    <div className="text-center mb-4 sm:mb-8 font-typewriter relative px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 animate-fade-in-down gap-4">
        <div className="flex items-center">
          <GithubStar isDark={isDark} />
        </div>
        <div className="flex items-center">
          <Clock isDark={isDark} />
        </div>
        <div className="flex items-center">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </div>
      </div>
      <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 text-indigo-600 dark:text-indigo-400 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
        <EarthLogo className="w-full h-full" />
      </div>
      <div className="relative inline-block">
        <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white overflow-hidden whitespace-nowrap" style={{ animationDelay: '0.4s' }}>
          <LanguageCycler />
        </h1>
        <div className="absolute -bottom-1 left-0 h-1.5 bg-yellow-400/90 animate-line-draw shadow-[0_1px_2px_rgba(234,179,8,0.2)]" style={{ animationDelay: '1.2s' }}></div>
      </div>
      <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300 px-2 sm:px-4 py-2 animate-fade-in-down" style={{ animationDelay: '0.6s' }}>
        Type your text and see it translated in real-time
      </p>
      <MarketingMessage isDark={isDark} />
    </div>
  );
}

