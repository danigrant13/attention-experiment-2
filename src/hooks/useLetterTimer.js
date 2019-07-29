import {useState, useEffect} from "react";
import {head} from "ramda";

const useLetterTimer = (letters) => {
  const numLetters = letters.length
  const [letter, setLetter] = useState({ letter: head(letters), index: 0 });

  const letterTimeout = (letterNow) => {
    setTimeout(() => {
      const nextLetter = letterNow.index + 1;
      if (nextLetter !== numLetters) {
        setLetter({ letter: letters[nextLetter], index: nextLetter });
      } else {
        setLetter({ letter: null, index: null })
      }
    }, 200);
  };

  useEffect(() => {
    if (letter.letter != null) {
      letterTimeout(letter);
    }
  }, [letter]); // eslint-disable-line

  return letter.letter
};

export default useLetterTimer;
