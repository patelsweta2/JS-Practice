// const MAX_PRIME = 1000000;

// function isPrime(n) {
//     for(let i = 2;i<=Math.sqrt(n);i++){
//         if(n%i === 0){
//             return false;
//         }
//     }
//     return n > 1;
// }

// const random = (max) => Math.floor(Math.random()*max);

// function generatePrimes(quota){
//     const primes = [];
//     while(primes.length < quota){
//         const candidate = random(MAX_PRIME);
//         if(isPrime(candidate)){
//             primes.push(candidate)
//         }
//     }
//     return primes;
// }

// const quota = document.querySelector("#quota");
// const output = document.querySelector('#output');

// document.querySelector("#generate").addEventListener("click", () => {
//     const primes = generatePrimes(quota.value);
//     output.textContent = `Finished generating ${quota.value} primes!`;
// });

// document.querySelector('#reload').addEventListener("click", () => {
//     document.location.reload();
// });



const MAX_PRIME = 1000000;

function isPrime(n){
    for(let i = 2;i<=Math.sqrt(n);i++){
        if(n%i === 0) return false;
    }
    return n > 1;
}

const random = (max) => Math.floor(Math.random()*max);

function generatePrimesAsync(quota, callback){
    const primes = [];
    function generate(){
        if(primes.length < quota){
            const candidate = random(MAX_PRIME);
            if(isPrime(candidate)){
                primes.push(candidate)
            }
            setTimeout(generate,0);
        } else {
            callback(primes)
        }
    }
    generate();
}

const quota = document.querySelector('#quota');
const output = document.querySelector('#output');

document.querySelector('#generate').addEventListener("click", () => {
    output.textContent = "Generating primes... (UI is responsive)";
    const num = parseInt(quota.value, 10);
    if(isNaN(num) || num <= 0){
        output.textContent = "Please enter a valid number!";
        return;
    }
    generatePrimesAsync(num, (primes) => {
        output.textContent = `Finished generating ${num} primes!`;
    });
});

document.querySelector('#reload').addEventListener("click", () => {
    document.location.reload();
})