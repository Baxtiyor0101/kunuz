// // quotes
// let num = 55;
// let str = "school num";
// let result = `${num} text`;
// console.log(result);
// let str = "this is my  o\"qituvchi \\\\ university";
// console.log(str);
// \n enter
// let str=`dkjvnkfjn\`kdjn`

// \t tab
// \',\",\`
// \\ =>\
// string length
// let str = "this is text";
// console.log(str.length);
//leng stringning ichida nechta belgi borligini chiqarib beradi

// let str = "this is text";
// console.log(str[0]);
// console.log(str.at(1));
// console.log(str.slice(0, 7));

// getting element of string srt[0],str.at(0)

// upperCase() ,lowerCase()
// let str = "this Is Text";
// console.log(str.toUpperCase());
// toUpperCase string ichidagi belgilarni hammasini katta harkfa ogirib beradi
// console.log(str.toLowerCase());
// let a = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
// console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());

// let str = "this Is Text";
// console.log(str.indexOf("h"));
// str.indexOf("dd")   0,1
// let str = "last";
// console.log(str.indexOf("s"));

// let str = "23";
// let str2 = " this is another text";
// let num = 45;
// let r = num + +str;
// console.log(r);
// console.log(typeof +str);

//typeOf() ==> vazifasi malumot qanaqa typeda ekanligini chiqarib beradi
// let num = NaN;
// console.log(typeof num);

// let str = "34s";
// let num = "45s";
// let r = str - num;
// console.log(r);

// + dan tashqari barcha operatorlar string tipida bolmgan numberlarni
// number tipiga otqazib kn ishlidi

// for sikli

// let a = 8;
// a + 8;
// console.log(a);
// let str = "text";
// for (let i = 0; i < str.length; i + 2) {
//   console.log(str[i]);
// }

// 0 dan 100gacha toq sonlar chiqarilsin
// 0dan 100 gacha 3ga va 5 ga bolinadigan snlar chiqarilsin
// ikki xonali qayssidir sonning kvadrati bolgan sonlar chiqarilsin
/// 1-misol
// let son = "467812"; // son[3]
// // console.log(son.split(""));
// let max = son[0];
// let min = son[0];
// for (let i = 1; i <= son.length; i++) {
//   if (max < son[i]) {
//     max = son[i];
//   }
//   if (min > son[i]) {
//     min = son[i];
//   }
// }

// console.log(+max, +min);

//  2-misol

// function findMid(str) {
//   if (str.length % 2) {
//     console.log(str[Number.parseInt(str.length / 2)]);
//   } else {
//     console.log(
//       (+str[Number.parseInt(str.length / 2)] +
//         +str[Number.parseInt(str.length / 2) - 1]) /
//         2
//     );
//   }
// }

// findMid("12878567");
