import { useState, useCallback } from 'react';
import axios from 'axios';
import { MYMEMORY_API } from '../config/constants';
import { getCachedTranslation, setCachedTranslation } from '../utils/cache';

const RETRY_DELAY = 1000; // 1 second
const MAX_RETRIES = 3;

export function useTranslation() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translate = useCallback(async (
    text: string,
    sourceLang: string,
    targetLang: string,
    retryCount = 0
  ): Promise<string> => {
    if (!text) return '';

    // Generate cache key
    const cacheKey = `${text}-${sourceLang}-${targetLang}`;
    
    // Check cache first
    const cachedResult = getCachedTranslation(cacheKey);
    if (cachedResult) return cachedResult;
    
    setIsLoading(true);
    setError(null);

    try {
      const langPair = `${sourceLang}|${targetLang}`;
      const response = await axios.get(MYMEMORY_API, {
        params: {
          q: text,
          langpair: langPair,
          de: 'example@email.com' // Using a demo email for better rate limits
        }
      });
      
      if (response.data.responseStatus === 200) {
        const translation = response.data.responseData.translatedText;
        setCachedTranslation(cacheKey, translation);
        setError(null);
        return translation;
      } else {
        throw new Error(response.data.responseDetails || 'Translation failed');
      }
    } catch (err) {
      if (retryCount < MAX_RETRIES) {
        setError(`Translation failed. Retrying in ${RETRY_DELAY/1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return translate(text, sourceLang, targetLang, retryCount + 1);
      }

      setError('Translation failed. Please try again.');
      return '';
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { translate, isLoading, error };
}