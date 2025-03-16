const numbers = [4,7,1,9,3];
const maxNum = Math.max.apply(null,numbers);
console.log(maxNum);

function printUpperCase(){
    console.log(this.toUpperCase());
}
const art = ["hello", "bolo", "yelo"];
art.forEach(word => printUpperCase.apply(word));