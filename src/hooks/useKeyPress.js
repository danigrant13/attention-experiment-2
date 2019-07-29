import { useCallback, useEffect, useState } from "react";
import {__, either, includes, isEmpty, thunkify} from "ramda";

import {isPresent} from "../utils/presence";

const useKeyPress = (targetKeys = [], callback) => {
  const [keyPressed, setKeyPressed] = useState("");

  const isValidKey = either(
    thunkify(isEmpty)(targetKeys),
    includes(__, targetKeys),
  );

  const upHandler = useCallback(({ key }) => {
    if (isValidKey(key)) {
      setKeyPressed(key);
    }
  }, [isValidKey]);

  useEffect(() => {
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    if (isPresent(keyPressed)) {
      setKeyPressed("");
      callback(keyPressed);
    }
  }, [keyPressed]); // eslint-disable-line
};

export default useKeyPress;
