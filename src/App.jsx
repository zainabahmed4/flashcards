import { useState } from 'react'
import './App.css'
import correctImage from './assets/correct-image.png'
import wrongImage from './assets/try-again-image.png'
import ReactSwitch from 'react-switch'

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
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0) // to update the current card index when the user clicks next or previous, and to show the first card when the app loads

  const [mode, setMode] = useState('normal') // start mode as normal aka ordered cards

  const [userGuess, setUserGuess] = useState('') // this state variable will keep track of the user's guess for the current card. It starts as an empty string because the user hasn't typed anything yet.

  const [feedback, setFeedback] = useState('') // this state variable will keep track of the feedback for the user's guess. It starts as an empty string because there is no feedback yet.

  const [cardHistory, setCardHistory] = useState([0]) // Start the history with card 0 because that is the first card shown.
  // cardHistory will be an array that will keep adding every seen card's index

  const [historyPosition, setHistoryPosition] = useState(0) // this will keep track of where we are in the history array (always the end of it). It starts at 0 because we start on the first card.
  // so if cardHistory = [0, 7, 12], then historyPosition = 2

  const currentCard = flashcards[currentCardIndex]
  const totalCards = flashcards.length
  const [isFlipped, setIsFlipped] = useState(false) // this state variable keeps track of whether the card is flipped or not. It starts as false because we want to show the question first.

  // Whenever we go to the next or previous card, we want to make sure the card is showing the question side, so we set isFlipped to false whenever we change the card.
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }

  const resetCardView = () => {
    setIsFlipped(false)
    setUserGuess('')
    setFeedback('')
  }

  const goToPreviousCard = () => {
    if (mode === "normal") {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1)
        resetCardView()
      }
    } else if (historyPosition > 0) { // if there were even hards seen in the past:
      const newHistoryPosition = historyPosition - 1 // move back in the history by one card (completely delete the current card from the history). This is so that if you click next after going back, you get a new random card instead of the card you just went back from.

      const previousCardIndex = cardHistory[newHistoryPosition] // get the card index at the new history postion (which is the previous card index in the history array)

      setHistoryPosition(newHistoryPosition) // update the history position to the new position (which is one step back in the history)
      setCurrentCardIndex(previousCardIndex) // the current card index is now the previous card index, which is the card at the new history position in the history array

      resetCardView()
    }
  }

  const goToNextCard = () => {
    
    if (mode === "random") {
      let randomIndex = Math.floor(Math.random() * flashcards.length) //This creates a random index to start off

      while (randomIndex === currentCardIndex) { //condition ensures that the next card is not the same as the current card
        randomIndex = Math.floor(Math.random() * flashcards.length) // use this equation to get a random index for the next card
      }

      // Copy the history up to the current position
      const newHistory = cardHistory.slice(0, historyPosition + 1) // This creates a new array that is a copy of the cardHistory array from the start to the current history position (inclusive). This is important because if we go back in history and then click next, we want to discard any "future" history that is ahead of the current position, and start a new history from there.

      newHistory.push(randomIndex) // This adds the random card to the end of the history.

      setCardHistory(newHistory) // Update the card history to this new version.

      setHistoryPosition(newHistory.length - 1) // Move the history position to the end of the new history array, which is the position of the new card we just added.

      setCurrentCardIndex(randomIndex) // This updates the actual card shown on the screen.

      resetCardView()
    }

    else {
      if (currentCardIndex < flashcards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1)
        resetCardView()
      }
    }

  }


  const handleGuess = (e) => {

    setUserGuess(e.target.value)
  }

  const normalizeAnswer = (answer) => {
    return answer.toLowerCase().replace(/[^\w\s]/g, '').trim()
  }

  const checkAnswer = (e) => {
    e.preventDefault()

    if (normalizeAnswer(userGuess) === normalizeAnswer(currentCard.answer)) {
      setFeedback('CORRECT!')

    } else {
      setFeedback('TRY AGAIN!')
    }
  }

  const toggleMode = () => {
    setMode((curr) => curr === "normal" ? "random" : "normal")
    setCurrentCardIndex(0)
    setCardHistory([0])
    setHistoryPosition(0)
    resetCardView()
  }

  const isPreviousDisabled = mode === "normal" ? currentCardIndex === 0 : historyPosition === 0
  const isNextDisabled = mode === "normal" ? currentCardIndex === flashcards.length - 1 : flashcards.length <= 1

  
  
  return (
    <>
      <div className="App">
        <div className="main">
            <div className="heading">
              <img src="src/assets/webdev-basics-logo.png" alt="Heading Title 'Web Dev Basics'" />
              <h3>A fun and simple flashcard deck to learn, review, and refresh key web development concepts.</h3>
              <div className="headingMeta">
                <p>Total cards: {totalCards}</p>
                <div className="toggle">
                  <label>{mode === "normal" ? "Normal Mode" : "Random Mode"}</label>
                  <ReactSwitch onChange={toggleMode} checked={mode === "random"}/>
                </div>
              </div>
            </div>
          

          <div className="cardSection"> 
            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
              <div className="flip-card-inner">

                <div className="flip-card-front">
                  <p>{currentCard.question}</p>
                </div>

                <div className="flip-card-back">
                  <p>{currentCard.answer}</p>
                </div>
              </div>
            </div>

            <div className="cardControls" id="mode">
              <button onClick={goToPreviousCard} disabled={isPreviousDisabled} aria-label="Previous card">
                ←
              </button>
              <button onClick={goToNextCard} disabled={isNextDisabled} aria-label="Next card">
                →
              </button>
            </div>

            <div className="guessSection">
              <form onSubmit={checkAnswer}>
                <label>Guess the answer: </label>
                <input
                  id="text"
                  onChange={handleGuess}
                  value={userGuess}
                />
                <button id="submitGuess">Submit</button>
              </form>


              <div className='feedbackSection'>
                <p>{feedback}</p>
                {feedback === 'CORRECT!' && (
                  <img src={correctImage} alt="Correct answer" />
                )}
                {feedback === 'TRY AGAIN!' && (
                  <img src={wrongImage} alt="Wrong answer" />
                )}
              </div>

            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
