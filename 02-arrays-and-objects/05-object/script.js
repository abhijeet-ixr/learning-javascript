console.clear();
console.log("Object");

// object holds data as key-value
const user = {
    firstName: 'Abhijeet',
    lastName: 'Jaiswal',
    website: 'abhijeetjaiswal.in',
    canVote: true,
    age: 30,
    greet: function() {
        return `My Name is: ${this.firstName} ${this.lastName}`
    }
}

console.log(user.firstName);
console.log(user['website']);
console.log(user.greet());

user.firstName = 'Advik';
console.log(user.greet());

delete user.canVote;
console.log(user);

// not recommended but handy in edge cases
user['can vote'] = false;
console.log(user['can vote']);

// More on console can be read at:
// https://www.w3schools.com/js/js_objects.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
