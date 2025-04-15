// function addTwoNumber(number1, number2) {
//     console.log(number1+number2);
// }


function addTwoNumber(number1, number2) {
    let result = number1+number2;
    return result
}

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please Enter a Username");
        return
        
    }
    return `${username} just Logged In!!!`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(800, 700, 600));
const user = {
    username: "Nitin",
    price: 199
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

const arry1 =[1, 2, 3, 4]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(arry1));
