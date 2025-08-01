import RandomFontText from "./components/RandomFontText";
import React, { useState } from "react";


import TypingText from "./components/TypingText";

const App = () => {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar text-white font-mono libertinus-sans-regular">
      <section className="snap-start h-screen bg-gray-950 flex flex-col items-center justify-center">
        <header className="mb-4 text-center text-7xl leading-relaxed h-60">
          <TypingText onTypingDone={() => setTypingDone(true)}>Hi, Hello, Witam</TypingText>
          <br />
          {typingDone && <RandomFontText>I'm Wilczuk</RandomFontText>}
        </header>
        <nav className="flex flex-row justify-center border-4 border-gray-900 rounded-full overflow-hidden mx-auto w-[52vw] h-24">
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-black/10 cursor-pointer">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pl-8">About</span>
          </div>
          <div className="transform skew-x-[20deg] border-l-4 border-r-4 border-gray-900 flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-black/10 cursor-pointer">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1">Projects</span>
          </div>
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[18vw] min-w-[18vw] h-24 hover:bg-black/10 cursor-pointer">
            <span className="inline-block transform -skew-x-[20deg] text-3xl tracking-widest -translate-y-1 pr-8">Contact</span>
          </div>
        </nav>
      </section>
      <section className="snap-start h-screen bg-emerald-500">Section 2</section>
    </main>
  );
}

export default App;