import Cookies from 'js-cookie';

/**
 * Sets a cookie with a specified key and value.
 *
 * @param cookieKey - The key for the cookie.
 * @param value - The value to set for the cookie.
 */
export function setCookie(cookieKey: string, value: string): void {
  if (cookieKey && value !== undefined) {
    Cookies.set(cookieKey, value);
  } else {
    console.warn('Invalid key or value. Cookie was not set.');
  }
}

/**
 * Gets the value of a cookie by its key.
 *
 * @param cookieKey - The key for the cookie.
 * @returns The value of the cookie or null if not found.
 */
export function getCookie(cookieKey: string): string | null {
  return Cookies.get(cookieKey) || null;
}

/**
 * Removes a cookie by its key.
 *
 * @param cookieKey - The key for the cookie.
 */
export function removeCookie(cookieKey: string): void {
  Cookies.remove(cookieKey);
}
