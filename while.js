// while
// do while
// break
// continue
// Array

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 15;
// do {
//   console.log(i);
//   i--;
// } while (i < 10);

//  do while va while ninf farqi shundaki do while shartni qanoatlantrmasa ham bir marta ishlidi while esa shart qanoatlantrmasa ishlamidi

// break

// for (let i = 0; i < 13; i++) {
//   console.log(i);
//   if (i == 7) {
//     console.log(i);
//     break;
//   }
// }

//  break vazifasi malu bir shartga kelganda sikl ishlashdan toxtasin degan buyruqni berish uchun ishlatiladi

// for (let i = 0; i < 13; i++) {
//   if (i == 7) {
//     // console.log(i);
//     continue;
//   }
//   console.log(i);
// }

// continue vazifasi siklda malum bir shartga kelganda shu siklni tashlab ketish uchun ishaltiladi

// 1-misol
// funksiya parametriga kiritilgan sonning
// necha xonali son ekanligini toping

// let a= 55656
// function findDigit(a) {
//   let s = 0;
//   while (a > 0) {
//     s++;
//     a = Number.parseInt(a / 10);
//   }
//   console.log(s);
// }
// findDigit(7866);

// 2-misol
// funksiya parametriga kiritilgan sonning
// raqamlari yigindisini  toping

// function findSum(a) {
//   let s = 0;
//   while (a > 0) {
//     s += a - Number.parseInt(a / 10) * 10;
//     a = Number.parseInt(a / 10);
//   }
//   console.log(s);
// }
// findSum(33561);

// //////////////

// function findSum(a) {
//   let i = 0;
//   let s = String(a);
//   let sum = 0;
//   while (i < s.length) {
//     sum += Number(s[i]);
//     i++;
//   }
//   console.log(sum);
// }

// findSum(345);
