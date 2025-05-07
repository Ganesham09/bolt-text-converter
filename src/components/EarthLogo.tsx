interface EarthLogoProps {
  className?: string;
}

export function EarthLogo({ className = "" }: EarthLogoProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="absolute inset-0 animate-spin-slow text-4xl">
        🌍
      </div>
    </div>
  );
} 