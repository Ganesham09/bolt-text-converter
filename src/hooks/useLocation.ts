import { useState, useEffect } from 'react';
import axios from 'axios';
import { Language } from '../types';
import { LANGUAGES } from '../config/constants';

interface IpApiResponse {
  country_code: string;
}

const COUNTRY_TO_LANGUAGE: Record<string, string> = {
  US: 'en', GB: 'en', ES: 'es', FR: 'fr',
  DE: 'de', IT: 'it', PT: 'pt', RU: 'ru',
  JP: 'ja', KR: 'ko', CN: 'zh'
};

export function useLocation() {
  const [userLanguage, setUserLanguage] = useState<Language | null>(null);

  useEffect(() => {
    async function detectLocation() {
      try {
        // Use a more reliable HTTPS endpoint
        const response = await axios.get<IpApiResponse>('https://ipapi.co/json/', {
          timeout: 5000 // 5 second timeout
        });
        
        const countryCode = response.data.country_code;
        
        // First try to get language from country mapping
        const languageCode = COUNTRY_TO_LANGUAGE[countryCode] || 
          // Fallback to browser language
          navigator.language.split('-')[0] || 
          // Ultimate fallback to English
          'en';
        
        const language = LANGUAGES.find(lang => lang.code === languageCode);
        if (language) {
          setUserLanguage(language);
        } else {
          // If no matching language found, default to English
          const defaultLanguage = LANGUAGES.find(lang => lang.code === 'en');
          setUserLanguage(defaultLanguage || null);
        }
      } catch (error) {
        // On error, try to use browser's language settings
        const browserLang = navigator.language.split('-')[0];
        const language = LANGUAGES.find(lang => lang.code === browserLang) ||
          LANGUAGES.find(lang => lang.code === 'en');
        
        if (language) {
          setUserLanguage(language);
        }
      }
    }

    detectLocation();
  }, []);

  return userLanguage;
}