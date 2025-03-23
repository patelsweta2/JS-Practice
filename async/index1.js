// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// console.log("fetchPromise", fetchPromise.__proto__);
// console.log("Started request...");
// fetchPromise.then((response) => {
//     return response.json();
// })
// .then((data) => {
//     for(let i = 0;i<data.length;i++){
//         console.log(data[i])
//     }
// })
// .catch(error => console.log("Error occurred", error));

// const fetchPromise = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
  
//   fetchPromise
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[2].name);
//     });

// fetch("https://jsonplaceholder.typicode.com/posts/invalid")  // Valid domain, but invalid path (404 error)
//   .then((response) => {
//     console.log("`.then()` block chal gaya");
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     console.error("Catch block me error aa gaya:", error);
//   });

//   const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );
//   const fetchPromise2 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
//   );
//   const fetchPromise3 = fetch(
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
//   );
// Promise.all([fetchPromise1,fetchPromise2,fetchPromise3])
// .then((responses) => {
//     for(const response of responses){
//         console.log(`${response.url}:${response.status}`);
//     }
// })
// .catch((error) => {
//     console.log(`Failed to fetch: ${error}`);
// })


const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Failed to fetch: ${error}`);
    });

const myPromise = new Promise((resolveOuter) => {
    resolveOuter(
        new Promise((resolveInner) => {
            setTimeout(() => {
                console.log('Inner promise resolved');
                resolveInner()
            },1000)
        })
    )
});

myPromise.then(() => {
    console.log('Outer promise resolved!')
})
// promise resolution-> jb kisi promise ke ander koi or ek promise ko 
// call krte hai toh promise ka result inner promise pr depend krta hai.
new Promise((resolveOuter) => {
    resolveOuter(
      new Promise((resolveInner, rejectInner) => {
        setTimeout(() => {
          rejectInner("Inner promise failed!");
        }, 1000);
      })
    );
  })
    .then(() => {
      console.log("Outer promise resolved!");
    })
    .catch((error) => {
      console.log("Outer promise rejected:", error);
    });
  
  

  
  