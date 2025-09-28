let a=[1,3,4,6,7,9,5]
let x=a.reduce(function(a,b){
    return a+b;
})
let y=a.reduce(function(a,b){
    return a-b;
})
console.log(x)
console.log(y)

