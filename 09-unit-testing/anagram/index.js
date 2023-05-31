module.exports = function (str1, str2) {
  const firstCharMap = buildCharMap(str1);
  const secondCharMap = buildCharMap(str2);

  if (Object.keys(firstCharMap).length !== Object.keys(secondCharMap).length) {
    return false;
  }

  for (let char in firstCharMap) {
    if (firstCharMap[char] !== secondCharMap[char]) {
      return false;
    }
  }

  return true;
};

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
