// return unique values based on any particular keys.
const users = [
    {id: 1, name: "Sweta", city: "Pune"},
    {id: 2, name: "Amit", city: "Delhi"},
    {id: 3, name: "Sweta", city: "Mumbai"},
    {id: 4, name: "Amit", city: "Pune"}
]

const getUniqueByKey = (arr,key) => {
    return [...new Map(arr.map(item => [item[key],item])).values()];
}

function getUniqueByKeys(arr, key) {
    let uniqueMap = new Map();
    
    arr.forEach(item => {
        if (!uniqueMap.has(item[key])) {
            uniqueMap.set(item[key], item);
        }
    });

    return Array.from(uniqueMap.values());
}


console.log(getUniqueByKey(users,"name"));
console.log(getUniqueByKey(users,"city"));

const arr = ["apple","banana","cherry"];
