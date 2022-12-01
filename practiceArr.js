// // bitta bosh array oching
// let arr = [];
// // shu arrayga "olma" sozizi oxiridan qo'shamiz"
// arr.push("olma", "behi");
// // hosil bolgan arrayga boshidan "anor" ni qoshing
// arr.unshift("anor");
// // oxiridan bitta elemnt ochiring
// arr.pop();
// // hosil bolgan array boshidan elemnt ochiring  yani anorni
// arr.shift();
// // console.log(arr);

// // yana bitta yangi array oching uning ichida ""
// let arrTwo = ["limon", "banan"];
// // shu ikkita arrayni qoshish kk
// let last = arr.concat(arrTwo);
// // hosil bolgan arrayninng birinchi elemntini "shaftoli" ga ozgartiring"
// last[1] = "shaftoli";
// // hosil bolgan arrayning uzunligi juft bolsa "yaxshi" toq
// // bolsa "yomon" ekranga chiqsin

// // if (last.length % 2 == 0) {
// //   console.log("juft");
// // } else {
// //   console.log("toq");
// // }

// // ortadagai elemntni ochring
// last.splice(1, 1);
// // console.log(last);

// // olmadan keyin 2 ta elemnt qoshish kerak
// // last: ["olma","banan"]=>["olma","limon","tarvuz","banan"]
// // last.splice(1, 0, "limon", "tarvuz");
// // delete last[2];
// // console.log(last);

// // bitta array ochish kerak u 5 ta qiymat qabul qiladi  ularning
// // 3 tasi numga tipiga tegishli
// // savol shu array ichidan number tipiga tegishli elmntlarni ajratib
// // yangi arrayga qiymat qilib bberish kk
// // let newArr = [1, 3, 5, true, "test"];
// // let another = newArr.filter((val, inx) => typeof val == "number");
// // console.log(another);

// let newArr = [1, true, 3, 4, 5, 6, true, "test"];
// // shu array ichidan number tipiga tegishli
// // birinnchi juft sonni chiqarib berin
// let a = newArr.find((val) => val % 2 == 0);
// console.log(a);
// let juft = newArr.filter((val) => val % 2 == 0);
// console.log(juft);

// // let arr=[3,2,5,6,17,8,4,12,31,5] shu arrayning
// //  elemntlarini tartib bilan  joylashtring
// let array = [3, 2, 5, 6, 17, 8, 4, 12, 31, 5];
// console.log(array.sort((a, b) => a - b));

// let array = [3, 2, 5, 6, 31, 5];
// // let array2 = [num:3, num:2, num:5, num:6, num:31, num:5];
// let arrr = array.map((val) => `num:${val}`);
// console.log(arrr);

