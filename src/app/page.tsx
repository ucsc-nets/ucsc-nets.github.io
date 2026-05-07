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
            Treeneets at <br />
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
            <span className="text-sm font-normal text-zinc-200">Book and find freein-person lessons. Learn how to weave and maintain a treenet</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-1 hover:text-white hover:scale-105 transition-all duration-200 bg-black/20 hover:bg-black/25 px-6 py-5 rounded-3xl backdrop-blur-lg border border-white/10"
          >
            <span className="-mt-1 text-4xl font-medium text-white">Contact</span>
            <span className="text-sm font-normal text-zinc-200">For any reason or inquiry</span>
          </Link>

        </div>

        <div className="w-screen sm:max-w-4/5 md:max-w-3/5 mt-20 mb-20 sm:rounded-3xl bg-black/50 backdrop-blur-lg border-b border-t sm:border border-white/10 flex items-center flex-col">
          <h1 className="text-zinc-50 text-4xl font-serif font-semibold px-6 pt-8 pb-5">
            Information
          </h1>
          <p className="text-md px-8 py-4 border-t border-white/50">
            We are a group of students located at the University of California, Santa Cruz (otherwise unaffiliated)
            creating treenets, spacenets, and spreading the culture of weaving. We want to make weaving accessible to as many people as possible.
            All of our lessons are <b className="font-semibold underline decoration-1 underline-offset-3">FREE</b> and you can book a time at your convenience.
          </p>
          <h3 className="text-xl font-medium py-2">
            Our Goals:
          </h3>
          <ol className="text-lg text-zinc-300 list-decimal list-inside space-y-1 px-8">
            <li className="text-zinc-50">
              Create and cultivate a community of weavers in Santa Cruz
            </li>
            <li className="text-zinc-50 mt-4">
              Restore and reinforce the historical culture of treenets in Santa Cruz
            </li>
            <li className="text-zinc-50 mt-4">
              Share insights; offer guidance; teach everything we've learned from experience
            </li>
            <li className="text-zinc-50 mt-4">
              Become authorized by the university and weave official treenets (hopefully)
            </li>
            <li className="text-zinc-50 mt-4">
              Weave huge treenets with everyone who wants to get involved
            </li>
          </ol>
          <p className="m-8 mt-6">
            Through our educational efforts we hope to bring treenets back to Santa Cruz where they originate.
          </p>
          <span className="w-full h-0 py-4 border-t border-white/50"/>
          <h1 className="text-2xl sm:text-3xl font-medium justify-center">
            Regarding Publicity of Locations
          </h1>
          <p className="text-md px-8 my-4 mb-8">
            Unfortunately, we cannot publicly disclose the locations of any treenets. 
            Public treenets around Santa Cruz are rapidly cut down once their location becomes widely known.
            We spend hundreds of hours weaving each treenet, and seeing our work get destroyed
            overnight is devastating.
            <br/>
            <br/>
            To preserve and extend the lifespan of our treenets, we must limit who knows
            where our nets are located. To reiterate, we unfortunately have to apply scrutiny
            over who we can trust with knowledge of any locations.
            <br/>
            <br/>
            Currently, the best way to access our nets is by learning to weave. All large projects are reserved for
            advanced and hands-on classes, although intermediate projects may take students to works in progress.
            We plan to host tours and provide greater public access to our projects in the future.
          </p>
          <p className="text-md px-8 my-4 mb-8 text-right">
            We ask that if you find any treenets throughout your travels, please respect the weavers
            by keeping their locations secret.
            <br/>
            <br/>
            Thank you,<br/>
            Weavers of Santa Cruz
          </p>
        </div>
      </main>
    </div>
  );
}
