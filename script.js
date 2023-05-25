`use strict`;

// Selecting Elements
const logo = document.querySelector(".logo");
const title = document.querySelector(".title");
const chooseListLink = document.querySelector(".choose-list-link");
const settingsLink = document.querySelector(".settings-link");
const aboutLink = document.querySelector(".about-link");
const helpLink = document.querySelector(".help-link");
const appContainer = document.querySelector(".app-container");
const kanjiPrompt = document.querySelector(".kanji-prompt");
const answerText = document.querySelector(".answer-text");
const checkAnsBtn = document.querySelector(".check-ans-btn");
const submitListBtn = document.querySelector(".submit-list-btn");
const listUserName = document.getElementById(".list-name");
const introText = document.querySelector(".intro-text");
const pronChoiceList = document.querySelectorAll(".pron-choice");
const meaningChoiceList = document.querySelectorAll(".mean-choice");
const submitAnswerBtn = document.querySelector(".submit-answer");
const beginTestBtn = document.querySelector(".begin-button");
const pronPrompt = document.querySelector(".pron-prompt");
const meanPrompt = document.querySelector(".mean-prompt");
const ansPrompt = document.querySelector(".ans-prompt");
const resultString = document.querySelector(".result-string");
const resultsContainer = document.querySelector(".results");
const incorrectkanjiTextArea = document.querySelector(".incorrect-kanji");
const abandonTestBtn = document.querySelector(".abandon-btn");
const continueTestBtn = document.querySelector(".continue-btn");
const chooseListDropdown = document.querySelector(".list-dropdown");
const aboutDropdown = document.querySelector(".about-dropdown");
const helpDropdown = document.querySelector(".help-dropdown");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".menu-toggle");

// Boolean to see if user is currently taking a test
let testInProgress = false;

// The user must select the reading and meaning which match this kanji object
let currentCorrectkanji;

// These variables will be used in the calculateRange function, initialized in initailizeTest function
let highestCorrectkanji;
let lowestIncorrectkanji;
let currentStreak;
let totalAnswers;
let correctAnswersThisRound;
let incorrectAnswersThisRound;
let min;
let max;
let correctAnswer;
let triesUntilTestOver;
let correctAnswers;
let incorrectAnswers;

