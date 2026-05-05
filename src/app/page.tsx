import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen items-center justify-center font-sans bg-black">
      <Image
          src="/images/treenet-floor.webp"
          alt="Background Treenet Image"
          fill
          className="object-cover object-center z-0"
          priority
        />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-black/50 backdrop-blur-md sm:items-start z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Treeneets at <br/>
            University of California, Santa Cruz
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-400">
            This page is still a work in progress
          </p>
        </div>
        {/* Social Media */}
        <div className="">
          <div className="flex flex-col gap-6 text-base font-medium sm:flex-row items-center text-center sm:items-start sm:text-left">
            <a
              className="flex w-full p-2 items-center justify-center gap-2 rounded-xl transition-colors bg-white/95 hover:bg-[#ccc]"
              href="https://www.instagram.com/ucsc.nets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="light:invert"
                src="/instagram.svg"
                alt="Instagram logo"
                width={32}
                height={32}
              />
            </a>
            <a
              className="flex w-full p-2 items-center justify-center gap-2 rounded-xl transition-colors bg-white/95 hover:bg-[#ccc]"
              href="https://www.instagram.com/ucsc_nature"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="light:invert"
                src="/instagram.svg"
                alt="Instagram logo"
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="absolute mt-4 text-zinc-50">
            Stay up to date on Instagram
          </div>
        </div>  
      </main>
    </div>
  );
}
