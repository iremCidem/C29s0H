export const setLocalStorage = <T>(id: string, data: T) =>
  typeof window !== undefined && localStorage?.setItem(id, JSON.stringify(data));

export const getLocalStorage: <T>(id: string) => T | undefined = <T>(id: string): T | undefined => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem(id);
    return value ? (JSON.parse(value) as T) : undefined;
  }
  return undefined;
};
export const setSessionStorage = <T>(id: string, data: T) =>
  typeof window !== undefined && sessionStorage?.setItem(id, JSON.stringify(data));

export const getSessionStorage: <T>(id: string) => T | undefined = <T>(id: string): T | undefined => {
  if (typeof window !== 'undefined') {
    const value = sessionStorage.getItem(id);
    return value ? (JSON.parse(value) as T) : undefined;
  }
  return undefined;
};
