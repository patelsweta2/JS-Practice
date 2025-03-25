// console.log("start");
// setTimeout(function cb(){
//     console.log("Callback")
// },5000);

// console.log("End");


console.log("start");

setTimeout(function cbT() {
    console.log("CB SetTimeOut")
},5000);

fetch("https://api.netflix.com")
.then(function cbF(){
    console.log('CB Netflix')
});
console.log("End");


// ** why async is important

// console.log("start");

// function important(username) {
//   setTimeout(() => {
//     return `Heloo dosto, I am ${username}`;
//   }, 1000);
// }

// const message = important("Sweta Patel");

// console.log(message);

// console.log("end");

// ** callback

// console.log("start");

// function important(username, cb) {
//   setTimeout(() => {
//     cb(`Heloo dosto, I am ${username}`);
//   }, 1000);
// }

// const message = important("Sweta Patel", (msg) => {
//   console.log(msg);
// });

// console.log("end");

// ** More callback

// console.log("start");

// function important(username, cb) {
//   setTimeout(() => {
//     cb(`Heloo dosto, I am ${username}`);
//   }, 1000);
// }

// function importantTwo(args, cb) {
//   setTimeout(() => {
//     cb(`I am a ${args} developer`);
//   }, 1000);
// }

// const message = important("Sweta Patel", (msg) => {
//   console.log(msg);
//   importantTwo("Mern Stack", (msg) => {
//     console.log(msg);
//   });
// });

// console.log("end");

// ** Promise
// console.log("start");

// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = false;
//     if (result) {
//       resolve("subscribe to our channel");
//     } else {
//       reject(new Error("Oops!!!!!"));
//     }
//   }, 1000);
// });

// console.log(sub);

// sub
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// console.log("end");

// ** Implement previous example with promise

// console.log("start");

// function important(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, I am ${username}`);
//     }, 1000);
//   });
// }

// function importantTwo(args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, I am ${args} developer`);
//     }, 1000);
//   });
// }

// function importantThree(args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, please follow me on Insta ${args}`);
//     }, 1000);
//   });
// }

// important("Sweta Patel")
//   .then((res) => {
//     console.log(res);
//     importantTwo("MERN Stack").then((res) => {
//       console.log(res);
//       importantThree("Instagram").then((res) => console.log(res));
//     });
//   })
//   .catch((err) => console.error(err));

// console.log("end");

// ** Implement Promises Chaining

// console.log("start");

// function important(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, I am ${username}`);
//     }, 1000);
//   });
// }

// function importantTwo(args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, I am ${args} developer`);
//     }, 1000);
//   });
// }

// function importantThree(args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Heloo dosto, please follow me on Insta ${args}`);
//     }, 1000);
//   });
// }

// important("Sweta Patel")
//   .then((res) => {
//     console.log(res);
//     return importantTwo("MERN Stack");
//   })
//   .then((res) => {
//     console.log(res);
//     return importantThree("Instagram");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// console.log("end");

// ** Implement Promise Combinator
console.log("start");

function important(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Heloo dosto, I am ${username}`);
    }, 1000);
  });
}

function importantTwo(args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Heloo dosto, I am ${args} developer`);
    }, 1000);
  });
}

function importantThree(args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Heloo dosto, please follow me on Insta ${args}`);
    }, 1000);
  });
}

Promise.all([
  important("Sweta Patel"),
  importantTwo("MERN Stack"),
  importantThree("Instagram"),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("end");



