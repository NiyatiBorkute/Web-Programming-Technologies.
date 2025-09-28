//for loops:
a=[1,2,3,4,5,6]
console.log(a)
console.log(typeof(a))
//array is a object in javascript 

//forof loops:
brr=[1,5,6,7,8,9]

for (let ele of brr){
    ele*=2;
    console.log(ele);
    //in for of loop we can create a copy of variable which is ele
    //cannot change in the actual array variable
}
console.log(brr);