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
const incorrectKanjiTextArea = document.querySelector(".incorrect-kanji");
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
let currentCorrectKanji;

// These variables will be used in the calculateRange function, initialized in initailizeTest function
let highestCorrectkanji;
let lowestIncorrectKanji;
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
let honingRangeBool;

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
      nextkanji = generateRandomKanji();
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
  currentCorrectKanji = correctkanji;

  // FOR TESTING PURPOSES REMOVE LATER
  console.log(kanjiList.indexOf(currentCorrectKanji));
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

  const result = [...onyomi, ...kunyomi].join("；　");
  return result;
}

function containsHiragana(word) {
  const hiraganaRegex = /[\u3040-\u309F]/; // Range of Hiragana characters in Unicode
  return hiraganaRegex.test(word);
}

function generateRandomKanji() {
  const randomNum = Math.round(Math.random() * (max - min)) + min;
  return kanjiList[randomNum];
}

// Keeps track of incorrect and correct answers and calculates a new range based on these
function calculateRange() {
  totalAnswers++;

  // Update value based on whether user answered correctly
  const currentkanjiIndex = kanjiList.indexOf(currentCorrectKanji);
  if (correctAnswer) {
    highestCorrectkanji = Math.max(currentkanjiIndex, highestCorrectkanji);
    currentStreak = currentStreak > 0 ? ++currentStreak : 1;
    correctAnswers.push(currentkanjiIndex);
    correctAnswersThisRound++;
  } else {
    lowestIncorrectKanji = Math.min(currentkanjiIndex, lowestIncorrectKanji);
    currentStreak = currentStreak < 0 ? --currentStreak : -1;
    incorrectAnswersThisRound++;
    incorrectAnswers.push(currentkanjiIndex);
    if (!honingRangeBool) {
      honingRangeBool = true;
      min = Math.max(kanjiList.indexOf(currentCorrectKanji) - 25, 0);
      max = kanjiList.indexOf(currentCorrectKanji) + 25;
    }
  }

  // For Debugging purposes
  console.log(
    `totalAnswers = ${totalAnswers}\n currentStreak = ${currentStreak}\n min = ${min}\n max = ${max}`
  );

  // If user has gone through 50 kanji, the test is over
  if (totalAnswers >= triesUntilTestOver) {
    if (incorrectAnswers.length === 0) {
      triesUntilTestOver += 10;
    } else {
      generateResults();
      return;
    }
  }

  // Otherwise, determine new top and bottom if necessary according to user's current performance
  // Only if the user has a current streak of abs(5) or 15 total answers this round

  // Condition 1 -- The user is on a positive streak so they probably know all the kanji in the range
  // This allows the range to quickly shoot up as long as the user consistently answers correctly
  if (currentStreak >= 5 && !honingRangeBool) {
    // Set new bottom, push top up
    min = highestCorrectkanji;
    max = Math.min(max + 650, kanjiList.length);
    endCalcRangeRound();
  }
  // Condition 2 -- The user is on a negative streak, so they might need the range bumped down otherwise they'll terminate early
  else if (currentStreak <= -5) {
    // Set new top, push bottom down
    max = highestCorrectkanji + 50;
    min = highestCorrectkanji;
    honingRangeBool = false;
    endCalcRangeRound();
  }

  // Condition 3 -- The user isn't on any streaks, but they've answered 15 prompts this round
  else if (correctAnswersThisRound + incorrectAnswersThisRound >= 15) {
    // If the user got at least 10 out of 15 correct, they can keep playing
    if (correctAnswersThisRound >= 10) {
      min = highestCorrectkanji;
      max = Math.min(max + 100, kanjiList.length);
      honingRangeBool = false;
      endCalcRangeRound();
    }
    // Otherwise we assume we have narrowed in on the user's proper level
    else {
      generateResults();
      return;
    }
  }

  // If, in calculating the new range, the min has dropped below the max or the range has gone too small
  if (min >= max || max - min < 50) {
    min = Math.max(0, max - 50);
  }

  // Special end game conditions
  // Perfect score
  if (min > 6000 && incorrectAnswers.length === 0) {
    min = 6300;
    max = 6300;
    generateResults();
    return;
  }
  // User doesn't know enough kanji to calculate a score
  if (incorrectAnswers.length >= 15 && correctAnswers.length === 0) {
    generateResults();
    return;
  }
  updateProgressBar();
}

// Progress bar
const progressBar = document.getElementById("progress-bar");

function updateProgressBar() {
  const percentage = (totalAnswers / triesUntilTestOver) * 100;
  progressBar.style.width = `${percentage}%`;
}

//

function removeOutliers(arr) {
  // Calculate mean

  const mean = arr.reduce((sum, value) => sum + value, 0) / arr.length;

  // Calculate standard deviation
  const squaredDifferences = arr.map((value) => (value - mean) ** 2);
  const variance =
    squaredDifferences.reduce((sum, value) => sum + value, 0) / arr.length;
  const standardDeviation = Math.sqrt(variance);

  // Remove outliers
  const threshold = 2;
  const filteredArr = arr.filter(
    (value) => Math.abs(value - mean) <= threshold * standardDeviation
  );

  // Get minimum value of the filtered array
  const minValue = Math.min(...filteredArr);

  return minValue;
}

