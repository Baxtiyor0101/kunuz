// function findSom(a, b) {
//   if ((a % 2 == 0 && b % 2 != 0) || (a % 2 != 0 && b % 2 == 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findSom(4, 3));

// function ff() {
//   return a % 2 !== b % 2;
// }
// // let a = 34;
// // // ==
// // if (a !== "34") {
// //   console.log("this is 23");
// // }

// // // = == ===
// // // // != !==

// let salaries = {
//   John: 100,
//   Pete: 50,
//   Mary: 250,
// };
// let arrkey = Object.keys(salaries);
// let arrval = Object.values(salaries);
// let max = Math.max(...arrval);
// let inx = arrval.indexOf(max);
// let ism = arrkey[inx];
// let last = `${ism}ning qiymati katta va u ${max}`;
// console.log(last);
// // function tuzing  Peteniki eng katta 300

// let arr = [10, 30, 50];
// // shu yerda destructuring yordamida arrray elemntlarini almashtring
// // console.log(arr); // [10,50,30]
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr);
/////////////////////////

// clousure
// let a = 7;
// function somth() {
//   var b = 9;
//   console.log(a);
//   function findSom() {
//     console.log(b);
//   }
//   findSom();
// }

// somth();
// findSom();

// let count = function () {
//   let counter = 0;
//   return (counter += 1);
// };
// count();
// count();

// let count = (function () {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     console.log(counter);
//   };
// })();
// // count();
// /////////////////////////call
// let obj = {
//   name: "jasur",
//   func: function () {
//     console.log(this.name);
//   },
// // };
// // obj.func();

// let myMethods = {
//   printName(city, age) {
//     console.log(
//       "Employee's name is " + this.name + " city " + city + " age " + age
//     );
//   },
//   printPosition() {
//     console.log("Employee's position is " + this.position);
//   },
// };

// let emp1 = { name: "Umar", position: "Dasturchi" };
// let emp2 = { name: "Josh", position: "Muhandis" };
// myMethods.printName.call(emp2, "tashkent", 23);
// // myMethods.printPosition.apply(emp2);

// function sayAge() {
//   console.log(this.age);
// }
// let myFn = sayAge.bind({ age: 19 });
// sayAge();
// myFn();

// function myFunc() {}
// let myFunc2 = function () {};
// let myFunc3 = () => {};

// let obj = {
//   name: "jasur",
//   func: function () {
//     console.log(this.name);
//   },
// };
// obj.func();

// let declaration = function () {
//   console.log("this is just text");
// };

// declaration();
// {
//   let a = 4;
// }
// const b = "text";

// let r = 9;
// r = 8;
// console.log(r);

///////////////
// console.log(d);
// var d;

// bitta object yasash kk uning ichida ikkita method bor
// uning ichida this kalit sozi yordamida name va title xossalari chaqirilgan
//

// let obj = {
//   func: function (...args) {
//     console.log(this.name, this.title, this.meth(), args[1]);
//   },
// };

// let newObj = {
//   name: "jasur",
//   title: "dasturchi",
//   meth: function () {
//     return "something";
//   },
// };

// obj.func.call(newObj, 22, 33, 3, 4, 5, 7, 8);

// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// // [1, 2, 3, 4, 5, 6, 7, 1, 3, 5, 7];

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let newArr = arr.filter((val) => arr.indexOf(val) % 2 == 0);

// let arrConcat = arr.concat(newArr);
// console.log(arrConcat);

function rrr(a, b) {
  let ss = a.split("");
  let ss2 = b.split("");
  let newarr1 = ss
    .map((val) => Number(val))
    .filter((value) => value * 0 == 0 && value != " ")
    .join("");
  let newarr2 = ss2
    .map((val) => Number(val))
    .filter((value) => value * 0 == 0 && value != " ")
    .join("");
  console.log((newarr2 - newarr1) * 24);
}
rrr("23octabr", "octobrning 25 inchisi");