function generatePrompt() {
  // Reset the GUI
  ansPrompt.textContent = "Confirm Answer.";
  pronPrompt.textContent = "Select the correct reading:";
  meanPrompt.textContent = "Select the correct definition:";
  submitAnswerBtn.textContent = "I don't know this kanji";
  pronChoiceList.forEach((btn) => btn.classList.remove("choice-activated"));
  meaningChoiceList.forEach((btn) => btn.classList.remove("choice-activated"));

  // This array will hold the four random kanji objects which make up the choices
  const kanjiArray = [];
  for (let i = 0; i < pronChoiceList.length; i++) {
    let nextkanji;
    // This do:while loop should prevent us from seeing any kanji twice in the same test
    do {
      nextkanji = generateRandomkanji();
    } while (
      incorrectAnswers.includes(kanjiList.indexOf(nextkanji)) ||
      correctAnswers.includes(kanjiList.indexOf(nextkanji)) ||
      kanjiArray.includes(nextkanji)
    );
    kanjiArray.push(nextkanji);
  }

  // Fill up the reading choices
  kanjiArray.forEach(
    (kanji, i) => (pronChoiceList[i].textContent = trimReading(kanji.kana))
  );

  // Shuffle the array so that the meaning and readings are not in the same columns
  shuffleArray(kanjiArray);

  // Fill up the meaning choices
  kanjiArray.forEach(
    (kanji, i) =>
      (meaningChoiceList[i].textContent = trimMeaning(kanji.english))
  );

  // Choose one of the kanji to be the correct answer
  const correctkanji =
    kanjiArray[Math.floor(Math.random() * kanjiArray.length)];
  kanjiPrompt.textContent = correctkanji.kanji;
  currentCorrectkanji = correctkanji;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// For meanings that are too long, delete all content after second semi-colon
function trimMeaning(meaning) {
  // Find the index of the second semicolon
  const secondSemicolonIndex = meaning.indexOf(",", meaning.indexOf(",") + 1);

  // If the second semicolon is found
  if (secondSemicolonIndex !== -1) {
    // Extract the substring before the second semicolon
    return meaning.substring(0, secondSemicolonIndex);
  }

  // If the second semicolon is not found, return the original string
  return meaning.trim();
}

function trimReading(reading) {
  const words = reading.split("    ");

  let onyomi = [];
  let kunyomi = [];

  for (const word of words) {
    if (onyomi.length < 2 && !containsHiragana(word)) {
      onyomi.push(word);
    } else if (kunyomi.length < 2 && containsHiragana(word)) {
      kunyomi.push(word);
    }

    if (onyomi.length === 2 && kunyomi.length === 2) {
      break;
    }
  }

  const result = [...onyomi, ...kunyomi].join("; ");
  return result;
}

function containsHiragana(word) {
  const hiraganaRegex = /[\u3040-\u309F]/; // Range of Hiragana characters in Unicode
  return hiraganaRegex.test(word);
}

function generateRandomkanji() {
  const randomNum = Math.round(Math.random() * (max - min)) + min;
  return kanjiList[randomNum];
}

// Keeps track of incorrect and correct answers and calculates a new range based on these
function calculateRange() {
  totalAnswers++;
  // Update value based on whether user answered correctly
  const currentkanjiIndex = kanjiList.indexOf(currentCorrectkanji);
  if (correctAnswer) {
    highestCorrectkanji = Math.max(currentkanjiIndex, highestCorrectkanji);
    currentStreak = currentStreak > 0 ? ++currentStreak : 1;
    correctAnswers.push(currentkanjiIndex);
    correctAnswersThisRound++;
  } else {
    lowestIncorrectkanji = Math.min(currentkanjiIndex, lowestIncorrectkanji);
    currentStreak = currentStreak < 0 ? --currentStreak : -1;
    incorrectAnswersThisRound++;
    incorrectAnswers.push(currentkanjiIndex);
  }
  console.log(
    `totalAnswers = ${totalAnswers}\n currentStreak = ${currentStreak}\n min = ${min}\n max = ${max}`
  );

  // If user has gone through 100 kanji, the test is over
  if (totalAnswers >= triesUntilTestOver) {
    if (incorrectAnswers.length === 0) {
      triesUntilTestOver += 10;
    } else {
      generateResults();
      return;
    }
  }

  // Otherwise, determine new top and bottom if necessary according to user's current performance
  else if (
    Math.abs(currentStreak) >= 5 ||
    correctAnswersThisRound + incorrectAnswersThisRound >= 15
  ) {
    if (currentStreak >= 5) {
      // Set new bottom, push top up
      min = highestCorrectkanji;
      max = Math.min(max + 650, kanjiList.length);
    } else if (currentStreak <= -5) {
      // Set new top, push bottom down
      max = Math.max(highestCorrectkanji - 100, 50);
      min = min / 2;
    } else if (correctAnswersThisRound + incorrectAnswersThisRound >= 10) {
      // Adjust top and bottom accordingly
      if (highestCorrectkanji > lowestIncorrectkanji) {
        min = highestCorrectkanji;
        max = Math.min(max + 250, kanjiList.length);
      } else {
        max = highestCorrectkanji;
        min = lowestIncorrectkanji;
      }
    }
    if (min >= max || max - min < 50) {
      // This will give the user a perfect score if they deserve it
      if (min > 5900 && incorrectAnswers.length === 0) {
        min = 6000;
        max = 6000;
        generateResults();
        return;
      }
      min = Math.max(0, max - 250);
    }
    currentStreak = 0;
    incorrectAnswersThisRound = 0;
    correctAnswersThisRound = 0;
  }
}

function initializeTest() {
  // Update GUI
  introText.classList.add("hidden");
  appContainer.classList.remove("hidden");
  modalChooseList.style.display = "none";

  // Initialize variables for new test
  highestCorrectkanji = 0;
  lowestIncorrectkanji = 6000;
  currentStreak = 0;
  totalAnswers = 0;
  correctAnswersThisRound = 0;
  incorrectAnswersThisRound = 0;
  min = 0;
  max = 500;
  correctAnswer = false;
  triesUntilTestOver = 50;
  correctAnswers = [];
  incorrectAnswers = [];

  testInProgress = true;
  generatePrompt();
}

function generateResults() {
  const score = Math.floor((max + min) / 2);

  // Update GUI
  appContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  window.scrollTo(0, 0);
  resultString.textContent = `Wow, you know approximately ${score} kanji!`;
  if (incorrectAnswers.length > 0) {
    incorrectkanjiTextArea.value = "Kanji you answered incorrectly:\n";
    incorrectAnswers.forEach((kanjiNum, idx) => {
      currkanji = kanjiList[kanjiNum];
      incorrectkanjiTextArea.value += `\n${idx + 1}. ${
        currkanji.kanji
      } : ${trimReading(currkanji.kana)} -- ${trimMeaning(
        currkanji.english
      )}\n`;
    });
  } else {
    incorrectkanjiTextArea.value =
      "You answered every question correctly! You're a kanji HERO! 💯😮🎉\n";
  }
  // TODO: Add an SNS sharing thing
  testInProgress = false;
}

// Coding Modal windows
// Get the modal
const modalChooseList = document.querySelector(".modal-choose-list");
const modalAbout = document.querySelector(".modal-about");
const modalHelp = document.querySelector(".modal-help");
const modalAbandon = document.querySelector(".modal-abandon");

// Get the <span> element that closes the modal
const closeListModal = document.querySelector(".close-list-modal");
const closeAboutModal = document.querySelector(".close-about-btn");
const closeHelpModal = document.querySelector(".close-help-btn");
const closeAbandonModal = document.querySelector(".close-abandon-btn");

// When the user clicks the link, open the modal
chooseListLink.onclick = function () {
  if (testInProgress) {
    modalAbandon.style.display = "block";
    return;
  }
  modalChooseList.style.display = "block";
};

aboutLink.onclick = function () {
  modalAbout.style.display = "block";
};

helpLink.onclick = function () {
  modalHelp.style.display = "block";
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("dropdown-item")) {
    const target = event.target;
    if (target === chooseListDropdown) {
      if (testInProgress) {
        modalAbandon.style.display = "block";
        return;
      }
      modalChooseList.style.display = "block";
    } else if (target === aboutDropdown) {
      modalAbout.style.display = "block";
    } else if (target === helpDropdown) {
      modalHelp.style.display = "block";
    }
    dropdown.classList.remove("show");
  }
});

