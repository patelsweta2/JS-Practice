// function getData() {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(response => response.json())
//       .then(data => console.log("Promise Result:", data))
//       .catch(error => console.error("Error:", error));
//   }
//   getData();

//   async function getDataAsync() {
//     try {
//       let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       let data = await response.json();
//       console.log("Async/Await Result:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//   getDataAsync();

//   async function multiFetch() {
//     let user = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
  
//     let userData = await user.json();
//     let postsData = await posts.json();
  
//     console.log("User:", userData.name);
//     console.log("Posts:", postsData.length);
//   }
  
//   multiFetch();
  
//   async function demo() {
//     console.log("A");
  
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     console.log("B");
  
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     console.log("C");
//     console.log("code is ending")
//   }
  
//   demo();

// console.log("code is running");


// async function test() {
//     console.log("Start");
    
//     const promise = new Promise((resolve) => setTimeout(() => resolve("Done!"), 2000));
  
//     console.log("Before await");
//     const result = await promise;
//     console.log("After await:", result);
  
//     console.log("End");
//   }
  
//   test();


//   async function test1() {
//     for (let i = 1; i <= 10; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       console.log("Count:", i);
//     }
    
//     console.log("Loop finished!");
//   }
  
//   test1();


const api = "https://jsonplaceholder.typicode.com/todos ";

const fun = async() => {
    try{
    const res = await fetch(api);
    const data = await res.json();
    const arr = []
    data.filter((item,index) => {
        if(item.id >= 5 && item.id<= 15){
            arr.push(item.title)
        }
        })
       console.log(arr);
    }
    catch(error) {
        console.log(error)
    }
}
fun();

  
  
  
  