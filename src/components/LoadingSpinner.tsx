import React from 'react';

interface LoadingSpinnerProps {
  isDark?: boolean;
}

export function LoadingSpinner({ isDark }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <div className={`animate-spin rounded-full h-6 w-6 border-b-2 ${
        isDark ? 'border-indigo-400' : 'border-indigo-600'
      }`}></div>
    </div>
  );
}