// let num = 4;
// if (num % 2) {
//   console.log("toq son");
// } else {
//   console.log("juft son");
// }

// // Falsy values
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(-0));
// console.log(Boolean(0n));
// console.log(Boolean(false));

// Truthy vales
// Boolean(true); // true
// Boolean("hi "); // true
// Boolean(-2332); // true
// Boolean([]); // true
// Boolean([0]); // true
// Boolean([1]); // true
// Boolean({}); // true
// Boolean({ a: 1 }); // true

// Math methods
// console.log(Math.pow(2, 5));
// Math.pow() ikkita qiymay qabul qiladi birinchi qiymat son ikkinchi son daraja

// console.log(Math.sqrt(4));
// Math.sqrt() bitta argument olarkan oshaning ildizini chiqari beradi

// console.log(Math.cbrt(18));
// math.cbrt bitta argument oladi va oshaning cubinchi ildizda chiqarib beradi

// console.log(Math.pow(64, 1 / 6));
// 4 va undan yuqori ildizdan chiqarish uchun powdan foydalaniladi

// let arr = [32, 3, 4, 5, 6, 6, 78, 77];
// console.log(Math.max(7, 5, 1, 5, 4, 7, 9865));
// console.log(Math.max(...arr));
// console.log(Math.max(32, 3, 4, 5, 6, 6, 78, 77));
// Math.max() hohlagancha argument olishi mn ularning ichida eng kattasini chiqarib beradi

// console.log(Math.min(6, 5, 4, 4, 3, 2, 2));
// console.log(Math.min(...arr));
// Math.min() hohlagancha argument olishi mn ularning ichida eng kichigini chiqarib beradi

// console.log(Math.abs(-23));
// Math.abs(-23) vaifasi musbat chiqaradi har doim (modul)

// console.log(Math.round(45.144));
// Math.round yaxlitlab beradi

// console.log(Math.ceil(41.0000000001));
//  MAth.ceil tepadagi sonni chiqarib beradi

// console.log(Math.floor(210.9999991));

// Math.floor esa faqat butun qismini chiqrib beradigan method
// let a = 200;
// let b = 300;

// let c = Number.parseInt(a + (b - a) * Math.random());
// console.log(c);

// // let b= randomIntager

// &&
// && bu oparator birinchi kelgan falsy
//  valueni chiqaradi agar falsy value bolmasa
//  oxirgi qiymatni chiqaradi
// console.log(8 && 5 && 7);

// ||
// || bu operator truthy valueni qidiradi
// console.log(null || 0 || 0 || undefined);

// let a = 8;
// if (a > 2 && a < 6) {
//   console.log("togri");
// }

// let a = (12 && 21) || (0 && 4 && 9) || (3 && false) || (6 && 5 && true);
// a = 21 || 0 || false || true;
//
// let b = 0 || (6 && 8 && false && 1);
// console.log(b);

// &&(AND) operatori shartda qiymatlarning orasida birinchi kelgan
// falsy valeni qidiradi agar ularning ichida falsy value bolmasa
// oxirgi kelgan tryuthy valueni oladi
// let c = 3 && 5 && 6 && 2 && 3; // 3

// ||(OR) operatori shartda qiymatlarning orasida birinchi kelgan
// truthy valeni qidiradi agar ularning ichida truthy value bolmasa
// oxirgi kelgan false valueni oladi
// let c = 0 || 5 || false || 2 || 3; // 3

// ??(nullish coalascing operator) bu operator birinnchi kelgan qiymati null yoki undefined
// bolmagan qiymatni oladi agar hammasi undefined yoki nulllardan
// iborat bolsa oxirgi kelgan null yoki undefined ni oladi

// let r, t;

// console.log(r);
// let a = r ?? t ?? null;
// console.log(a);

// if
// else
// else if

// let friut = "olma";

// if (friut == "olma") {
//   console.log("olma 10000");
// } else if (friut == "limon") {
//   console.log("limon 15000");
// } else if (friut == "banan") {
//   console.log("banan 25000");
// } else {
//   console.log("biz bu mevani olmaymiz");
// }

// Comparisions > < <= >= !=
// > katta belgisi
// console.log(2 > 4);
//< kichik bekgisi
// console.log(2 < 4);
// <= kichik yoki teng
// console.log(4 <= 2);
// >= katta yoki teng
// console.log(3 >= 7);
// != !== // == ===
// console.log(2 !== "2");

// console.log(Number.parseFloat("2 a") > 1);
// stringning ichida number bolsa taqaoslash operatori uni
//numberga aylantrib oladi

// undefined null ular faqat bir biriga == da teng
// console.log(undefined >= null);
// console.log(undefined == 0);
// console.log(Number(undefined));

// null 0
// alert("null kjj>jhbjbh 0"); // (1) false
// alert(null == 0); // (2) false
// alert(null >= 0); // (3) true

// switch

// let friut = "nghg";
// switch (friut) {
//   case "olma":
//     console.log("olma 10000");
//     break;
//   case "limon":
//     console.log("limon 15000");
//     break;
//   case "behi":
//     console.log("behi 25000");
//     break;
//   case "banan":
//     console.log("banan 20000");
//     break;
//   default:
//     console.log("bunday meva yoq");
//     break;
// }

// break kerakli valueni olgandan keyin scopdan chiqarib yuboradi

// ternary operator
// let str = "best";
// let a = 21;
// a % 2 == 0 ? (str = "last") : (str = "not");
// console.log(str);

// ternary operatorida ikkita belgi qatnashadi ? va :
// ?dan oldim shart yoziladi agar shart togr bolsa ? dan kngi kod ishlidi
// Agar shart notogri bolsa : dan kngi kod ishlidi

// console.log(Boolean(undefined));

// let a = 70;
// let A = a > 80 && a <= 100 ? (a = true) : false;
// let B = a > 60 && a <= 80 ? (a = true) : false;
// let C = a > 40 && a <= 60 ? (a = true) : false;

// switch (a) {
//   case A:
//     console.log("A");
//     break;
//   case B:
//     console.log("B");
//     break;
//   case C:
//     console.log("C");
//     break;

//   default:
//     console.log("failed");
//     break;
// }


let a = 92;
let b = a % 2 == 0 ? "juft" : "toq";
console.log(b);
