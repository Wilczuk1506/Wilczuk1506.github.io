import RandomFontText from "./components/RandomFontText";

const App = () => {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar text-white">
      <section className="snap-start h-screen bg-gray-950 flex flex-col items-center justify-center">
        <header className="mb-4 text-center">
          Hi, Hello, Witam
          <br />
          <RandomFontText>I'm Wilczuk</RandomFontText>
        </header>
        <nav className="flex flex-row justify-center border border-white rounded-lg overflow-hidden mx-auto w-[23vw]">
          <div className="transform skew-x-[20deg] flex items-center justify-center w-[8vw] min-w-[8vw] hover:bg-black/10 cursor-pointer border-white">
            <span className="inline-block transform -skew-x-[20deg]">test</span>
          </div>
          <div className="transform skew-x-[20deg] border-l border-white flex items-center justify-center w-[8vw] min-w-[8vw] hover:bg-black/10 cursor-pointer">
            <span className="inline-block transform -skew-x-[20deg]">test</span>
          </div>
          <div className="transform skew-x-[20deg] border-l border-white flex items-center justify-center w-[8vw] min-w-[8vw] hover:bg-black/10 cursor-pointer">
            <span className="inline-block transform -skew-x-[20deg]">test</span>
          </div>
        </nav>
      </section>
      <section className="snap-start h-screen bg-emerald-500">Section 2</section>
    </main>
  )
}

export default App;