// For testing only
let testResults = [];
function testValue(maxKanjiKnown, testRepetitions) {
  initializeTest();
  let incorrectAnswerCounter = 0; // this will be used to simulate users not knowing some kanji
  for (let i = 0; i < testRepetitions; i++) {
    initializeTest();
    while (testInProgress) {
      currentCorrectKanji = generateRandomKanji();
      if (
        incorrectAnswerCounter !== 6 &&
        kanjiList.indexOf(currentCorrectKanji) <= maxKanjiKnown
      ) {
        correctAnswer = true;
      } else {
        correctAnswer = false;
      }
      calculateRange();
      incorrectAnswerCounter =
        incorrectAnswerCounter === 9 ? 0 : incorrectAnswerCounter + 1;
    }
    console.log(`Current value of i = ${i}`);
  }
  const testsAverage =
    testResults.reduce((a, b) => a + b, 0) / testResults.length;
  let outlierCount = 0;
  testResults.forEach((val) => {
    if (Math.abs(val - maxKanjiKnown) > maxKanjiKnown / 10) {
      outlierCount++;
    }
  });
  console.log(`outlierCount = ${outlierCount}`);
  console.log(`testaverage = ${testsAverage}`);
  console.log(testResults);
  testResults = [];
}

function endCalcRangeRound() {
  currentStreak = 0;
  incorrectAnswersThisRound = 0;
  correctAnswersThisRound = 0;
}

function initializeTest() {
  // Update GUI
  introText.classList.add("hidden");
  appContainer.classList.remove("hidden");
  modalChooseList.style.display = "none";
  resultsContainer.classList.add("hidden");
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
  progressBar.style.width = "0%";
  window.scrollTo(0, 0);

  // Initialize variables for new test
  highestCorrectkanji = 0;
  lowestIncorrectKanji = 6000;
  currentStreak = 0;
  totalAnswers = 0;
  correctAnswersThisRound = 0;
  incorrectAnswersThisRound = 0;
  min = 0;
  max = 300;
  correctAnswer = false;
  triesUntilTestOver = 60;
  correctAnswers = [];
  incorrectAnswers = [];
  honingRangeBool = false;

  testInProgress = true;
  generatePrompt();
}

function generateResults() {
  lowestIncorrectKanji = removeOutliers(incorrectAnswers);
  if (highestCorrectkanji < max) {
    min = highestCorrectkanji;
  }
  if (lowestIncorrectKanji > highestCorrectkanji) {
    max = lowestIncorrectKanji;
  }
  const score = Math.floor((max + min) / 2);
  testResults.push(score);

  // Update GUI
  appContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  window.scrollTo(0, 0);
  if (correctAnswers.length === 0) {
    resultString.textContent = `Oops, it looks like you don't very many kanji...`;
  } else {
    resultString.textContent = `Wow, you know approximately ${score} kanji!`;
  }

  if (incorrectAnswers.length > 0) {
    incorrectKanjiTextArea.value = "Kanji you answered incorrectly:\n";
    incorrectAnswers.forEach((kanjiNum, idx) => {
      currkanji = kanjiList[kanjiNum];
      incorrectKanjiTextArea.value += `\n${idx + 1}. ${
        currkanji.kanji
      } : ${trimReading(currkanji.kana)} -- ${trimMeaning(
        currkanji.english
      )}\n`;
    });
  } else {
    incorrectKanjiTextArea.value =
      "You answered every question correctly! You're a kanji no kami-sama! 💯😮🎉\n";
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
      if (ele.textContent === trimReading(currentCorrectKanji.kana)) {
        ele.classList.add("correct-style");
      }
    });
    meaningChoiceList.forEach((ele) => {
      if (ele.textContent === trimMeaning(currentCorrectKanji.english)) {
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
    if (trimReading(currentCorrectKanji.kana) == pronSelection.textContent) {
      pronPrompt.textContent = "Reading: Correct";
      pronSelection.classList.add("correct-style");
    } else {
      pronPrompt.textContent = "Reading: Incorrect";
      pronSelection.classList.add("incorrect-style");
      pronChoiceList.forEach((ele) => {
        if (ele.textContent === trimReading(currentCorrectKanji.kana)) {
          ele.classList.add("correct-style");
        }
      });
    }

    // Check meaning for correctness
    if (trimMeaning(currentCorrectKanji.english) == meanSelection.textContent) {
      meanPrompt.textContent = "Definition: Correct";
      meanSelection.classList.add("correct-style");
    } else {
      meanPrompt.textContent = "Definition: Incorrect";
      meanSelection.classList.add("incorrect-style");
      meaningChoiceList.forEach((ele) => {
        if (ele.textContent === trimMeaning(currentCorrectKanji.english)) {
          ele.classList.add("correct-style");
        }
      });
    }

    // Evaluates total answer for correctness.
    // Answers are only correct if user selected correct reading and meaning
    if (
      trimReading(currentCorrectKanji.kana) == pronSelection.textContent &&
      trimMeaning(currentCorrectKanji.english) == meanSelection.textContent
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
