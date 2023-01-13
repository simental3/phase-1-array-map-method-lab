// Using Array Map Method Lab

// Globals
const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
    return tutorials.map(tutorial => tutorial.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' '));
}
console.log('Title Cased:', titleCased());




/*
// Deliverables
1. Iterate through each array & split each element (sentence) into its own seperate array using .map()
2. Each array (sentence) consists of seperate elements (words). Iterate through the array & capitlize the first letter of each element (word)
3. 
4. Return a new string that is Title Cased
*/

// Refactored:
// const titleCased2 = () => {
//     return tutorials.map(tutorial => tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
// }
// console.log(titleCased2());


// Lab Solution:
const titleCasedLab = () => {
    return tutorials.map((sentence) => {
        const words = sentence.split(" ");
        const capitalizedWords = words.map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
        );
        const response = capitalizedWords.join(" ");
        return response;
    });
};
console.log('Lab:', titleCasedLab())