// massivlar istalgan tipdagi malumotlardan iborat bolgan toplam

// massivlar ikki hil usul bn elon qilinishi mumkun
// 1usul
// let arrName = [1, 2, 6, null, undefined, true, "cake", false];
// // 2usul
// let arrName2 = new Array(1, 2, 6, null, undefined, true, "cake", false);
// console.log(arrName, arrName2);

// arraydan element olish
// let arrName = [1, 2, 6, null, undefined, true, "cake", false];
// console.log(arrName[arrName.length - 2]);

// arrayga element qo'shish

// let arrName = [1, 2, 6, null, "cake", false];
// arrName.push("olma");
// console.log(arrName);
// push methodi yordamida arrayga oxiridan element qo'shish mn

// let arrName = [1, 2, 6, null, "cake", false];
// arrName.unshift("anor");
// console.log(arrName);
// // unshift yordamida arrayga boshidan element qo'shish mn

////////////
// arraydan malumot o'chirish
// let arrName = [1, 2, 6, null, "cake", false];
// arrName.pop();
// console.log(arrName);
// // pop vazifasi array oxiridan bitta element ochiradi

// let arrName = [1, 2, 6, null, "cake", false];
// arrName.shift();
// console.log(arrName);
// // shiftning vazifasi array boshidan elemnt ochiradi

// array elemntni o'zgartirish
// let arrName = [1, 2, 6, null, "cake", false];
// arrName[4] = "olma";
// console.log(arrName);

// ikki arrayni qo'shish
// let arr1 = [1, 2, 3, 4, 5, 6, 7];
// let arr2 = ["bir", "ikki", "uch"];
// let last = arr1.concat(arr2);
// console.log(last);
// concat methodi yordamida ikki arrayni qoshish mumkun

// find
// let arr = [1, 7, 3, 4, 5, 6, 7, 8];
// let result = arr.find((val) => val % 2 == 0);
// console.log(result);
// find array methodi bolib u array ichidagi shartga qanoatlantiruvchi birinchi qiymatni chiqarib berasi

//filter
// let arr = [1, 7, 3, 4, 5, 6, 7, 8];
// let res = arr.filter((val, indx) => val % 2);
// console.log(res);
// filter vazifasi array ichidagi elementlardan shaartni qanoatlantradigan larini ajratib berish un ishlatiladi

///////////
// 1 misol
// let arr = [4, 10, 888, 90, 77, 100];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(`array ichida eng kattasi ${max}`);
// console.log(`array ichida eng kichigi ${min}`);
// 2usul
// let arr = [4, 10, 888, 90, 77, 100];
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(max, min);

////////////
// 2-misol
// let str = "WeB Brain Aca demya";
// function findA(a) {
//   let s = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == "a" || a[i] == "A") {
//       s++;
//     }
//   }
//   console.log(s);
// }
// findA(str);

//////////////
// let str = "WeB Brain Aca demya";
// function findA(a) {
//   let s = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === " ") {
//       continue;
//     }
//     s++;
//   }
//   console.log(s);
// }
// findA(str);

// let str = "this is just text";
// let arr = str.split("");
// console.log(arr);
// split vazifasi stringni ichidagi belgilarni barchasini ajratib array elementi sifatida joylashtrib beradi
// let str1 = arr.join("");
// console.log(str1);
// join array elemntlarini bitta qilib qoshib beradi
/////////

// let str = "WeB Brain Aca demya";
// let last = str.split("").filter((val) => val == "a" || val == "A").length;
// console.log(last);
/////////////////////////////////////////////
// let arr = str.split("");
// let newArr = arr.filter((val) => val == "a" || val == "A");
// console.log(newArr.length);
///////////////////////

// let str = "WeB Brain Aca Demya";
// let result = str
//   .split("")
//   .filter((val) => val == val.toUpperCase() && val != " ")
//   .join("");
// console.log(result);

///////////////////////////////////////////////////////////////////////////
// let array = ["olma", "anor", "limon", "behi"];
// //delete => arrayning istalgan elementini ochirishi mn lekin u egallab turga joy turadi qolib ketadi
// delete array[2];
// console.log(array);
/////////////////////

