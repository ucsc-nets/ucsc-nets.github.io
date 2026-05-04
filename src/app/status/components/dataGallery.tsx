'use client';

import { useState, useEffect } from 'react';
import DataElement, { DataItem } from './dataElement';

interface DataGalleryProps {
  sheetUrl: string;
  columnMapping: string[];
}

// Updated Parser: No headers, strictly positional
const parseTSV = (tsvText: string, columnMapping: string[]): DataItem[] => {
  const lines = tsvText.trim().split('\n');
  if (lines.length === 0 || lines[0] === '') return []; 

  // Process EVERY line, starting from index 0
  return lines.map((line, index) => {
    const values = line.split('\t');
    
    // Create a strictly unique internal ID to prevent React duplicate key errors
    const rowObject: Partial<DataItem> = { uid: `row-${index}` }; 
    
    // Map values based on column position
    columnMapping.forEach((keyName, colIndex) => {
      rowObject[keyName] = values[colIndex]?.replace(/[\r\n]+/g, '').trim() || '';
    });
    
    return rowObject as DataItem;
  });
};

const LoadingSkeleton = () => (
  <div className="relative flex flex-col p-6 bg-white border border-gray-100 rounded-2xl shadow-sm animate-pulse">
    <div className="flex justify-between mb-6">
      <div className="h-8 w-1/3 bg-gray-200 rounded-md"></div>
      <div className="h-8 w-1/4 bg-gray-200 rounded-lg"></div>
    </div>
    <div className="mt-auto pt-4 border-t border-gray-50">
      <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);

export default function DataGallery({ sheetUrl, columnMapping }: DataGalleryProps) {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(sheetUrl);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const textData = await response.text();
        const parsedData = parseTSV(textData, columnMapping);
        
        setData(parsedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [sheetUrl, columnMapping]);

  if (error) {
    return <div className="text-red-500 font-bold p-4">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-20">
      {isLoading ? (
        Array.from({ length: 6 }).map((_, i) => <LoadingSkeleton key={`skeleton-${i}`} />)
      ) : (
        data.map((item) => (
          <DataElement 
            key={item.uid} // Safely using the internal unique ID
            item={item} 
            columnMapping={columnMapping} 
          />
        ))
      )}
    </div>
  );
}