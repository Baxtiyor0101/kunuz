// let value = "Some magic value";
// console.log(value);
// value = "yes, it is magical";
// console.log(value); // yes, it is magical

// for (let i = 0; i < 10000000000; i++) {
//   i++;
// }

// console.log("tugadi");

// let value = "some value";
// setTimeout(() => {
//   value = "another value";
// }, 1000);
// value = value + ", and smth again";
// console.log(value);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let natija = "Uddaladim";
//     resolve(natija);
//   }, 4000);
// });

// myPromise.then((a) => {
//   console.log(a); // Uddaladim
// });

//////////////////////
// myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let sabab = "Vaqtim yetmagani uchun uddalay olmadim";
//     reject(sabab);
//   }, 10000);
// });
// myPromise.catch((xato) => {
//   console.log(xato); // Vaqtim yetmagani uchun uddalay olmadim
// });
//////////////////////

const birinchiPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let natija = "Uddaladim";
    resolve(natija);
  }, 10000);
});
birinchiPromise
  .then((natija) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Birinchisidan kelgan natija: " + natija);
      }, 5000);
    });
  })
  
  .then((natija) => {
    setTimeout(() => {
      console.log("Oxirgi natija " + natija); // Oxirgi natija Birinchisidan kelgan natija: Uddaladim
    }, 5000);
  });
