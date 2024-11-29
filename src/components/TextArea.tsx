import React from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  readOnly?: boolean;
  isDark?: boolean;
}

export function TextArea({ value, onChange, placeholder, readOnly = false, isDark }: TextAreaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      readOnly={readOnly}
      className={`w-full h-48 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200
        ${isDark 
          ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400' 
          : 'bg-white border-gray-300 text-gray-700 placeholder-gray-500'
        }
        ${readOnly 
          ? isDark ? 'bg-gray-800' : 'bg-gray-50' 
          : isDark ? 'hover:border-gray-500' : 'hover:border-gray-300'
        }
        border
      `}
    />
  );
}