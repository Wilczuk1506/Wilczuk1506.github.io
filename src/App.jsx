import RandomFontText from "./components/RandomFontText";
import React, { useState } from "react";


import TypingText from "./components/TypingText";

const App = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <main className="h-screen overflow-y-scroll font-mono text-white snap-y snap-mandatory no-scrollbar libertinus-sans-regular">
      <section className="flex flex-col items-center justify-center h-screen snap-start bg-gray-950">
        <header className="mb-4 leading-relaxed text-center text-7xl h-60">
          <TypingText onTypingDone={() => setTypingDone(true)}>Hi, Hello, Witam</TypingText>
          <br />
          {typingDone && <RandomFontText>I'm Wilczuk</RandomFontText>}
        </header>
        <nav className="flex flex-row justify-center border-4 border-gray-800 rounded-full overflow-hidden mx-auto w-[52vw] h-24">
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-200 ease-in-out">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pl-8">About</span>
          </div>
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-200 ease-in-out border-l-4 border-r-4 border-gray-800">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1">Projects</span>
          </div>
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-gray-800/40 cursor-pointer transition-colors duration-200 ease-in-out">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pr-8">Contact</span>
          </div>
        </nav>
      </section>
      <section className="h-screen snap-start bg-emerald-500">Section 2</section>
    </main>
  );
}

export default App;