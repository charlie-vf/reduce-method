  
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


// ---------------------------------------------------- //

// Reduce can also be used in many other useful ways,
// such as grouping objects by a specific property, flattening arrays, 
// or counting how many times a value appears in an object or array.

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

// We’ve got an array of team members where each team member
// is an object containing their name, profession and years of experience. 
// Our goal is to total all the experience the team has as a whole.

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// ^^ without specifiying the intial value, it would log
// [object Object]713
// the accumulator starts with the first array element, which is an object
// then js tries to add curr.yrsExperience to this object
// which is not what we wanted


// Grouping by a property, and totaling it too

// use reduce to group our team members by profession and find  
// the total experience for each profession
// the type of result we want back (integer, object, array etc) will determind
// the intial value we begin with
// in this case, an emtpy object is good {}

// I’m using the longer arrow function form here which includes curly braces 
// since this function will be a few lines of code and will need a return statement. 
// Just to be crystal clear, this first set of curly braces is the boundaries of 
// the callback function, and the second set after the comma is our initial 
// value, an empty object. This is what the accumulator will be on the first pass. 

// before filling out the curly braces, the accumulator is an empty object and 
// curr is the first team member in the array

// So, if I want to create a  property in my object for Developer, I need to get  
// curr.profession. 
// I’ll call this variable key. 
// Now, I need to check whether the key already exists in the object we’re 
// going to be accumulating into. If it doesn’t yet exist, I’ll set it equal to  
// curr.yrsExperience. 
// This means the first time we see a new profession, that property will  
// be added into the accumulator and its value will be set to the team member’s 
// experience.  
// Otherwise, if the key does already exist, it’s as simple as adding the current 
// member’s experience to the already existing value. 
// When I’m done, all I’ve got to do is return the accumulator.

let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc
}, {});
console.log(experienceByProfession)

// if i added another team member with a different profession to the original
// array, when the code is run the result would already have a new category  
// with the relevant years of experience

