console.clear();
console.log("Date Object");

let d = new Date();

console.log(d);
console.log(d.toString());

console.log( new Date(2022, 0, 2));
console.log( new Date('2022-01-02'));

// time passed in ms since epoch  Jan 1 1970
console.log(Date.now());
console.log(d.getTime());

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(Intl.DateTimeFormat('en-IN').format(d));
console.log(Intl.DateTimeFormat('en-US').format(d));
console.log(Intl.DateTimeFormat('default').format(d));
console.log(d.toLocaleString('default'));

// More readings:
// https://www.w3schools.com/js/js_dates.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
