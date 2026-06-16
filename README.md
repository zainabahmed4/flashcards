# Web Development Project 2 - *Web Dev Basics*

Submitted by: **Zainab Ahmed**

Web Dev Basics is a fun flashcard app designed to help users learn, review, and refresh important web development concepts. The app covers beginner-friendly topics like HTML, CSS, JavaScript, React, components, events, and more. Users can click through randomized flashcards and flip each card to reveal the answer.

The UI was designed to feel playful, welcoming, and thoughtful. I used a strawberry-inspired theme with soft colors, rounded cards, and a cohesive color palette to make the studying experience feel more fun and less intimidating.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='flashcards/flashcards-gif.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with GIF created with [Kap](https://getkap.co/)  


## Lessons Learned

While building this project, I learned how to use React state to control what appears on the screen. I practiced using useState to keep track of the current flashcard, flip cards between the question and answer sides, and randomly choose the next card. I also learned how arrays of objects can be used to store structured data, such as question-and-answer pairs.

This project helped me better understand how user interactions work in React, especially using onClick events to trigger changes. I also practiced organizing my app into different sections, connecting JSX with CSS classes, and designing a more polished interface with a consistent visual theme. One of the biggest takeaways was learning how small pieces of logic, like changing an index or toggling a boolean, can create an interactive user experience.

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