//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100      

// Non Primitive or Reference Type

// Array, Objects, Functions

// ******************************************************

//  Stack Memory (Primitive) => we get a copy when we use stack i.e., any change made is made to the copy and not the original value, Heap Memory (Non Primitive) => we get a reference to the original value in heap so if any change is made, the original value changes

let myName = "Nitin"

let anotherName = myName

anotherName = "Saxena"

// console.log(myName);
// 
// console.log(anotherName);

let user1 = {
    email: "ns@gmail.com",
    upi: "1234@paytm",
}

let user2 = user1

user2.email = "rst@gmail.com"

console.log(user1.email);
console.log(user2.email);
