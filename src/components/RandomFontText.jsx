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


const RandomFontText = ({ children }) => {
  const str = typeof children === 'string' ? children : String(children);
  const [typedText, setTypedText] = useState("");
  const [letterFonts, setLetterFonts] = useState([]);
  const [finishedTyping, setFinishedTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setTypedText(str.slice(0, i + 1));
      i++;
      if (i === str.length) {
        clearInterval(typingInterval);
        setFinishedTyping(true);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [str]);

  useEffect(() => {
    if (!finishedTyping) return;
    const fontInterval = setInterval(() => {
      setLetterFonts(Array.from(str).map(() => fonts[Math.floor(Math.random() * fonts.length)]));
    }, 250);
    return () => clearInterval(fontInterval);
  }, [finishedTyping, str]);

  return (
    <span>
      {Array.from(typedText).map((char, i) => (
        <span key={i} className={finishedTyping ? letterFonts[i] : ""}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default RandomFontText;