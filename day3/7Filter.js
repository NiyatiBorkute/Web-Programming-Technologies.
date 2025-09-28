let a=[4,5,6,7,8,1,5,6,7]
console.log(a)

a=a.filter((ele) => {
    if (ele % 2==0)return true;
    else return false;
})
console.log(a)

a=a.filter((ele) => {
    if (ele > 5)return true;
    else return false;
})
console.log(a)
