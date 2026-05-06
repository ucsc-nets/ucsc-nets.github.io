import Link from 'next/link';
import DataGallery from './components/dataGallery'; 
import Image from "next/image";


export default function Home() {
  const GOOGLE_SHEET_TSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ--5JnLaze9dpX_Im9gVUl8FxAEr2Mv0Z-87gEetjDqTtIhMfmXIzYzY2T5hxu1XJThAqVupyVABgm/pub?gid=0&single=true&output=tsv';
  
  // Positional Mapping: 
  // [Column 0 name, Column 1 name, Column 2 name]
  const COLUMN_MAPPING = ['displayId', 'status', 'date'];

  return (
    <main className="relative min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Image
            src="/images/weaving-treenet-shadow.webp"
            alt="Background Treenet Image"
            fill
            className="object-cover z-0 fixed"
            priority
        />
        <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Treenets at University of California, Santa Cruz
          </h1>
          <p className="text-zinc-300 text-lg my-1 -mb-1">
            <Link
                    href="./contact"
                    target="_blank" 
                    rel="noopener noreferrer"
                    // Adding a subtle hover effect so users know it is clickable
                    className="hover:text-indigo-300 transition-colors cursor-pointer font-semibold"
            >
                Contact Us to be added &ndash; report damage
            </Link>
          </p>
        </div>

        <DataGallery 
          sheetUrl={GOOGLE_SHEET_TSV_URL} 
          columnMapping={COLUMN_MAPPING} 
        />
      </div>
    </main>
  );
}