# Quiz Game JavaScript Logic Explained

This document explains the logic and structure of the `script.js` file used in the Quiz Game project. The goal is to help you understand how the quiz works, what problems are being solved, and how the code is organized to provide a smooth user experience.

---

## 1. **Problems Being Tackled**

- **Screen Management:** The quiz has three screens (start, quiz, result). Only one should be visible at a time.
- **Dynamic Question Rendering:** Questions and answers must be shown one at a time, and the UI must update as the user progresses.
- **Answer Checking:** The app must check if the selected answer is correct, give immediate feedback, and update the score.
- **Progress Tracking:** The quiz should show the current question number, score, and a progress bar.
- **Result Calculation:** At the end, the app should display the user's score and a message based on performance.
- **Responsiveness:** The quiz should work on all screen sizes and devices.

---

## 2. **How the Logic Works**

### **A. Data Structure**

- The quiz questions are stored in an array of objects called `questions`.
- Each object contains:
  - `question`: The question text.
  - `answers`: An array of possible answers.
  - `correct`: The index of the correct answer in the `answers` array.

### **B. DOM Elements**

- The script uses `getElementById` and `querySelector` to reference all important HTML elements, such as buttons, screens, question text, answer container, score, and progress bar.

### **C. State Variables**

- `currentQuestion`: Tracks the index of the current question.
- `score`: Tracks the user's score.
- `answered`: Prevents multiple answers for the same question.

### **D. Screen Management**

- The `showScreen(screen)` function ensures only the desired screen is visible by toggling the `active` class and setting the `display` style.
- This keeps the UI clean and prevents elements from overlapping.

### **E. Starting the Quiz**

- When the user clicks "Start Quiz", `startQuiz()` is called:
  - Resets `currentQuestion` and `score`.
  - Shows the quiz screen.
  - Calls `renderQuestion()` to display the first question.
  - Updates the progress bar.

### **F. Rendering Questions**

- `renderQuestion()`:
  - Sets `answered` to `false` (so the user can answer).
  - Updates the question text.
  - Clears previous answers and creates new answer buttons for the current question.
  - Each button is given an `onclick` handler that calls `selectAnswer()` with the chosen index.
  - Updates the current question number and score display.
  - Calls `updateProgress()`.

### **G. Handling Answers**

- `selectAnswer(idx, btn)`:
  - If already answered, does nothing.
  - Marks all answer buttons as disabled.
  - Adds a `correct` class to the correct answer button, and a `wrong` class to the selected button if it was incorrect.
  - If the answer is correct, increments the score.
  - After a short delay, moves to the next question or shows the result screen.

### **H. Progress Bar**

- `updateProgress()`:
  - Calculates the percentage of questions completed.
  - Sets the width of the progress bar accordingly.

### **I. Showing Results**

- `showResult()`:
  - Switches to the result screen.
  - Displays the final score and the total number of questions.
  - Shows a message based on the user's performance (perfect, great, good, or needs practice).
  - Fills the progress bar.

### **J. Event Listeners**

- On page load (`DOMContentLoaded`), the script:
  - Shows the start screen.
  - Sets the maximum score in the result screen.
  - Adds click event listeners to the start and restart buttons.

---

## 3. **Summary of Flow**

1. **User clicks "Start Quiz"** → Quiz screen appears, first question is shown.
2. **User selects an answer** → Immediate feedback, score is updated, next question appears after a short delay.
3. **After last question** → Result screen appears, showing score and a message.
4. **User clicks "Restart Quiz"** → Quiz restarts from the beginning.

---

## 4. **Key Points for Intermediate Students**

- **Separation of Concerns:** UI updates, state management, and event handling are kept in separate functions for clarity.
- **Dynamic DOM Manipulation:** The quiz dynamically creates and updates answer buttons based on the current question.
- **Stateful Logic:** Variables like `currentQuestion`, `score`, and `answered` ensure the quiz logic is robust and prevents bugs like double-answering.
- **User Experience:** Immediate feedback, progress tracking, and responsive design make the quiz engaging and accessible.

---

## 5. **Possible Extensions**

- Add more questions or randomize their order.
- Add a timer for each question.
- Store high scores using localStorage.
- Allow for multiple quizzes or categories.

---

**In summary:**  
The JavaScript file for this quiz game demonstrates how to build an interactive, stateful, and user-friendly quiz application using vanilla JavaScript and DOM manipulation. The code is modular, easy to extend, and covers all the basic requirements for a modern quiz experience.

