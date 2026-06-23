# Web Development Project 3 - *Web Dev Basics*

Submitted by: **Zainab Ahmed**

This web app: **Web Dev Basics is a flashcard study app that helps users practice beginner-friendly web development concepts. Users can flip cards, type guesses before revealing answers, get correct/incorrect feedback, move through cards in order, and switch into a random mode for extra practice.**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - [x] Application features a clearly labeled input box with a submit button where users can type in a guess
  - [x] Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - [x] Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - [x] A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - [x] A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - [x] Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list, not allowing for wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - [x] Cards remain in the same sequence unless random mode is selected
  - [x] Cards change randomly once random mode is selected
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - [x] Answers are considered correct even when there are uppercase/lowercase differences
  - [x] Answers are considered correct even when there are punctuation differences or extra spaces
- [ ] A counter displays the user's current and longest streak of correct responses
  - [ ] The current counter increments when a user guesses an answer correctly
  - [ ] The current counter resets to 0 when a user guesses an answer incorrectly
  - [ ] A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - [ ] The user can mark a card to indicate that it has been mastered
  - [ ] Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

* [x] Added a normal/random mode toggle so users can choose between ordered studying and randomized practice.
* [x] Added custom correct and try-again images for answer feedback.
* [x] Added a playful strawberry-inspired visual theme.

## Video Walkthrough


<img src='flashcards-final.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/)

## Notes

One challenge was understanding how to separate different pieces of state in React. The app uses state to remember the current card, whether the card is flipped, the user's typed guess, the answer feedback, and the selected mode. Another challenge was updating the navigation logic so normal mode moves through the cards in order while random mode still chooses random cards.

## License

    Copyright [2026] [Zainab Ahmed]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