// When the user clicks on <span> (x), close the modal
closeListModal.onclick = function () {
  modalChooseList.style.display = "none";
};

closeAboutModal.onclick = function () {
  modalAbout.style.display = "none";
};

closeHelpModal.onclick = function () {
  modalHelp.style.display = "none";
};

closeAbandonModal.onclick = function () {
  modalAbandon.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (
    event.target == modalChooseList ||
    event.target == modalAbout ||
    event.target == modalHelp ||
    event.target == modalAbandon
  ) {
    modalChooseList.style.display = "none";
    modalAbout.style.display = "none";
    modalHelp.style.display = "none";
    modalAbandon.style.display = "none";
  }
};

// Event Listeners

// Makes sure only one reading choice can be selected at once
pronChoiceList.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice-activated")) {
      event.target.classList.remove("choice-activated");
    } else {
      // Remove 'choice-activated' class from all buttons
      pronChoiceList.forEach((btn) => btn.classList.remove("choice-activated"));

      // Add 'choice-activated' class to the clicked button
      button.classList.toggle("choice-activated");
    }

    if (
      document.querySelector(".pron-choice.choice-activated") &&
      document.querySelector(".mean-choice.choice-activated")
    ) {
      submitAnswerBtn.textContent = "Submit";
    } else {
      submitAnswerBtn.textContent = "I don't know this kanji";
    }
  });
});

// Makes sure only one meaning choice can be selected at once
meaningChoiceList.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice-activated")) {
      event.target.classList.remove("choice-activated");
    } else {
      // Remove 'choice-activated' class from all buttons
      meaningChoiceList.forEach((btn) =>
        btn.classList.remove("choice-activated")
      );

      // Add 'choice-activated' class to the clicked button
      button.classList.toggle("choice-activated");
    }

    if (
      document.querySelector(".pron-choice.choice-activated") &&
      document.querySelector(".mean-choice.choice-activated")
    ) {
      submitAnswerBtn.textContent = "Submit";
    } else {
      submitAnswerBtn.textContent = "I don't know this kanji";
    }
  });
});

