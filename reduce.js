  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */

// The reduce method is used to “reduce” multiple values in an array into 
// a single value.  
// The simplest example of this would be taking an array of numbers and 
// reducing them to their total sum.


// Summing an array of numbers:

// The signature of the callback function in this case is a bit different 
// from what you’ve seen so far, because it takes two parameters
// rather than one. The parameters the callback function takes are typically 
// called acc, for accumulator, and curr for current value
// The accumulator represents the value that will ultimately be returned 
// from the reduce method

// In this case it will accumulate and keep track of the sum as the callback 
// function is executed on each array element.

// So here, the accumulator will be an integer because we’re calculating a sum, but  
// we could also be accumulating items into an array,  an object or something else.

// The other parameter, current value, represents the current array
// item that the callback function is being run on

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);
// 10


// below, the function is expanded so it's clearer what we did & what
// was happening

let sum2 = nums.reduce((acc, curr) => {
  console.log(
    'Accumulator:', acc,
    'Current Value:', curr,
    'Total:', acc + curr,
  )
  return acc + curr;
})
// Accumulator: 0 Current Value: 1 Total: 1
// Accumulator: 1 Current Value: 2 Total: 3
// Accumulator: 3 Current Value: 3 Total: 6
// Accumulator: 6 Current Value: 4 Total: 10

// ^^ the callback function executes four times, once for each element
// in the array, excluding the intial element ****
// the accumulator is “accumulating” the sum of the current values
// as the function is executed for each element.  
// On the first pass, the accumulator is 0, the first element of the array. 
// The current value is 1, and the total of 0 + 1 is 1. 
// Then the function executes on the next element, 2.
// At that point, the accumulator is 1, the current  value is 2, 
// and the sum of course is 3.
// etc etc


// *** why did it exclude the intial element?
// the reduce method  actually takes a second parameter -   
// the initial value to use as the accumulator.  
// If you don’t specify an initial value, the accumulator will default 
// to the first element  in the array. In this case that element was 0,  
// and the accumulation process starts with the second element in the array, 
// so 1 is added to 0.
// However, if I explicitly specify  an initial value to use as the accumulator, 
// then the callback function will execute five times, beginning with the 
// first element of the array, and using our explicit initial value 
// as the accumulator.

// let sum2 = nums.reduce((acc, curr) => {
//   console.log(
//     'Accumulator:', acc,
//     'Current Value:', curr,
//     'Total:', acc + curr,
//   )
//   return acc + curr;
// }, 0)

// ^^ the 0 goes after the closing curly braces
// in this case that gives us the same result, but if I were to change  
// the initial value to 10, then the reduce method  
// will start the summing process at 10, giving us a final value of 20.
// aka put , 10 instead of , 0

// In a practical sense, using the initial value is a good way to add 
// more to a previously calculated subtotal, add more items into an existing array, 
// or inject additional properties into an existing object.

// here, we just used a simple integer as the intial value, but it can be anything,
// determind by what you want to achieve with the reduce method

// Though it's technically optional, as an advanced JavaScript developer 
// you should always specify the initial value to use for the accumulator 
// in order to be explicit with your intentions.

// so, with all that in mind, here's the simplified version again, with an 
// intial value

let sum3 = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum3);
// 10



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
