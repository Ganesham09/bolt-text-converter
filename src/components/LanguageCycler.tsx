import { useState, useEffect } from 'react';

const languages = [
  { text: 'ब्राउ़र भाषा', lang: 'hi' },
  { text: 'ブラウザ言語', lang: 'ja' },
  { text: '浏览器语言', lang: 'zh' },
  { text: 'لغة المتصفح', lang: 'ar' },
  { text: 'Browser Taal', lang: 'af' },
  { text: 'Browser Lingvo', lang: 'eo' },
  { text: 'Navegador Lingvo', lang: 'eo' },
  { text: 'Browser Sprache', lang: 'de' },
  { text: 'Browser Lingua', lang: 'it' },
  { text: 'Browser Langue', lang: 'fr' },
  { text: 'Browser Lingo', lang: 'en' }
];

export function LanguageCycler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === languages.length - 1) {
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const renderText = () => {
    const currentText = languages[currentIndex].text;
    if (currentText === 'Browser Lingo') {
      return (
        <>
          <span className="font-typewriter text-5xl sm:text-6xl text-gray-900 dark:text-white inline-block transform rotate-3 hover:rotate-0 transition-transform duration-300">Browser </span>
          <span className="font-serif text-5xl sm:text-6xl text-emerald-400 dark:text-emerald-300 inline-block transform -rotate-3 hover:rotate-0 transition-transform duration-300 border-2 border-emerald-400 dark:border-emerald-300 rounded-lg px-2">Lingo</span>
        </>
      );
    }
    return currentText;
  };

  return (
    <span 
      className="inline-block transition-all duration-200"
      style={{ 
        direction: languages[currentIndex].lang === 'ar' ? 'rtl' : 'ltr',
        fontFamily: languages[currentIndex].lang === 'zh' || languages[currentIndex].lang === 'ja' ? 'sans-serif' : 'inherit'
      }}
    >
      {renderText()}
    </span>
  );
} 