// The "submit answer" button actually has a variety of functions depending on the state
submitAnswerBtn.addEventListener("click", function () {
  meaningChoiceList.forEach((ele) => ele.classList.add("disabled-choice"));
  pronChoiceList.forEach((ele) => ele.classList.add("disabled-choice"));
  // The submit button changes to "next" after the user submits an answer. Clicking next generates next prompt.
  if (submitAnswerBtn.textContent === "Next") {
    pronChoiceList.forEach((ele) => {
      ele.classList.remove("incorrect-style");
      ele.classList.remove("correct-style");
      ele.classList.remove("disabled-choice");
    });
    meaningChoiceList.forEach((ele) => {
      ele.classList.remove("incorrect-style");
      ele.classList.remove("correct-style");
      ele.classList.remove("disabled-choice");
    });
    window.scrollTo(0, 0);
    generatePrompt();
    return;
  }
  // If the user has completed the test, clicking this button will show results
  if (submitAnswerBtn.textContent === "Show results!") {
    generateResults();
  }

  // If the user entered "I don't know", this block is executed, otherwise answers evaluated
  if (submitAnswerBtn.textContent === "I don't know this kanji") {
    correctAnswer = false;
    pronPrompt.textContent = 'You submitted "I don\'t know" for this kanji.';
    meanPrompt.textContent = "";
    pronChoiceList.forEach((ele) => {
      if (ele.textContent === trimReading(currentCorrectkanji.kana)) {
        ele.classList.add("correct-style");
      }
    });
    meaningChoiceList.forEach((ele) => {
      if (ele.textContent === trimMeaning(currentCorrectkanji.english)) {
        ele.classList.add("correct-style");
      }
    });
  }

  // Evaluates answer of reading and meaning, correct answer only set if both are correct
  else {
    const pronSelection = document.querySelector(
      ".pron-choice.choice-activated"
    );
    const meanSelection = document.querySelector(
      ".mean-choice.choice-activated"
    );

    // Check reading for correctness
    if (trimReading(currentCorrectkanji.kana) == pronSelection.textContent) {
      pronPrompt.textContent = "Reading: Correct";
      pronSelection.classList.add("correct-style");
    } else {
      pronPrompt.textContent = "Reading: Incorrect";
      pronSelection.classList.add("incorrect-style");
      pronChoiceList.forEach((ele) => {
        if (ele.textContent === trimReading(currentCorrectkanji.kana)) {
          ele.classList.add("correct-style");
        }
      });
    }

    // Check meaning for correctness
    if (trimMeaning(currentCorrectkanji.english) == meanSelection.textContent) {
      meanPrompt.textContent = "Definition: Correct";
      meanSelection.classList.add("correct-style");
    } else {
      meanPrompt.textContent = "Definition: Incorrect";
      meanSelection.classList.add("incorrect-style");
      meaningChoiceList.forEach((ele) => {
        if (ele.textContent === trimMeaning(currentCorrectkanji.english)) {
          ele.classList.add("correct-style");
        }
      });
    }

    // Evaluates total answer for correctness.
    // Answers are only correct if user selected correct reading and meaning
    if (
      trimReading(currentCorrectkanji.kana) == pronSelection.textContent &&
      trimMeaning(currentCorrectkanji.english) == meanSelection.textContent
    ) {
      correctAnswer = true;
    } else {
      correctAnswer = false;
    }
  }

  // Update GUI
  ansPrompt.textContent = "Click next to continue.";
  submitAnswerBtn.textContent = "Next";
  calculateRange();
});

beginTestBtn.addEventListener("click", function () {
  initializeTest();
});

abandonTestBtn.addEventListener("click", function () {
  appContainer.classList.add("hidden");
  introText.classList.remove("hidden");
  modalChooseList.style.display = "block";
  modalAbandon.style.display = "none";
  testInProgress = false;
});

continueTestBtn.addEventListener("click", function () {
  modalAbandon.style.display = "none";
});
