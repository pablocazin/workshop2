class Game {
  // on part de 10 pour pouvoir décrementer le compteur
  // si la personne se dépeche pour sélectionner une mauvaise réponse
  // elle sera pénalisée face a quelqu'un qui prends le temps de réfléchir
  playerOneCount = 10;
  playerTwoCount = 10;
  step = 0;

  /**
   *
   * @param {Questions{text: string, answer: boolean, why: string }[]} question
   */
  constructor(questions) {
    this.questions = questions;
    this.start();
  }

  /**
   * start the game by fetching buttons
   * adding events on them
   * and fetching text placeholders
   */
  start() {
    console.log("start");
    this.getButtons();
    this.listenToAnswerButtonsEvents();
    this.getTextPlaceholders();
  }


  /**
   * Get the buttons we click on to answer
   */
  getButtons() {
    console.log("getButtons");
    this.buttonOneYes = this.getDivById("button-one-yes");
    this.buttonOneNo = this.getDivById("button-one-no");
    this.buttonTwoYes = this.getDivById("button-two-yes");
    this.buttonTwoNo = this.getDivById("button-two-no");
  }


  /**
   * get the location of question text so we can change it
   */
  getTextPlaceholders() {
    console.log("getTextPlaceholders");
    this.textPlaceHolderOne = this.getDivById("text-placeholder-one");
    this.textPlaceHolderTwo = this.getDivById("text-placeholder-two");
  }


  /**
   * Add listeners to answers buttons
   */
  listenToAnswerButtonsEvents() {
    this.buttonOneYes.addEventListener(
      "click",
      this.handleAnswer("buttonOneYes")
    );
    this.buttonOneNo.addEventListener(
      "click",
      this.handleAnswer("buttonOneNo")
    );
    this.buttonTwoYes.addEventListener(
      "click",
      this.handleAnswer("buttonTwoYes")
    );
    this.buttonTwoNo.addEventListener(
      "click",
      this.handleAnswer("buttonTwoNo")
    );
  }


  /**
   * Get a div by text id
   * @param {string} id
   * @returns HTMLElement
   */
  getDivById(id) {
    return document.getElementById(id);
  }


  /**
   * Go to the next question or end the quizz
   */
  nextQuestion() {
    if (question[this.step]) {
      this.actualQuestion = this.questions[this.step];
      this.assignQuestionToPlaceholders(this.questions[this.step]);
      this.step++;
    } else {
      this.end();
    }
  }


  /**
   *
   * @param {Question} question
   */
  assignQuestionToPlaceholders(question) {
    this.textPlaceHolderOne.innerText = question.text;
    this.textPlaceHolderOne.innerText = question.text;
  }


  /**
   *
   * @param {"buttonOneYes" | "buttonOneNo" | "buttonTwoYes" | "buttonTwoNo"} button
   */
  handleAnswer(button) {

    console.log(`clicked on button ${button}`);

    // If the answer is yes
    if (this.actualQuestion.answer) {
      switch (button) {
        case "buttonOneYes":
            this.playerOneCount++
          break;
        case "buttonOneNo":
            this.playerOneCount--
          break;
        case "buttonTwoYes":
            this.playerTwoCount++
          break;
        case "buttonTwoNo":
            this.playerTwoCount--
          break;
        default:
            throw "No case match the button clicked"
      }
    } 
    // If the answer is no
    else {
        switch (button) {
            case "buttonOneYes":
                this.playerOneCount--
              break;
            case "buttonOneNo":
                this.playerOneCount++
              break;
            case "buttonTwoYes":
                this.playerTwoCount--
              break;
            case "buttonTwoNo":
                this.playerTwoCount++
              break;
            default:
                throw "No case match the button clicked"
          }
    }

    this.nextQuestion();
  }


  /**
   * end the game when there is no more questions
   * display the scoreboard and answers why parameters
   */
  end() {
    console.log("end");
  }
  
}

let gameIsRunning = false;

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
  if (!gameIsRunning) {
    const game = new Game();
    gameIsRunning = true;
  }
});