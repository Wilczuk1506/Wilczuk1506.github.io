import AboutMe from "./Sections/AboutMe";
import Home from "./Sections/Home";
import React, { useEffect, useRef } from "react";

const App = () => {

  useEffect(() => {
    const container = document.querySelector("main");

    const handleWheel = (e) => {
      // Detect if it's a mouse wheel (not touchpad)
      const isMouse = Math.abs(e.deltaY) >= 100;

      if (isMouse) {
        e.preventDefault();
        container.scrollBy({
          top: e.deltaY,
          behavior: "smooth",
        });
      }
      // If it's a touchpad, let the browser handle it naturally
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="h-screen overflow-y-scroll font-mono text-white snap-y snap-mandatory no-scrollbar libertinus-sans-regular">
      <Home refs={{ aboutMe: aboutRef, projects: projectsRef, contact: contactRef}} />
      <AboutMe sectionRef={aboutRef}/>
      <section ref={projectsRef} className="h-screen snap-start bg-fuchsia-500">Section 3</section>
      <section ref={contactRef} className="h-screen border-orange-500 snap-start">Section 4</section>
    </main>
  );
}

export default App;