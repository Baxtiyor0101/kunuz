// map,reduce,sort,indexof,lastindexof,
// let arr = ["olma", "anor", 5, true, "behi", 23, "limon", 3, "ananas"];
// mapning vazifasi massiv ichidagi barcha elemntlar bilan
//  yurib chiqib va har bir element bilan maxsus amal bajarib
// ketib yangi array hosil qiladi

// let r = arr.map((value, index) =>
//   typeof value != "number" ? value + "sss" : value ** 2
// );
// console.log(r);

// let newArr = arr.map((val, inx) => `${inx}-${val}`);
// console.log(newArr);

// let a = 89;
// console.log(`${a} bu yerda 89`);

//sort
// let arr = [65, 6, 22, 9, 42, 0, 20, 34, 7, 4, 6];
// let r = arr.sort((a, b) => a - b);
// console.log(r);

// let arr = [65, "ll", 22, "u", 42, "rrrwq", 20, 34, 7, 4, 6];
// console.log(arr.sort((a, b) => a - b));
// console.log("A" > "a");
// sortning vazifassi  array ichadagi qiymatlarii ascii jadval
//  boyicha solishtradi va osha ketma ketlik boyicha joylashtrib beradi

// let arr = [65, "ll", 22, "u", 42, "rrrwq", 20, , 22, 34, 7, 4, 6];
// console.log(arr.indexOf(22));
// // indexofning vazifasi elemnt qayssi indexda turganligini topishuchun ishaltiladi va u birinchisining  indexini oladi
// console.log(arr.lastIndexOf(22));
// // indexofning vazifasi elemnt qayssi indexda turganligini topishuchun ishaltiladi va u oxirgidan izlaydi  indexini oladi

// let arr = [65, "ll", 22, 22, 34, 7, 4, 6];
// let newr = arr.reverse();
// console.log(newr);
// // reverse ning vazifasi array elmtlarini teskari tartibda joylashtrib beradi

// let arr = [65, 22, 22, 34, 7, 4, 6];
// let r = arr.sort((a, b) => b - a);
// console.log(r);
// arr.map((val, inx) => val == 'olma' ? arr.splice(inx,1));

let arr = ["nok", "olma", "banan", "olma", "nok", "olma", "tarvuz"];
function deleteMeva(name) {
  for (i = 0; i < arr.length; i++) {
    if (i == arr.indexOf(name)) {
      arr.splice(arr.indexOf(name), 1);
    }
  }
  console.log(arr);
}
deleteMeva("olma");
