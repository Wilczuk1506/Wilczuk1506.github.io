import { useState, useEffect } from "react";

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


function RandomFontText({ children }) {
  const str = typeof children === 'string' ? children : String(children);
  const [letterFonts, setLetterFonts] = useState(() =>
    Array.from(str).map(() => fonts[Math.floor(Math.random() * fonts.length)])
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLetterFonts(Array.from(str).map(() => fonts[Math.floor(Math.random() * fonts.length)]));
    }, 250);
    return () => clearInterval(interval);
  }, [str]);

  return (
    <span>
      {Array.from(str).map((char, i) => (
        <span key={i} className={letterFonts[i]}>{char}</span>
      ))}
    </span>
  );
}

export default RandomFontText;