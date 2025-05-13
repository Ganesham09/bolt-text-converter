import { useState, useEffect, useCallback } from "react";
import { ArrowLeftRight } from "lucide-react";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WorldMapBackground } from "./components/WorldMapBackground";
import { useTranslation } from "./hooks/useTranslation";
import { useTheme } from "./hooks/useTheme";
import { useLocation } from "./hooks/useLocation";

function App() {
  const { isDark, setIsDark } = useTheme();
  const userLanguage = useLocation();
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("es");
  const { translate, isLoading, error } = useTranslation();

  useEffect(() => {
    if (userLanguage && userLanguage.code !== sourceLang) {
      setTargetLang(userLanguage.code);
    }
  }, [userLanguage, sourceLang]);

  const handleTranslation = useCallback(async () => {
    if (sourceText) {
      const result = await translate(sourceText, sourceLang, targetLang);
      setTranslatedText(result);
    } else {
      setTranslatedText("");
    }
  }, [sourceText, sourceLang, targetLang, translate]);

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(handleTranslation, 1000);
    return () => clearTimeout(debounceTimeout);
  }, [handleTranslation]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-50/80 to-gray-100/80 dark:from-gray-900/80 dark:to-gray-800/80 py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8 transition-colors duration-200 font-typewriter">
      <WorldMapBackground isDark={isDark} />
      <div className="max-w-4xl mx-auto relative z-10">
        <Header isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />

        {error && (
          <div className="mb-4 p-3 sm:p-4 bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-sm sm:text-base text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <LanguageSelector
                value={sourceLang}
                onChange={setSourceLang}
                label="Source Language"
                isDark={isDark}
              />
              <TextArea
                value={sourceText}
                onChange={setSourceText}
                placeholder="Type your text here..."
                isDark={isDark}
                className="font-inter min-h-[150px] sm:min-h-[200px]"
              />
            </div>

            <div className="relative space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <LanguageSelector
                  value={targetLang}
                  onChange={setTargetLang}
                  label="Target Language"
                  isDark={isDark}
                />
                <button
                  onClick={swapLanguages}
                  className="mt-6 p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Swap languages"
                >
                  <ArrowLeftRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <TextArea
                value={translatedText}
                onChange={() => {}}
                placeholder="Translation will appear here..."
                readOnly
                isDark={isDark}
                className="font-inter min-h-[150px] sm:min-h-[200px]"
              />
            </div>
          </div>

          {isLoading && (
            <div className="mt-4 flex justify-center">
              <LoadingSpinner isDark={isDark} />
            </div>
          )}
        </div>

        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <p>Chrome extension coming soon! Made with ❤️ by Ganesham</p>
        </div>

        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
