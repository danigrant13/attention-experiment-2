import {useState, useEffect} from "react";

const useAfterTimeout = (timeout) => {
  const [isAfterTimeout, setIsAfterTimeout] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAfterTimeout(true);
    }, timeout)
  }, []); // eslint-disable-line

  return isAfterTimeout;
};

export default useAfterTimeout;
