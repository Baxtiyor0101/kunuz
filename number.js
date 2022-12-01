// javascript bilan ulanishlari
// inline external

//     html fayl bilan js faylni ulashning 3 hil usuli bor
//   1)inliine bady tegining ichida script tegi ihida yoziladi yoziadi
//   2)internal head tegining ichida script tegi orqali yoziladi va uning js kod kiritiladi
//   3)external head tegi ichida script tegi yozilib unga external fayl manzili korsatiladi

///////////////////////
// number

// let a = Number.isInteger(45);
// console.log(a);
//Number.inInteger vazifasi numberning butun son yoki yoqligini aniqlab beradi

// console.log(Number.parseInt(41.11));

//Number.parseInt() vazifasi numberni butun qismini qaytaradi

// console.log(Number.parseFloat("tex55t"));

// Number.parseFloat() vazifasi string tipidagi numberlarni stringdan ajratib number tipiga otqaziin beradi

// console.log((43434.54245).toFixed());
console.log(Number(undefined));

// NaN not a number 45/0 ,"dd"

// TyperConversion  tipini ozgartirish
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number("10")); // 10
// console.log(Number("  10  ")); // 10
// console.log(Number("10.22")); // 10.22
// console.log(Number("10 33")); // NaN
// console.log(Number("john")); // NaN

// if else qisqacha

// let a = 9;
// if (a == 9) {
//   console.log("bu yerda a 9 ga teng");
// }
// console.log("hello");
// let a = 4;
// if (a == 9) {
//   console.log("bu yerda a 9 ");
// } else {
//   console.log("bu yerda a 9 emas ");
// }
// agar if shartiga togri kelsa if ichidagi kod ishlidi
// agar if shartiga togri kelmasa else ichidagi kod ishlidi

// = == ===
// = bu ozgaruvciga qiymat yuklash uchun ishlatiladi
// == shart tekshirilayotganda ishlatiladi va u tipiga qaramaydi
// if (10 == "10") {
//   console.log("teng");
// }

// === tenglik number tipiga otqazilgan qiymatni ham va ularni tipini ham taqqoslaydi
// if (true === "true") {
//   console.log("teng");
// } else {
//   console.log("teng emas");
// }

console.log(Number(null));
// Math methods
// console.log(100 + Math.random() * 10);
