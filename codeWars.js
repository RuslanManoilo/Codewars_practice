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


// Task 4 - Multiples of 3 or 5

// function solution(number) {
//     let result = 0;

//     if (number < 0) {
//         return 0
//     };

//     for (let i = 0; i < number; i++) {
//         i % 3 === 0 || i % 5 === 0 ? result += i : result += 0;
//     };

//     return result
// };


// console.log(solution(10));    // summ 23


// ----------------------------------------------------------------------------------------------------


// Task 5 - Detect Pangram

// function isPangram(string) {
//     // My method
//     const regex = /[a-zA-Z]/;
//     const onlyLetters = string.toLowerCase().split('').filter(item => regex.test(item));
//     const result = onlyLetters.reduce((acc, item) => {
//             acc.includes(item) ? acc : acc.push(item);
//             return acc;
//         }, []);
        
//     return result.length === 26;
    
//     // Method 2
//     // const x = [... new Set(string.toLowerCase().split('').filter(item => regex.test(item)))]
//     // return x.length === 26;
// };

// console.log(isPangram("The quick brown fox jumps over the lazy dog.")); 
// console.log(isPangram("This is not a pangram.")); 
// console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ')); 


// ----------------------------------------------------------------------------------------------------
