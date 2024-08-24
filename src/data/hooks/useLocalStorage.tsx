import { useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(item);
        return storedValue ? JSON.parse(storedValue) : initialValue;
      } catch (error) {
        console.error("Error parsing localStorage value", error);
        return initialValue;
      }
    }
    return initialValue;
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(item, JSON.stringify(newValue));
      } catch (error) {
        console.error("Error setting localStorage value", error);
      }
    }
  };

  return [value, updateLocalStorage] as const;
}
