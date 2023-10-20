import { useEffect, useState } from "react";

function useTruncate(ref, text) {
  const [shortTitle, setShortTitle] = useState(text);

  useEffect(() => {
    const textElement = ref.current.children[0];
    if (ref.current && textElement.innerText) {
      const containerHeight = ref.current.clientHeight;
      const textHeight = textElement.offsetHeight;
      let newTitle = shortTitle;
      if (textHeight > containerHeight) {
        newTitle = shortTitle.replace(/\W*\s(\S)*$/, "...");
      }
      setShortTitle(newTitle);
    }
  }, [ref.current, shortTitle]);

  return shortTitle;
}

export default useTruncate;
