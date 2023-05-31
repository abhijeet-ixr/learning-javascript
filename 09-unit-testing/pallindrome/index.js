//solution 1
// module.exports = function(str){
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

//solution 2
module.exports = function (str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - (index + 1)];
  });
};
