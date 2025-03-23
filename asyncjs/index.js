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


