//  singleton

//  object literals

// Object.create

const mySym = Symbol("key1")

let JsUser = {
    name: "Nitin",
    age: 25,
    isEmployed: true,
    location: "Greater Noida",
    email: "ns@gmail.com",
    [mySym]: "mykey1"
}

// console.log(JsUser[mySym]);



JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());


const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.Name = "Pushpa"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstNm: "Nitin",
            lastNm: "Saxena"
        }
    }
}


// console.log(tinderUser);

// console.log(Object.keys(regularUser.fullName.userName));


const course = {
    cName: "JS in Hindi",
    price: "999",
    cInstructor: "Nitin"
}

// course.cInstructor

const {cInstructor: instructor} = course

// console.log(instructor);
