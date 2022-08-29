import { useState } from "react";

function usePersist(incomingKey, initVal) {
  const key = "hooks:" + incomingKey;
  const value = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initVal
  }

  const setValue = (val) => {
    setSavedValue(val)
    localStorage.setItem(key, JSON.stringify(val))
  }

  const [savedValue, setSavedValue] = useState(value)

  return [savedValue, setValue]
}


export default usePersist;