import Home from "./Sections/Home";
import React, { useEffect } from "react";

const App = () => {

  useEffect(() => {
    const container = document.querySelector("main");

    let scrollTimeout;
    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      clearTimeout(scrollTimeout);

      container.scrollBy({
        top: e.deltaY,
        behavior: "smooth",
      });

      // Optional: throttle scroll events
      scrollTimeout = setTimeout(() => { }, 100);
    }, { passive: false });

    return () => container.removeEventListener("wheel", () => { });
  }, []);



  return (
    <main className="h-screen overflow-y-scroll font-mono text-white snap-y snap-mandatory no-scrollbar libertinus-sans-regular">
      <Home />
      <section className="h-screen snap-start bg-emerald-500">Section 2</section>
      <section className="h-screen snap-start bg-fuchsia-500">Section 3</section>
      <section className="h-screen border-orange-500 snap-start">Section 4</section>
    </main>
  );
}

export default App;