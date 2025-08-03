import React, { useState, useEffect } from "react";

const fonts = [
  "font-sans",
  "font-serif",
  "font-mono",
  "font-thin",
  "font-extralight",
  "font-light",
  "font-normal",
  "font-medium",
  "font-semibold",
  "font-bold",
  "font-extrabold",
  "font-black",
  "font-['Arial']",
  "font-['Verdana']",
  "font-['Tahoma']",
  "font-['Trebuchet_MS']",
  "font-['Times_New_Roman']",
  "font-['Georgia']",
  "font-['Garamond']",
  "font-['Courier_New']",
  "font-['Brush_Script_MT']",
  "font-['Impact']",
  "font-['Comic_Sans_MS']",
  "font-['Lucida_Console']",
  "font-['Palatino_Linotype']",
  "font-['Book_Antiqua']",
  "font-['Candara']",
  "font-['Optima']",
  "font-['Futura']",
  "font-['Franklin_Gothic_Medium']",
  "font-['Gill_Sans']",
  "font-['Century_Gothic']",
  "font-['Copperplate']",
  "font-['Papyrus']",
];

const RandomFonts = ({ children }) => {
  const [letterFonts, setLetterFonts] = useState([]);

  useEffect(() => {
    const updateFonts = () => {
      const newFonts = Array.from(children).map(() => {
        const randomIndex = Math.floor(Math.random() * fonts.length);
        return fonts[randomIndex];
      });
      setLetterFonts(newFonts);
    };

    updateFonts(); // initial run
    const interval = setInterval(updateFonts, 100); // change every 500ms

    return () => clearInterval(interval);
  }, [children]);

  return (
    <span>
      {Array.from(children).map((char, i) => (
        <span key={i} className={letterFonts[i]}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default RandomFonts;