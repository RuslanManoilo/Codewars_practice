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