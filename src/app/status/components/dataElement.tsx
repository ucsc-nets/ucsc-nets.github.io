import React from 'react';

export interface DataItem {
  uid: string;
  [key: string]: string;
}

interface DataElementProps {
  item: DataItem;
  columnMapping: string[];
}

export default function DataElement({ item, columnMapping }: DataElementProps) {
  if (!columnMapping || columnMapping.length < 3) return null;

  // Destructure based on the mapping array we provided in page.tsx
  const [displayIdKey, statusKey, dateKey] = columnMapping;

  const displayValue = item[displayIdKey] || '&ndash;';
  const isInstagram = typeof displayValue === 'string' && displayValue.startsWith('@');

  return (
    <div className="group flex flex-col p-6 bg-black/50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-30">
      
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        
        <h3 className="text-2xl font-black text-zinc-50 leading-tight tracking-tight">
            {isInstagram ? (
                <a 
                    // Slice(1) removes the '@' character for the URL
                    href={`https://www.instagram.com/${displayValue.slice(1)}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    // Adding a subtle hover effect so users know it is clickable
                    className="hover:text-indigo-300 transition-colors cursor-pointer"
                >
                    {displayValue}
                </a>
                ) : (
                    displayValue
                )}
        </h3>
        
        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-lg text-lg font-bold uppercase tracking-wider bg-black/30 text-white shrink-0 border-2 border-white/10 shadow-sm">
          {item[statusKey] || 'No Status'}
        </span>
      </div>
      
      <div className="mt-auto pt-4 border-t border-zinc-200">
        <div className="flex items-center text-sm font-medium text-zinc-300">
          <svg className="w-4 h-4 mr-2 text-zinc-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Date: {item[dateKey] || 'Not Started'}
        </div>
      </div>
      
    </div>
  );
}