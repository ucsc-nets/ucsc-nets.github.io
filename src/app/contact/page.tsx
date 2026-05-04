import ContactForm from "./components/contactForm";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen">
            <Image
                src="/images/big-treenet.webp"
                alt="Background Treenet Image"
                fill
                className="object-cover z-0 fixed"
                priority
            />
            <div className="my-12 ml-30 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    Contact Us&ensp;&ndash;&ensp;Learn, Weave, Report Damage 
                </h1>
            </div>

            <ContactForm/>

            <div className="z-40 flex items-center justify-center sm:text-2xl md:text-3xl font-medium">
                <div className="bg-black/50 backdrop-blur-xs w-1/3 flex flex-col justify-center items-center p-6 my-8 border border-white/20 rounded-md">
                    Reach Out on Instagram
                    <div className="flex gap-8 flex-row mt-4">
                        <a
                            className="flex w-full p-2 items-center justify-center gap-2 rounded-xl bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                            href="https://www.instagram.com/ucsc.nets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Instagram logo"
                                width={32}
                                height={32}
                            />
                        </a>
                        <a
                            className="flex w-full p-2 items-center justify-center gap-2 rounded-xl bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
                            href="https://www.instagram.com/ucsc_nature"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Instagram logo"
                                width={32}
                                height={32}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}