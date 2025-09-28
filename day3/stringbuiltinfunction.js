let a="niyati"
console.log(a.toUpperCase())//create new string their is no change in orginal string

let b="BORKUTE"
console.log(b.toLowerCase())

//Trim:it is use to delete the space present in front and back
c="     cat    "
console.log(c.length)//12
c1=c.trim()
console.log(c1.length)//3

//Indexof
console.log(b.indexOf("B"))

//chatAt
console.log(b.charAt(5))

//slice:it is a part of string
console.log(b.slice(2,7))//2 to index6
console.log(b.slice(2)) //2 to end

//split:
let z="my name is niyati"
console.log(z)
let arr=z.split(' ')
console.log(arr)
let arr1=z.split(',')
console.log(arr1)