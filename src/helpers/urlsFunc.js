export const getCountValueFromUrl = (url, replaceStr) => {
  const newUrl = url.replace(replaceStr, '');
  const counter = newUrl.replace('/', '');

  return Number(counter);
};
