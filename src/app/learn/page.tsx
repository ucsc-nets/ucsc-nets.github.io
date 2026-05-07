'use client'

import Image from "next/image";
import Link from "next/link";
import LessonGallery from './components/lessonGallery';
import BookingModal from "./components/bookingModal";
import { useEffect, useState } from "react";
import { LessonItem } from "./components/lessonElement";
import JoinModal from "./components/joinModal";

const parseTSV = (tsvText: string, columnMapping: string[]): LessonItem[] => {
  const lines = tsvText.trim().split('\n');
  if (lines.length === 0 || lines[0] === '') return []; 
  return lines.map((line, index) => {
    const values = line.split('\t');
    const rowObject: Partial<LessonItem> = { uid: `row-${index}` }; 
    columnMapping.forEach((keyName, colIndex) => {
      rowObject[keyName] = values[colIndex]?.replace(/[\r\n]+/g, '').trim() || '';
    });
    return rowObject as LessonItem;
  });
};

export default function LearnPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
    const [lessonsData, setLessonsData] = useState<LessonItem[]>([]);
    const [selectedLessonUid, setSelectedLessonUid] = useState<string>('');

    const GOOGLE_SHEET_TSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ--5JnLaze9dpX_Im9gVUl8FxAEr2Mv0Z-87gEetjDqTtIhMfmXIzYzY2T5hxu1XJThAqVupyVABgm/pub?gid=1964891158&single=true&output=tsv";
    const COLUMN_MAPPING = ['type', 'instagram', 'date', 'time'];

    useEffect(() => {
    fetch(GOOGLE_SHEET_TSV_URL)
      .then(res => res.text())
      .then(text => setLessonsData(parseTSV(text, COLUMN_MAPPING)))
      .catch(err => console.error("Failed to load lessons", err));
  }     , []);
    return (
        <main className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <Image
                src="/images/treenet-weaving.webp"
                alt="Background Treenet Image"
                fill
                className="object-cover z-0 fixed"
                priority
            />
            <div className="mb-10 mx-16 flex-col lg:flex-row flex gap-8">
                <div className="relative z-20 bg-black/60 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                    <h1 className="text-6xl font-extrabold text-zinc-50 tracking-tight">
                        Learn How to Weave
                    </h1>
                    <p className="text-lg my-1 -mb-1 text-zinc-200">
                        Book and find avaiable lessons. Learn everything concerning treenets.
                        Visit WIP nets during our workshops and improve your skills. No rope required.
                    </p>
                </div>
                <div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="font-mono underline-offset-4 w-full xs:w-1/2 border-white/20 border-2 text-zinc-50 p-2 text-4xl sm:text-5xl md:p-4 transition-all cursor-pointer bg-black/50 hover:bg-black/65 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl duration-300 hover:-translate-y-0.5 z-30"
                    >
                        Book a Lesson
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => setIsJoinModalOpen(true)}
                        className="font-mono underline-offset-4 w-full xs:w-1/2 border-white/20 border-2 text-zinc-50 p-2 text-4xl sm:text-5xl md:p-4 transition-all cursor-pointer bg-black/50 hover:bg-black/65 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl duration-300 hover:-translate-y-0.5 z-30"
                    >
                        Join Existing Lesson
                    </button>
                </div>
            </div>
            

            <BookingModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />

            <JoinModal 
                isOpen={isJoinModalOpen} 
                onClose={() => setIsJoinModalOpen(false)} 
                lessons={lessonsData} 
                columnMapping={COLUMN_MAPPING}
                initialLessonUid={selectedLessonUid} 
            />

            <LessonGallery
                sheetUrl={GOOGLE_SHEET_TSV_URL}
                columnMapping={COLUMN_MAPPING}
                onLessonSelect={(uid) => {
                    setSelectedLessonUid(uid);
                    setIsJoinModalOpen(true);
                }}
            />

            <div className="my-10 mx-16 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                <p className="text-2xl font-medium text-white tracking-tight">
                    Please check back soon for online lessons.
                </p>            
            </div>
        </main>
    )
}