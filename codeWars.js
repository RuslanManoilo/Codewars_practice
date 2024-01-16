// TASK 1 - Highest and Lowest
            // In this little assignment you are given a string of space separated numbers, 
            // and have to return the highest and lowest number.

// function highAndLow(numbers) {
//     const result = numbers.split(' ').sort((a, b) => b - a);
//     const splice = result.splice(1, result.length - 2);
     
//     return result.length === 1 ? [...result, result[0]].join(' ') : result.join(' ');
// }

// console.log(highAndLow("1 2 3 4 5") ); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
// console.log(highAndLow("42")); // return "42 42"


// ----------------------------------------------------------------------------------------------------


// Task 2 - Disemvowel Trolls

// function disemvowel(str) {
//     const result = str.split(" ").map(item => item.split("").filter(item =>
//         item.toLowerCase() !== 'a'
//         && item.toLowerCase() !== 'e'
//         && item.toLowerCase() !== 'i'
//         && item.toLowerCase() !== 'o'
//         && item.toLowerCase() !== 'u'
//     ).join("")).join(" ");

//     return result;
// };

// console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!"
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// console.log(disemvowel("What are you, a communist?")); // "Wht r y,  cmmnst?"


// ----------------------------------------------------------------------------------------------------


// Task 3 - Find the next perfect square!

// function findNextSquare(sq) {
//     const result = Math.pow((Math.sqrt(sq) + 1), 2);
//     return Number.isInteger(result) ? result : -1;
// };

// console.log(findNextSquare(100)); // 121
// console.log(findNextSquare(121)); // 144
// console.log(findNextSquare(151)); // -1
// console.log(findNextSquare(15241383936)); // 15241630849


// ----------------------------------------------------------------------------------------------------

