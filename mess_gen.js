// Generate random number (0 to length of array)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Generate a random set-up and punchline combination
function getRandomJoke() {
    const setUpIndex = getRandomInt(setUp.length);
    const randomSetup = setUp[setUpIndex];
    const punchLineIndex = getRandomInt(punchLine.length)
    const randomPunchLine = punchLine[punchLineIndex]
    return [setUpIndex, randomSetup, punchLineIndex, randomPunchLine];
}

// Array of joke set-ups
const setUp = [
    "Why did the chicken cross the road?",
    "Knock Knock! Who's there? Doctor! Doctor who?",
    "What is brown and sticky?",
];

// Array of joke punch lines
const punchLine = [
    "To get to the other side.",
    "That's right, It is Doctor Who.",
    "A stick."
];

// Create empty array for joke
const joke = [];
    
// Call function to return random setup / punchline combination
const randomJoke = getRandomJoke();

// Set variables to return values (array) from getRandomJoke function
const setUpIndex = randomJoke[0],
      randomSetup =  randomJoke[1];
      punchLineIndex = randomJoke[2];
      randomPunchLine = randomJoke[3];

// Add setup to joke array
joke.push(randomSetup);
// Add setup - punchline seperator
joke.push(" - ")
// Add punchline to joke array
joke.push(randomPunchLine);     

// Print random joke as sentence (remove commas from array)
console.log(joke.join(" "));

// Print response to random joke
if (setUpIndex === punchLineIndex){
    console.log("Haha. Very funny");
} else {
    console.log("I do not understand that joke!")
}