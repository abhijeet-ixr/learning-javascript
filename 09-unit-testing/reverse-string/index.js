// solution 1
// module.exports = function reverseString(string) {
//   return string.split('').reverse().join('');
// };

// solution 2
// module.exports = function reverseString(string) {
//   let reversed = '';

//   for (let char of string) {
//     reversed = char + reversed;
//   }
//   return reversed;
// };

// solution 3
module.exports = function reverseString(string) {
  return string.split('').reduce((prev, next) => next + prev, '');
};
