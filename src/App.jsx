import { useState } from 'react'
import './App.css'

const flashcards = [
  {
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
  },
  {
    question: 'What is HTML used for?',
    answer: 'Structuring content on a web page',
  },
  {
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
  },
  {
    question: 'What is CSS used for?',
    answer: 'Styling and laying out web pages',
  },
  {
    question: 'What is JavaScript used for?',
    answer: 'Adding interactivity to web pages',
  },
  {
    question: 'What is a div?',
    answer: 'A container used to group content',
  },
  {
    question: 'What is a class in CSS?',
    answer: 'A reusable name used to style elements',
  },
  {
    question: 'What is an id in HTML?',
    answer: 'A unique identifier for one element',
  },
  {
    question: 'What does href do?',
    answer: 'It tells a link where to go',
  },
  {
    question: 'What does src do?',
    answer: 'It tells an image or file where to load from',
  },
  {
    question: 'What is a button used for?',
    answer: 'Letting users click and trigger an action',
  },
  {
    question: 'What is an event?',
    answer: 'Something the user or browser does',
  },
  {
    question: 'What does onClick do?',
    answer: 'Runs code when an element is clicked',
  },
  {
    question: 'What is React?',
    answer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'What is a component?',
    answer: 'A reusable piece of a webpage',
  },
  {
    question: 'What is JSX?',
    answer: 'HTML-like code written inside JavaScript',
  },
  {
    question: 'What does useState do?',
    answer: 'It lets React remember changing values',
  },
  {
    question: 'What is npm?',
    answer: 'A tool for installing JavaScript packages',
  },
  {
    question: 'What does npm run dev do?',
    answer: 'Starts the local development server',
  },
  {
    question: 'What is responsive design?',
    answer: 'Design that works on different screen sizes',
  },
]

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  // what the above line means:
  // usestate = 0: tells it to remember to start at the first card (index 0) when the app loads
  // currentCardIndex = 0: the current index (which will start at 0)
  // setCurrentCardIndex: the function we can call to update the current card index when we want to move to the next or previous card. The screen re-renders each time

  const currentCard = flashcards[currentCardIndex] // grabs the current card at the current index

  const cardsLeft = flashcards.length - currentCardIndex - 1// calculates how many cards are left by taking the total number of cards and subtracting the current index + 1 (since index starts at 0)
  // doing the -1 at the end ensures that when at the last card, it says "0/10 cards left" instead of "1/10 cards left"

  // function that runs when the back arrow is clicked
  const goToPreviousCard = () => {
    setCurrentCardIndex((currentIndex) => { // call the other function to update the current card index by passing in the current index as an argument
    
      // this is for looping back.
      // scanario: you're on the first card, so clicking back will loop to the last card of array
      if (currentIndex === 0) {
        return flashcards.length - 1 // returns the absolute last card
      } 
      else { // for all other regular cases, just give the card at the previous index:
        return currentIndex - 1
      }
    })
  }

  const goToNextCard = () => {
    setCurrentCardIndex((currentIndex) => {

      // to loop back to beginning
      // scenario: you're on the last card, so clicking next will loop to the first card of array
      if (currentIndex === flashcards.length - 1) { // checks if you're at the last card
        return 0 // returns first card at first index
      } 
      else { // for all other regular cases, just give the card at the next index:
        return currentIndex + 1
      }
    })
  }

  return (
    <>
      <div className="App">
        <div className="main">
          <div className="heading">
            <img src="src/assets/webdev-basics-logo.png" alt="Heading Title 'Web Dev Basics'" />
            <h3>A fun and simple flashcard deck to learn, review, and refresh key web development concepts.</h3>
            <p>Total cards left: {cardsLeft}/20</p>
          </div>

          <div className="cardSection"> 
            <div className="flip-card"> 
              <div className="flip-card-inner">

                <div className="flip-card-front">
                  <p>{currentCard.question}</p>
                </div>

                <div className="flip-card-back">
                  <p>{currentCard.answer}</p>
                </div>
              </div>
            </div>

            <div className="cardControls">
              <button onClick={goToPreviousCard} aria-label="Previous card">
                ←
              </button>
              <button onClick={goToNextCard} aria-label="Next card">
                →
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
