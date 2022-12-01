// // // // Garbage collections
// // // let a = 90;
// // // a = 8;
// // // console.log(a);
// // let obj = {
// //   name: "John",
// //   address: {
// //     country: "uzb",
// //   },
// // };

// // console.log(obj.name);
// // obj.name = "Smith";
// // obj = null;
// // console.log(obj.address.country);

// /////////////////
// // optional chaining  ?
// // let obj = {};
// // console.log(obj?.student?.name?.surname);
// //  obj undefined bolmasa student  undefined bolmasa
// // name  undefined bolmasa surnameni chiqar
// /////////////////////////////////

// // let obj = {
// //   name: "jasur",
// //   surname: "rasulov",
// //   number: 234567,
// //   title: "It",
// // };
// // let rr = [1, 2, 3, 3, 4, 5];
// // console.log(typeof obj["number"]);
// // let str = "kjknkdjkjd";
// // for (let val of str) {
// //   console.log(val);
// // }
// // // for in object bilan ishlaganda keylari bilan ishlidi array va string bilan ishlaganda indexlari bilan ishlidi
// // // for of array string Maps NodeList bilan ishlaganda u togridan togri qiymatga kiradi agar object bn ishlamidi

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let rr = arr.forEach(myFunct);
// function myFunct(item, inx, arrr) {
//   console.log(+item * 10);
// }
// console.log(rr);
// ////////////
// const array1 = ["a", "b", "c"];
// array1.forEach((element, inx) => console.log(element, inx));
// array1.forEach(function (element, inx) {
//   console.log(element, inx);
// });
//
// let arr = [
//   { id: 1, name: "Temur", title: "IT", nuber: 6 },
//   { id: 2, name: "Sohib", title: "Muhandis", nuber: 4 },
//   { id: 3, name: "Karim", title: "electic", nuber: 5 },
//   { id: 2, name: "Shoxrux", title: "dehqon", nuber: 1 },
//   { id: 5, name: "Jasur", title: "bugalter", nuber: 2 },
//   { id: 6, name: "Jamshid", title: "Tuzizm", nuber: 8 },
// ];

// // tanlangan elemntni ochiramiz

// function deleteItem(array, a) {
//   return array.filter((val) => val.id != a);
// }

// // function del(array, id) {
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i].id == id) {
// //       array.splice(i, 1);
// //     }
// //   }
// //   console.log(array);
// // }
// // del(arr, 2);
// console.log(deleteItem(arr, 2));

/////////////////////
// function create(array, a) {}
// create(arr, { id: 7, name: "temur", title: "it", number: 56 });

// CRUD
// C create(yaratmoq,qoshmoq)
// R read(oqimoq,)
// U Update(yangilamoq,edit)
// D delete(ochirmoq)

// let arr = [
//   { id: 1, name: "Temur", title: "IT", nuber: 6 },
//   { id: 2, name: "Sohib", title: "Muhandis", nuber: 4 },
//   { id: 3, name: "Karim", title: "electic", nuber: 5 },
//   { id: 4, name: "Karim", title: "dehqon", nuber: 1 },
//   { id: 5, name: "Jasur", title: "bugalter", nuber: 2 },
//   { id: 6, name: "Jamshid", title: "Tuzizm", nuber: 8 },
// ];

//// delete
// function DeleteItem(p) {
//   let newArr = arr.filter((value, index) => value.id !== p);
//   console.log(newArr);
// }
// DeleteItem(3);

//// search Read
// let searchItem = function (z) {
//   let filtered = arr.filter(
//     (val) =>
//       val.name.includes(z.toLowerCase()) || val.name.includes(z.toUpperCase())
//   );
//   console.log(filtered);
// };
// searchItem("k");

/// C create
// function createItem(p) {
//   arr.push(p);
//   console.log(arr);
// }
// createItem({ id: 7, name: "Sohibjon", title: "Muhandislar", nuber: 54 });

//////////////////////
// destructuring
// let 34="olma"
// array destructuring
// let arr = ["olma", "anor", "limon"];
// let [o, a, l] = arr;
// console.log(o);
// // let [s, b, c] = "tut";
// // console.log(s);

// let arr = ["olma", "anor", "limon", "behi", "Shaftoli"];
// let [o, a, l, ...rest] = arr;
// console.log(rest.length);

// // object destructuring
// let obj = {
//   id: 1,
//   name: "Aslbek",
//   title: "IT",
// };
// let { id = 3, name = "hhhh", title, surname = "mominov" } = obj;
// console.log(name);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// // destructuring assignment split in multiple lines for clarity
// let {
//   size: {
//     // put size here
//     width: w,
//     height: h,
//   },
//   items: [item1, item2], // assign items here
//   title = "Menu", // not present in the object (default value is used)
// } = options;

// let studend = {
//   name: "Jasur",
//   surname: "mominov",
//   address: {
//     country: "uzb",
//     street: "naqqoshlik",
//   },
//   house: ["red", 2],
// };

// let {
//   name,
//   surname,
//   address: { country, street },
//   house: [color, floor],
// } = studend;
// console.log(color);

