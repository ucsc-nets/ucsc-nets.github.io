import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen items-center justify-center font-sans bg-black">
      <Image
          src="/images/treenet-floor.webp"
          alt="Background Treenet Image"
          fill
          className="object-cover object-center z-0"
          priority
        />
      <header className="w-full justify-between py-8 sm:py-16 px-16 bg-black/50 backdrop-blur-md items-start z-10">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-sm md:max-w-3xl text-3xl sm:text-4xl font-semibold leading-10 text-zinc-50">
            Treeneets at <br/>
            University of California, Santa Cruz
          </h1>
        </div>
      </header>
      <main className="w-full relative flex flex-col justify-center items-center mt-25 z-10">
        <div className="flex flex-col gap-6 w-11/12 sm:w-1/2 md:w-1/3 text-center text-zinc-300">
          
          <Link 
            href="/status" 
            className="flex flex-col items-center justify-center gap-1 hover:text-white hover:scale-105 transition-all duration-200 bg-black/20 hover:bg-black/25 px-6 py-5 rounded-3xl backdrop-blur-lg border border-white/10"
          >
            <span className="-mt-1 text-4xl font-medium text-white">Nets</span>
            <span className="text-sm font-normal text-zinc-200">Check completion and status of nets at UCSC</span>
          </Link>

          {/*
          <Link 
            href="/gallery" 
            className="flex flex-col items-center justify-center gap-1 hover:text-white hover:scale-105 transition-all duration-200 bg-black/20 hover:bg-black/25 px-6 py-5 rounded-3xl backdrop-blur-lg border border-white/10"
          >
              <span className="text-2xl font-medium text-white">Gallery</span>
              <span className="text-sm font-normal text-zinc-200">Photos of treenets around UCSC</span>
          </Link>
          */}

          <Link 
            href="/learn" 
            className="flex flex-col items-center justify-center gap-1 hover:text-white hover:scale-105 transition-all duration-200 bg-black/20 hover:bg-black/25 px-6 py-5 rounded-3xl backdrop-blur-lg border border-white/10"
          >
            <span className="-mt-1 text-4xl font-medium text-white">Learn</span>
            <span className="text-sm font-normal text-zinc-200">Find availability of in-person lessons. Learn how to weave and maintain a treenet</span>
          </Link>

          <Link 
            href="/contact" 
            className="flex flex-col items-center justify-center gap-1 hover:text-white hover:scale-105 transition-all duration-200 bg-black/20 hover:bg-black/25 px-6 py-5 rounded-3xl backdrop-blur-lg border border-white/10"
          >
            <span className="-mt-1 text-4xl font-medium text-white">Contact</span>
            <span className="text-sm font-normal text-zinc-200">For any reason or inquiry</span>
          </Link>

        </div>
      </main>
    </div>
  );
}
