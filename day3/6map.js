//map basically agar mujhe ek array se or ek array bnana hai usise related
let a=[1,3,4,5,6] 
console.log(a)
let b=[];
console.log(b)
// for (const ele of a){
//     b.push(ele*ele);
// }
// console.log(b);
function twice(num){
    return 2*num;
}
function triple(num){
    return 3*num;
}
//Map Function
let d=a.map(function(ele){
    return ele*ele;
});
b=a.map(twice)
c=a.map(triple)
console.log(b)
console.log(c)
console.log(d)
//arrow function
let e=a.map(ele=>ele*ele)
console.log(e)