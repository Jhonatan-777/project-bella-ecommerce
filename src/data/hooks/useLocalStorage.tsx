import { useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(item);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(item, JSON.stringify(newValue));
  };

  return [value, updateLocalStorage] as const;
}
