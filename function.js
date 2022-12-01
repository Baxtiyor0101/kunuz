// Uyga vazifa

// 1)Lacetti 100km ga 10 litr benzin sarflaydi // 0.1l
// 2)Damas 100km ga 8 litr benzin sarflaydi  // 0.08l
// 2)Matiz 100km ga 7 litr benzin sarflaydi  // 0.07l

//  mashina modeli va km degan ikkita o'zgaruvchi, kiritlgan km ga qancha benzin ketishini topish kk
// Example: "Lacetti", "450km" => Lacetti 450 kmga 45 litr benzin sarflaydi.
// Example2: "Matiz", "50km") => Matiz 50 kmga 3.5 litr benzin sarflaydi

// let model = "Damas";
// let km = "100 km";
// let l; //?
// model;
// l =
//   model == "Lacetti"
//     ? Number.parseFloat(km) * 0.1
//     : model == "Damas"
//     ? Number.parseFloat(km) * 0.08
//     : model == "Matiz"
//     ? Number.parseFloat(km) * 0.07
//     : 0;

// if (model == "Lacetti") {
//   l = Number.parseFloat(km) * 0.1;
// } else if (model == "Damas") {
//   l = Number.parseFloat(km) * 0.08;
// } else if (model == "Matiz") {
//   l = Number.parseFloat(km) * 0.07;
// }

// console.log(l);

// Functions

// 1 function declaration
// 2 function expression
// 3 arrow function

// 1 function declaration
// a,b,c,.... bular functionnning parametrlari dep ataladi
// hohlagancha berish mumkun

// 3,4 parametrga beriladigan qiymatlar argument deyiladi va
// ular function chaqirilganda beriladi

// findMax();

// function findMax(a = 9, b = 6, y = 4) {
//   if (a > b) {
//     return a + y;
//   } else {
//     return b + y;
//   }
// }

// let result = findMax(5, 1, 4);
// console.log(result);
// findMax(67, 21, 89);

// // 2 function expression

// let findMax = function (a, b, c) {
//   return a + b + c;
// };
// findMax();
// console.log(findMax(1, 2, 3));

// 3 arrow function
// let findMax = (a, b, c) => {
//   return a * b * c;
// };

// let r = findMax(1, 2, 3);
// console.log(r);

//let var const

// const a = 7;
// {
//   var aaa = 6;
// }

// if (true) {
//   var v = 0;
//   console.log(v);
// }
// console.log(v);

// function ttt() {
//   var s = 8;
//   console.log(a);
//   console.log(s);
// }
// ttt();
// console.log(s);

// function aaa(r) {
//   console.log(r);
// }
// let d = 5;
// aaa(d);
////////////////////////////////
// function showMessage(text="iiiii") {
//   if (text === undefined) {
//     // if the parameter is missing
//     text = "empty message";
//   }
//   console.log(text);
// }
// showMessage(); // empty message
//////////////////////

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// function showOk() {
//   alert("You agreed.");
// }
// let showCancel = function () {
//   alert("You canceled the execution.");
// };
// console.log(showCancel);
// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);
////////////////////
// let s = 8;

// function sayHi() {
//   // ...
// }

// let sayHi = function () {
//   // ...
// };

// let fintMul = (a, b) => {
//   return a + b;
// };

// console.log(fintMul(2, 3));

// 1-misol
// function checkEquel(a, b) {
//   if (a == b) {
//     return "ikkalasi teng";
//   } else {
//     return "teng emas";
//   }
// }
// checkEquel(2, 3);
// console.log(checkEquel(2, 3));

// let checkEquel = function (a, b) {
//   if (a == b) {
//     return "ikkalasi teng";
//   } else {
//     return "teng emas";
//   }
// };
// console.log(checkEquel(2, 2));

// let a = 2;
// let b = 3;
// let c = 4;
// let d = 5;



// if (
//   (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) + Math.pow(d, 2)) % 2 ==
//   0
// ) {
//   console.log("yigindisi juft");
// } else {
//   console.log("yigindisi toq");
// }

