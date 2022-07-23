// // const msg = "Hello World";
// for (var i = 0; i < 3; i++) {
//   console.log(i);
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
//   console.log("I am at end" + i);
// }

// console.log(i);

// let name1 = "Abhishek";
// let name2 = false;

// console.log("Kumar" || name1);

// let y = "abhishek";
// var y;
// console.log(y);

// let x = 0;
// let y = x++;
// y = x;
// x = x + 1;
// console.log(x);
// console.log(y);

// Swaping of values

// let firstName = "Abhishek";
// let lastName = "Kumar";
// let x;
// x = firstName;
// firstName = lastName;
// lastName = x;

// console.log(firstName);
// console.log(lastName);

// let name1 = "Abhishek";

// switch (name1) {
//   case "Abhoshel":
//     console.log("Not found");
//     break;
//   case "Abhishek":
//     console.log("fOUND");
//     break;
//   default:
//     console.log("default");
// }

// let person = ["abhishek", "Annat", "Harsh"];

// for (let val of person) console.log(val.indexOf("a"));

// function circleArea(radius) {
//   return {
//     radius,
//     area() {
//       console.log(radius * radius * 3.14);
//     },
//   };
// }
// const circle = circleArea(1);
// console.log(circle);

function add(a, b) {
  return a + b;
}

function memoize(fnc) {
  const caches = new Map();
  console.log(caches);
  return function (...args) {
    if (args.length == 1) return args[0];
    let key = args.toString();
    let swapKeys = args[1].toString() + "," + args[0].toString();
    if (caches.has(swapKeys)) {
      return caches.get(swapKeys);
    } else if (caches.has(key)) {
      return caches.get(key);
    }
    caches.set(key, fnc(...args));
    return caches.get(key);
  };
}

const sumM = memoize(add);

console.log(sumM(2, 3));
console.log(sumM(9, 3));
console.log(sumM(10));
console.log(sumM(10, 3));
console.log(sumM(3, 10));
console.log(sumM(9, 3));
console.log(sumM(3, 2));
