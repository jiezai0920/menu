export function setStorage(key, value) {
  if (typeof window !== 'undefined' && !window.localStorage) {
    return;
  }
  localStorage.setItem(key, value);
}

export function getStorage(key) {
  if (typeof window !== 'undefined' && !window.localStorage) {
    return false;
  }
  return localStorage.getItem(key);
}
