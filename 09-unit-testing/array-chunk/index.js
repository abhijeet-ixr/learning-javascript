module.exports = function (array, chunkSize) {
  const chunked = [];

  for (let item of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === chunkSize) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  return chunked;
};
