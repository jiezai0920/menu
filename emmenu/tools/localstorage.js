export function setStorage(key, value) {
  if (!window.localStorage) {
    return;
  }
  localStorage.setItem(key, value);
};

export function getStorage(key) {
  if (!window.localStorage) {
    return;
  }
  return localStorage.getItem(key);
};
