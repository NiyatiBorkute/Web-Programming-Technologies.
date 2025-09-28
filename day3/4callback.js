//callback function is fuction which is pass inside function
function Product(a,b,c){
    return a*b*c;
}

function fun(x,y){
    console.log(x-y)
}
fun(Product(2,4,5),7);