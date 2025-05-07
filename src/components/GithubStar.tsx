import { Star } from "lucide-react";
import { useState, useEffect } from "react";

interface GithubStarProps {
  isDark: boolean;
}

export function GithubStar({ isDark }: GithubStarProps) {
  const [starCount, setStarCount] = useState<number | null>(null);
  const repoUrl = "https://github.com/Ganesham09/bolt-text-converter";

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/Ganesham09/bolt-text-converter`);
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching star count:', error);
      }
    };

    fetchStarCount();
    // Refresh star count every 5 minutes
    const interval = setInterval(fetchStarCount, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 px-3 py-2 rounded-lg transition-colors
        backdrop-blur-md border border-opacity-20
        hover:bg-gray-100 dark:hover:bg-gray-700
        text-gray-800 dark:text-gray-200"
    >
      <Star className="h-4 w-4 text-yellow-400" />
      <span className="text-sm font-medium">Github</span>
      {starCount !== null && (
        <span className="text-sm font-medium ml-1">({starCount})</span>
      )}
    </a>
  );
} 