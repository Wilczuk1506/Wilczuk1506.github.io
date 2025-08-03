import RandomFonts from "../components/RandomFonts";
import TypingRandomText from "../components/TypingRandomText";
import TypingText from "../components/TypingText";
import React, { useState } from "react";

const Home = () => {
    const [typingDone, setTypingDone] = useState(false);

    const [about, setAbout] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);

    

    return (
        <section className="flex flex-col items-center justify-center h-screen snap-start bg-gray-950">
            <header className="mb-4 leading-relaxed text-center text-7xl h-60">
                <TypingText onTypingDone={() => setTypingDone(true)}>Hi, Hello, Witam</TypingText>
                <br />
                {typingDone && <TypingRandomText>I'm Wilczuk</TypingRandomText>}
            </header>
            <nav className="flex flex-row justify-center border-4 border-gray-800 rounded-full overflow-hidden mx-auto w-[52vw] h-24">
                <div onMouseEnter={() => setAbout(true)} onMouseLeave={() => setAbout(false)} className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-500 ease-in-out">
                    <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pl-8">
                        {about ? <RandomFonts>About Me</RandomFonts> : "About Me"}
                    </span>
                </div>
                <div onMouseEnter={() => setProjects(true)} onMouseLeave={() => setProjects(false)} className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-500 ease-in-out border-l-4 border-r-4 border-gray-800">
                    <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1">
                        {projects ? <RandomFonts>Projects</RandomFonts> : "Projects"}
                    </span>
                </div>
                <div onMouseEnter={() => setContact(true)} onMouseLeave={() => setContact(false)} className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-500 ease-in-out">
                    <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pr-8">
                        {contact ? <RandomFonts>Contact</RandomFonts> : "Contact"}
                    </span>
                </div>
            </nav>
        </section>
    );
}

export default Home;