// let arr = ["olma", "anor", "limon", "behi"];
// arr.splice(1, 2);
// console.log(arr);
// bu vaziyatda birinchi parametr index yani qayssi elementda boshlab ochirish kkligini aniqlash un
// ikkimchi parametr esa count yani sanash nechta elemnt ochirish kkligini anioqlash un

/////////// birinchi elemntdan boshlab bitta ochirish
// let arr = ["olma", "anor", "limon", "behi"];
// arr.splice(0, 1);
// console.log(arr);

///////
// let arr = ["olma", "anor", "limon", "behi"];
// arr.splice(2, 0, "tarvuz", "anjir");
// console.log(arr);
// splice yordamida arrayning istalgan qismidan elemnt qoshish mn
// birinchi parametri har doim index ikkinchisi count qolganlari esa qoshilayotgan elementlar

////////// birinchi 3 ta elemtni ochirib boshqasi bn almasgtrish kk
// let arr = ["olma", "anor", "limon", "behi"];
// arr.splice(0, 3, 1, 2, 3);
// console.log(arr);

/////// ikichi elemntdan boshlab elemnt qoshsh
// let arr = ["olma", "anor", "limon", "behi"];
// arr.splice(2,0,"qoshilayotgan elmnt")
// console.log(arr);
/////////////////////////////////////////////////

// slice bu arraydan nesxa oladi
// let arr = ["I", "Go", "Js", "NodeJs"];
// let arr2 = arr.slice(1, 3); /// parametrlae ikklasi ham index
// console.log(arr2);
// console.log(arr);
///////////////////////////////

// let arr = ["I", "Go", "Js", "NodeJs"];
// Go bn nodeJs ni ochirib kn oxiradan ikkita elmnt qoshing
/////////////////////////////////////////////////////////////////////////

// 1 misol
// let arr = [4, true, 7, false, "test", 12, "something", 9, "JS", 2]; //34
// [4,7,12,9,2]
// 10ta elemntdan iborat massiv boladi uning ichida
// 3ta  string 2ta  boolean 5ta number tipidagi malumot
// boladi. massiv ichidagi number tipiga egishli bolgan
// malumotlarni yigindisini topish kk
// 1usul
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);
// 2usul
// let sum = arr
//   .filter((val, inx) => typeof val == "number" && inx % 2 == 0)
//   .reduce((num, acml) => (acml += num));
// console.log(sum);

// 2 misol "" '' ``
// let x = 4;
// let y = 6;
// console.log(`x ning qiymati ${x}`, `y ning qiymati ${y}`);
// x = x + y;
// y = x - y;
// x = x - y;
// console.log(`x ning qiymati ${x}`, `y ning qiymati ${y}`);

// ushbu o'zgaruvchilarning qiymatlarini boshqa ozgaruvchi
// ishlatmasdan almashtrib qoyadigan function tuzing

//3 misol
// let str = "ABBBACCRT";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i + 1] && str[i] != str[i - 1] && str[i] != str[i + 2]) {
//     console.log(str[i] + str[i + 1]);
//   }
// }

// 4 misol
// let str = "AAAVVBTAYYKKDDDP"; //3A2VBTA2Y2K3DP
// let s = 0;
// let newstr = "";
// for (let i = 0; i < str.length; i += s) {
//   for (let j = 0; j < str.length; j++) {
//     if (str[i] == str[j + s] ) {
//       s++;
//     }
//     if (str[i] != str[j]) {
//       newstr += s + str[j];
//       break;
//     }
//   }
// }

// 4-misl
// let str = "AAAVVBTAYYKKDDDP"; //3A2VBTA2Y2K3DP
// let s = 0;
// let newstr = "";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == str[i + 1]) {
//     s++;
//   } else {
//     newstr += s + 1 + str[i];
//     s = 0;
//   }
// }
// let last = newstr
//   .split("")
//   .filter((val) => Number(val) != 1)
//   .join("");
// console.log(last);

// find,filter,split,join,splice,slice,push,
// shift,unshift,pop,reduce,length,concat
