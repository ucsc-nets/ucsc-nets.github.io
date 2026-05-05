import Image from "next/image";

export default function LearnPage() {
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
                    <a
                        href="./contact"
                        target="_blank" 
                        rel="noopener noreferrer"
                        // Adding a subtle hover effect so users know it is clickable
                        className="hover:text-blue-600 transition-colors cursor-pointer font-semibold"
                    >
                    Contact Us
                    </a>
                    &nbsp;for in - person lessons
                </p>
            </div>

            <div className="mb-10 mx-16 relative z-20 bg-black/50 backdrop-blur-sm p-4 rounded-xl w-fit border border-white/10">
                <p className="text-2xl font-medium text-white tracking-tight">
                    We are working on creating lessons and instructional material. Please check back soon for online lessons and oportinuties to weave in person
                    
                </p>
                <br className="mt-2"/>
                <a href="/" className="text-white text-2xl font-light uppercase px-4 py-2 rounded-md hover:underline hover:text-(--headerHover) hover:font-semibold">
                    Home
                </a>
            </div>
        </main>
    )
}