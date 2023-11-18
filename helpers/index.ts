export const setLocalStorage = <T>(id: string, data: T) =>
  typeof window !== undefined && localStorage?.setItem(id, JSON.stringify(data));

export const getLocalStorage: <T>(id: string) => T | undefined = <T>(id: string): T | undefined => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(id);
    return value ? (JSON.parse(value) as T) : undefined;
  }
  return undefined;
};

export const removeFromLocalStorage: (key: string) => void = (key: string) =>
  typeof window !== undefined && localStorage?.removeItem(key);
