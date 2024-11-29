export interface Language {
  code: string;
  name: string;
}

export interface TranslationResponse {
  data: {
    translations: Array<{
      translatedText: string;
    }>;
  };
}