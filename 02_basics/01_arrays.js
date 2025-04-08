const arry1 = [0, 1, 2, 3, 4, 5]

const arry2 =  ["Ironman", "Hulk"]

const arry3 = new Array(1, 2, 3, 4)

// console.table(arry2)

// arry1.push(6)

// console.table(arry1);

// arry1.pop()

// console.table(arry1);


// arry1.unshift(8)

// console.table(arry1);

// arry1.shift()

// console.table(arry1);

// console.log(arry1.includes(9));

// console.log(arry1.indexOf(4));

// const arry4 = arry1.join()

// console.log(arry4);

// console.log("A ", arry1);

const arry5 = arry1.slice(0, 3)

// console.log(arry5);
// 
// console.log("B "+ arry1);

let arry6 = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11]]]

const useableArray = arry6.flat(Infinity)

// console.log(useableArray);

console.log(Array.isArray("Nitin"))

console.log(Array.from("Nitin"))

console.log(Array.from({name: "Nitin"}))

let score1 = 100

let score2 = 200

let score3 = 300

console.log(Array.of(score1, score2, score3));
