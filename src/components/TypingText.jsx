import React, { useState, useEffect } from "react";

const TypingText = ({ children, onTypingDone }) => {
  const [typedText, setTypedText] = useState("");

    let speed = 100;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(children.slice(0, i + 1));
      i++;
      if (i === children.length) {
        if (onTypingDone) {
          onTypingDone();
        }
      };
    }, speed);
    return () => clearInterval(interval);
  }, [children]);

  return <span>{typedText}</span>;
};

export default TypingText;
