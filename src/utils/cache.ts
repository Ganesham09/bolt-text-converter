interface CacheEntry {
  translation: string;
  timestamp: number;
}

const cache = new Map<string, CacheEntry>();
const CACHE_DURATION = 5000 * 60 * 60; // 5 hour

export function getCachedTranslation(key: string): string | null {
  const entry = cache.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }

  return entry.translation;
}

export function setCachedTranslation(key: string, translation: string): void {
  cache.set(key, {
    translation,
    timestamp: Date.now(),
  });
}
