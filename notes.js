// Using the Array Map Method Lab Notes

/*

I. Using For...Of in Place of .map()
const skiSchool = ["anthony", "briana", "andre", "shaina"];
const rollCall = [];

for (const student of skiSchool) {
    rollCall.push(student + " the skier");
}
// => rollCall = (4) ["anthony the skier", "briana the skier", "andre the skier", "aalam the skier"];


II. map() With a Function Declaration
function studentRollCall(student) {
    return student + " the skier";
}

const skiSchool = ["anthony", "briana", "andre", "shaina"];
const rollCall = skiSchool.map(studentRollCall);
// => (4) ['anthony the skier', 'briana the skier', 'shaina the skier', 'aalam the skier']


III. map() With a Function Expression
function studentRollCall(student) {
    return student + " the skier";
}

const skiSchool = ["anthony", "briana", "andre", "shaina"];
const rollCall = skiSchool.map(function (student) {
    return student + " the skier";
});
// => rollCall = (4) ['anthony the skier', 'briana the skier', 'shaina the skier', 'aalam the skier']


IV. map() With an Arrow Function
// When the parameter list is only one element, we can drop the () !
const skiSchool = ["anthony", "briana", "andre", "shaina"];
const rollCall = skiSchool.map( student => student + " the skier" );
//=> rollCall = ["Anthony the skier", "briana the skier", "andre the skier", "shaina the skier"];


V. Demonstrate map() With Complex Data Structures
const robots = [
    { name: "R2D2", modes: 5, isActivated: false },
    { name: "Claptrap", modes: 3, isActivated: false },
    { name: "Cortana", modes: 2.5, isActivated: false },
    { name: "Codsworth", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map( robot => {
    return Object.assign({}, robot, {
        modes: robot.modes * 2,
        isActivated: true,
    });
});

console.log(activatedRobots);

Result:
// => (4) [{…}, {…}, {…}, {…}]
[
  0: {name: 'R2D2', modes: 10, isActivated: true}
  1: {name: 'Claptrap', modes: 6, isActivated: true}
  2: {name: 'Cortana', modes: 5, isActivated: true}
  3: {name: 'Codsworth', modes: 3, isActivated: true}
]

**** Before turning it into an arrow function:
const activatedRobots = robots.map(function (robot) {
    return Object.assign({}, robot, {
        modes: robot.modes * 2,
        isActivated: true,
    });
});






// Extra Practice:
const basketballTeams = ["Los Angeles Lakers", "New Orleans Pelicans", "Chicago Bulls", "Milwaukee Bucks", "Denver Nuggets"];


function presenting (team) {
    return "Now presenting, the " + team + " of the NBA!...";
}

const anounceTeam = basketballTeams.map(presenting);

anounceTeam;
// => (5) ['Now presenting, the Los Angeles Lakersof the NBA!', 'Now presenting, the New Orleans Pelicansof the NBA!', 'Now presenting, the Chicago Bullsof the NBA!', 'Now presenting, the Milwaukee Bucksof the NBA!', 'Now presenting, the Denver Nuggetsof the NBA!']
basketballTeams;
// => (5) ['Los Angeles Lakers', 'New Orleans Pelicans', 'Chicago Bulls', 'Milwaukee Bucks', 'Denver Nuggets']
const presenting = function (team) {
    return "Now presenting, the " + team + " of the NBA!...";
}



const aStringWithWords = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;
// const words = aStringWithWords.match(/\w+/g);
//                             ^ creates an Array of 'words'
// const filteredWords = words.filter( word => /in/i.test(word) );
//                                          ^ words containing 'in'
// console.log(filteredWords);
// => (7) ['adipiscing', 'incididunt', 'minim', 'in', 'in', 'sint', 'in']

// const words = tutorials.match(/\w+/g);

// const filteredWords = words.filter( )

*/