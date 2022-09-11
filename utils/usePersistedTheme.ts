import { useState, useEffect } from "react";

function usePersistedTheme(key: string, initialValue: any) {
  const [state, setState] = useState(() => {
    
    if (typeof window === "undefined") {
      return
    } else {
      const storageValue = localStorage.getItem(key);
          if (storageValue) {
            return JSON.parse(storageValue);
          } else {
            return initialValue;
          }
    }

  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}

export default usePersistedTheme