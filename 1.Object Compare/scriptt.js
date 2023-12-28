//Compare two object without order

let obj1={
    name: "Person 1",
    age:5,
}
let obj2={
    age:5,
    name: "Person 1",
}

let flag=true;

for(let key of Object.keys(obj1)){
    if(obj1[key] !== obj2[key]){
        flag=false
    }
}
console.log(flag)