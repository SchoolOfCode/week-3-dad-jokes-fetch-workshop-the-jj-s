// Hardcoded array of joke objects
// Each joke object has a unique id
// const jokes = [
//   {
//     id: "A1bC2D",
//     joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
//   },
//   {
//     id: "E3fG4H",
//     joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
//   },
//   {
//     id: "I5jK6L",
//     joke: "Why don't skeletons fight each other? They don't have the guts.",
//   },
//   {
//     id: "kH9pZU",
//     joke: "What do you call a bear with no teeth? A gummy bear!",
//   },
//   {
//     id: "L8nK5M",
//     joke: "What do you call a fake noodle? An impasta!",
//   },
//   {
//     id: "P9qR4N",
//     joke: "Why don't eggs tell jokes? They'd crack up!",
//   },
//   {
//     id: "T6vW2X",
//     joke: "What do you call a sleeping bull? A bulldozer!",
//   },
//   {
//     id: "Y7mB8K",
//     joke: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
//   },
//   {
//     id: "Q4sJ9H",
//     joke: "What do you call a bear without ears? B!",
//   },
//   {
//     id: "G5fD3L",
//     joke: "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
//   },
//   {
//     id: "C2xZ7V",
//     joke: "What do you call a pig that does karate? A pork chop!",
//   },
//   {
//     id: "W8tN4M",
//     joke: "Why don't scientists trust atoms? Because they make up everything!",
//   },
//   {
//     id: "E1yH6B",
//     joke: "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
//   },
// ];



// fetch api 


  // store api url in variable
  const jokesAPI = 'https://icanhazdadjoke.com/'

  // create an async function to get jokes
async function getAndDisplayNewJoke(){

    // fetch the api url
    const response = await fetch(jokesAPI, {
      headers: {
        Accept: 'application/json'
      }

    });

    // store it in response with await & add .json()
    const data = await response.json()
    
    // check object and plan from there
    console.log(data)

    displayJoke(data)
    // object joke returned contains: id, joke, status (?)    
    return data



  }


  // get and display new joke
  // function getAndDisplayNewJoke() {
  //     const joke =  getJoke();
  //      return displayJoke(joke);
  //   }

  
  // function to display joke 
  function displayJoke(joke) {
    const jokeElement = document.getElementById("joke");
     jokeElement.textContent = joke.joke;
  }

// // Waits for the DOM to be fully loaded and then displays an initial joke.
  document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

  // add event listeners to generate joke when click button
  const newJokeButton = document.getElementById("newJokeBtn");

  // // Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
  newJokeButton.addEventListener("click", getAndDisplayNewJoke );



// 7. check differences: make sure it can match what we already have - e.g. an id and a joke (to keep as simple as possible)

// 8. check if we can use our random index?

  // write new function to display the joke, no need for our random index

// 9. check how it will alter the existing functions?

  // retrieve joke function will have to change to retrieve a joke from the api (no random index)
  // display joke stays the same? just pass retrieve joke to parameter

// 10. check if it updates on the DOM


// 11. test if pressing button generates a new joke






// -------------

// Main function to retrieve and display a new joke
// function getAndDisplayNewJoke() {
//   const joke = retrieveJoke();
//   displayJoke(joke);
// }

// // Function to retrieve a random joke
// function retrieveJoke() {
//   const randomIndex = Math.floor(Math.random() * jokes.length);
//   return jokes[randomIndex];
// }

// // Function to update the DOM with the provided joke
// function displayJoke(joke) {
//   const jokeElement = document.getElementById("joke");
//   jokeElement.textContent = joke.joke;
// }

// // Waits for the DOM to be fully loaded and then displays an initial joke.
// document.addEventListener("DOMContentLoaded", getAndDisplayNewJoke);

// // Retrieves the "new joke" button
// const newJokeButton = document.getElementById("newJokeBtn");

// // Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
// newJokeButton.addEventListener("click", getAndDisplayNewJoke);

// https://icanhazdadjoke.com/