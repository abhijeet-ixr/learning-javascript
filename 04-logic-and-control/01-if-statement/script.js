console.clear();
console.log("If Statement");

// if block executes on truthy values
if (true) {
  console.log("It is true");
}

if (false) {
  console.log("This is false");
}

// if...else
if (10 > 5) {
  console.log(true);
} else {
  console.log(false);
}

// shorthand
if (10 > 5) console.log(true);

// if...else...if
const hrs = new Date().getHours();
if (hrs < 12) {
  console.log("Morning");
} else if (hrs < 18) {
  console.log("Afternoon");
} else {
  console.log("Good Night");
}

// Nested if
if (hrs < 12) {
  if (hrs < 8) {
    console.log("Wake up");
  }
  console.log("Morning");
} else if (hrs < 18) {
  if (hrs < 16) {
    console.log("Afternoon");
  } else {
    console.log("Good Evening");
  }
} else {
  console.log("Good Night");
}

// switch
switch (true) {
  case hrs < 12:
    console.log("Morning");
    break;
  case hrs < 18:
    console.log("Evening");
    break;
  default:
    console.log("Night");
}
