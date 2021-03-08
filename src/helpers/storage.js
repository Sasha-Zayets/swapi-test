export const addToStorage = (key, value) => {
  const valueString = JSON.stringify(value);

  localStorage.setItem(key, valueString);
};

export const getFromStorage = (key) => {
  const result = localStorage.getItem(key);
  return JSON.parse(result);
};

export const removeFromStorage = (key) => localStorage.removeItem(key);
