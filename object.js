// javascript objects => bir nechta malummotlar toplamini key va value korinishda saqlashi mn bolgan malumot

// objectlarni elon qilish
// let objName = {
//   key: "value",
// };

// type object bolgan malumotlar array , object , function

// let student = {
//   id: 1,
//   name: "Xamza",
//   surname: "Kamol",
//   address: "tashket",
// };
// let arr = [2345, 345];
//  function func() {
//   console.log(":dfghjk");
// };
// console.log(typeof student);
// console.log(typeof arr);
// console.log(typeof func);

/////////////// object xossalarini olishning ikki hil usuli bor
// 1) .key orqali
// 2) ["key"] orqali olish mumkun
// let student = {
//   id: 1,
//   name: "Xamza",
//   surname: "Kamol",
//   address: "tashket",
// };
// console.log(student.name);
// console.log(student["name"]);

// nested objects => ichma ich objectlar
// let student = {
//   id: 1,
//   name: "Toshboy",
//   surname: "shakarboyev",
//   address: {
//     country: {
//       district: "Tashkent",
//       street: "naqqoshlik",
//       arr: ["dom1", "dom2"],
//     },
//     zipcode: 101102,
//   },
// };
// let arrr = [
//   {
//     id: 1,
//     name: "lolo",
//   },
//   {
//     id: 1,
//     name: "lolo",
//   },
//   student,
// ];
// console.log(student["address"]["country"]["arr"][1]);
// console.log(arrr[2]["address"]["country"]["arr"][1]);

//////////// object methods
// let user = {
//   id: 1,
//   name: "gggggg",
//   sayHello: () => {
//     console.log("hello");
//   },
//   sayBye: function () {
//     console.log("bye bye");
//   },
// };
// user.sayHello();
// // methods lar bu object ichida yozilgan functionlar

//////////////////////this kalit so'zi (arrov funtion ichida this ishlamidi  )
// this joylashish orniga qarab turli hil qiymat qabul qiladi
// 1) object ichida this ishlatilsa osha obyectning oziga teng boladi
// 2) this togridan togri (console.log(this )) togri ishlatilsa glabal objectga teng boaldi
// 3) function ichida ishlatilsa ham glabal objectga teng boladi
// html elemnt bn ishlatilsa osha elmntnin oziga teng boladi

//1
// let user = {
//   id: 1,
//   name: "Toshmat",
//   sayHello: function () {
//     console.log(`Salom ${this.name} `);
//   },
//   address: {
//     country: {
//       name: "rrerer",
//       saySomth: function () {
//         console.log(this.name);
//       },
//     },
//   },
//   sayBye: function () {
//     console.log("bye bye");
//   },
// };
// user.sayHello();
// user.address.country.saySomth();

///////////2)
// let a = this;
// console.log(a);

//////// keys, values, entries

let student = {
  id: 1,
  name: "Xamza",
  surname: "Kamol",
  address: "tashket",
};

// let arrKey = Object.keys(student);
// console.log(arrKey);
// Object.keys() vazifasi objectdagi keylarni hamasini btta arrayga yigib beradigan method

// let arrVal = Object.values(student);
// console.log(arrVal);
// let arrrr = ["olma", ["anor", "test"], []]; // nested array
// console.log(arrrr[1][0]);
// let arrKeyVal = Object.entries(student);
// console.log(arrKeyVal.map((val) => val));
let obj = {
  id: 1,
  num: 23,
  tel: 98,
  name: "Toshmat",
}; //122
///////////////////////////////////////////////
let arr = [
  { id: 1, name: "Temur", title: "IT", nuber: 6 },
  { id: 2, name: "Sohib", title: "Muhandis", nuber: 4 },
  { id: 3, name: "Karim", title: "electic", nuber: 5 },
  { id: 4, name: "Shoxrux", title: "dehqon", nuber: 1 },
  { id: 5, name: "Jasur", title: "bugalter", nuber: 2 },
  { id: 6, name: "Jamshid", title: "Tuzizm", nuber: 8 },
];

// CRUD 
sortArr("o");
//sortArr(2)
//sortarr(1,yusuf,It,0)
//numberlar yigindisi topilsin // 26
// shu malumot beriladi numberlari sortlangan holatida chiqsin
//javob
// let arr1 = [
//   { id: 4, name: "Shoxrux", title: "dehqon", nuber: 1 },
//   { id: 5, name: "Jasur", title: "bugalter", nuber: 2 },
//   { id: 2, name: "Sohib", title: "Muhandis", nuber: 4 },
//   { id: 3, name: "Karim", title: "electic", nuber: 5 },
//   { id: 1, name: "Temur", title: "IT", nuber: 6 },
//   { id: 6, name: "Jamshid", title: "Tuzizm", nuber: 8 },
// ];
