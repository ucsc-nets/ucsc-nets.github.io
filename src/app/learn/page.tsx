import Image from "next/image";
import Link from "next/link";
import LessonGallery from './components/lessonGallery';

export default function LearnPage() {
    const GOOGLE_SHEET_TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ--5JnLaze9dpX_Im9gVUl8FxAEr2Mv0Z-87gEetjDqTtIhMfmXIzYzY2T5hxu1XJThAqVupyVABgm/pub?gid=1964891158&single=true&output=tsv";
    const COLUMN_MAPPING = ['type', 'instagram', 'date', 'time'];

    return (
        <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <Image
                src="/images/treenet-weaving.webp"
                alt="Background Treenet Image"
                fill
                className="object-cover z-0 fixed"
                priority
            />
            <div className="mb-10 mx-16 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    Learn How to Weave
                </h1>
                <p className="text-lg my-1 -mb-1 text-white">
                    <Link
                        href="./contact"
                        target="_blank" 
                        rel="noopener noreferrer"
                        // Adding a subtle hover effect so users know it is clickable
                        className="hover:text-indigo-300 transition-colors cursor-pointer font-semibold"
                    >
                    Contact Us &ndash; Sign up or Request a different time
                    </Link>
                </p>
            </div>
            
            <LessonGallery
                sheetUrl={GOOGLE_SHEET_TSV_URL}
                columnMapping={COLUMN_MAPPING}
            />

            <div className="my-10 mx-16 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                <p className="text-2xl font-medium text-white tracking-tight">
                    Please check back soon for online lessons.
                </p>            
            </div>
        </main>
    )
}