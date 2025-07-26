import { useEffect } from "react";

export const useInterval = (callback, delay) => {
  useEffect(() => {
    if (typeof callback !== 'function') {
      console.warn('useInterval: callback is not a function');
      return;
    }
    
    const id = setInterval(callback, delay);
    
    return () => clearInterval(id);
  }, [callback, delay]);
}