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

  start() {
    console.log("start");
    this.getButtons()
    this.getTextPlaceholders()
  }

  getButtons() {
    console.log("getButtons")
    this.buttonOne = this.getDivById("button-one");
    this.buttonTwo = this.getDivById("button-two");
  }

  getTextPlaceholders() {
    console.log("getTextPlaceholders")
    this.textPlaceHolderOne = this.getDivById("text-placeholder-one");
    this.textPlaceHolderTwo = this.getDivById("text-placeholder-two");
  }

  getDivById(id) {
    return document.getElementById(id);
  }

  end() {}

  nextQuestion() {
    this.assignQuestionToPlaceholders(this.questions[this.step])
    this.step++;
  }

  assignQuestionToPlaceholders(question) {
    this.textPlaceHolderOne.innerText = "coucou";
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
