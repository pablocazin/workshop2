const data = [
  [
    {
      text: "Louis a tapé sur les fesses de Lucie, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car tapé sur les fesses de sa collègue sans son consentement c’est une agression sexuelle",
    },
    {
      text: "Théo complimente Sofia sur sa nouvelle coupe de cheveux, est-ce un acte de harcèlement sexuel ?",
      answer: false,
      why: "La réponse est NON car complimenter de manière occasionnelle est un acte amical",
    },
    {
      text: "Michel, supérieur hiérarchique de Julie, lui a envoyé des sms en lui indiquant notamment 'je te souhaite une bonne journée avec plein de baisers sur tes lèvres' est ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car envoyer des messages non sollicités à une personne est un acte de harcèlement sexuelle",
    },
    {
      text: "Marc, supérieur hiérarchique de Jeanne, lui partage des images de femmes nues tous les matins, est-ce un acte de harcèlement sexuelle ?",
      answer: true,
      why: "La réponse est OUI car envoyer des messages non sollicités à une personne est un acte de harcèlement sexuelle",
    },
    {
      text: "Pierre, lorsqu’il est seul chez lui, invite toujours Thomas, son collègue de bureau, à boire un verre, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "to be defined",
    },
    {
      text: "Éléonore a mis son pied au niveau de l’entre-jambes de Charles pendant toute la réunion, est-ce un acte d’agression sexuelle ?",
      answer: true,
      why: "La réponse est OUI car avoir un comportement physique déplacé est un acte d’agression sexuelle",
    },
    {
      text: "Emma profite du séminaire d’entreprise pour se faufiler dans la chambre de son collègue Lucas et dormir avec lui, est-ce un acte de drague ?",
      answer: false,
      why: "to be defined",
    },
    {
      text: "Alexandre s’amuse à faire raisonner la chanson 'You can leave your hat on' de Joe Cocker dans son bureau, chaque fois que Sarah porte une nouvelle jupe, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel",
    },
    {
      text: "Noah continue de faire des compliments au quotidien à Chloé alors qu’elle lui a dit d’arrêter, est-ce un acte harcèlement sexuel ?",
      answer: true,
      why: "La réponse est car OUI faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel",
    },
    {
      text: "Agathe, l’employeur de Juliette, a tenté d'obtenir des faveurs de nature sexuelle en multipliant les cadeaux et les appels, est-ce un acte harcèlement sexuel ?",
      answer: true,
      why: "to be defined",
    },
  ],
  [
    {
      text: "Patrick, employeur de Manon, fait irruption dans sa vie privée, dans le but de la convaincre de céder à ses avances, est-ce un acte de d’harcèlement sexuel ?",
      answer: true,
      why: "to be defined",
    },
    {
      text: "Camille fait la bise à Romane pour me dire bonjour, est-ce un cas de harcèlement sexuelle ?",
      answer: false,
      why: "La réponse est non car faire la bise est un acte amical",
    },
    {
      text: "Charlotte menace de licencier Noémie si elle refuse ses avances sexuelles, est-ce un cas de harcèlement sexuelle ?",
      answer: true,
      why: "La réponse est OUI car impacter la santé mentale d’une personne peut engendrer un isolement professionnelle donc c’est un acte de harcèlement sexuelle",
    },
    {
      text: "Mélanie fait passé un entretien d’embauche à Zoé dans le bar d’un hôtel, puis un deuxième dans la chambre, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "to be defined",
    },
    {
      text: "Maxime siffle Émilie car elle est venue travailler avec une robe décolleté est-ce un acte de harcèlement sexuelle?",
      answer: true,
      why: "La réponse est car OUI faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel",
    },
    {
      text: "Hugo, collègue de bureau de Léa, lui pose des questions privées du type 'Quel est la taille de tes seins? ', est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel",
    },
    {
      text: "Inès lors d’un déplacement professionnel en voiture a mis sa main sur la cuisse de Jade a plusieur reprise est ce un acte de harcèlement sexuelle?",
      answer: false,
      why: "to be defined",
    },
    {
      text: "Fernand enferme avec lui Margot dans une pièce après des avances sexuelles, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuelle",
    },
    {
      text: "Étienne impose à Gabriel, son employé, de partager une chambre lors d’un déplacement, est-ce un acte de drague ?",
      answer: false,
      why: "to be defined",
    },
    {
      text: "to be defined",
      answer: true,
      why: "to be defined",
    },
  ],
];

class Game {
  // on part de 10 pour pouvoir décrementer le compteur
  // si la personne se dépeche pour sélectionner une mauvaise réponse
  // elle sera pénalisée face a quelqu'un qui prends le temps de réfléchir
  playerOneCount = 10;
  playerTwoCount = 10;
  step = 0;

  /**
   * @param {Questions{text: string, answer: boolean, why: string }[]} question
   */
  constructor(questions) {
    this.questions = questions;
    this.start();
    this.historical = [];
  }

  /**
   * start the game by fetching buttons
   * adding events on them
   * and fetching text placeholders
   */
  start() {
    console.log("start");
    this.getButtonsAndContainers();
    this.hiddeStartContainer();
    this.showGameContainer();
    this.listenToAnswerButtonsEvents();
    this.getTextPlaceholders();
    this.nextQuestion();
  }

  /**
   * hidde the container of lobby
   */
  hiddeStartContainer() {
    this.startContainer.style.display = "none";
  }

  /**
   * show container of game
   */
  showGameContainer() {
    this.gameContainer.style.display = "flex";
  }

  /**
   * hidde container of game
   */
  hiddeGameContainer() {
    this.gameContainer.style.display = "none";
  }

  showScoreboard() {
    this.endContainer.style.display = "flex";
  }

  /**
   * Get the buttons we click on to answer
   */
  getButtonsAndContainers() {
    console.log("getButtons");
    this.buttonOneYes = this.getElementById("button-one-yes");
    this.buttonOneNo = this.getElementById("button-one-no");
    this.buttonTwoYes = this.getElementById("button-two-yes");
    this.buttonTwoNo = this.getElementById("button-two-no");
    this.startContainer = this.getElementById("start-container");
    this.gameContainer = this.getElementById("game-container");
    this.endContainer = this.getElementById("end-container");
  }

  /**
   * get the location of question text so we can change it
   */
  getTextPlaceholders() {
    console.log("getTextPlaceholders");
    this.textPlaceholder = this.getElementById("question-placeholder");
    //this.textPlaceHolderOne = this.getElementById("text-placeholder-one");
    //this.textPlaceHolderTwo = this.getElementById("text-placeholder-two");
  }

  /**
   * Add listeners to answers buttons
   */
  listenToAnswerButtonsEvents() {
    this.buttonOneYes.addEventListener("click", () => {
      this.handleAnswer("buttonOneYes");
    });
    this.buttonOneNo.addEventListener("click", () => {
      this.handleAnswer("buttonOneNo");
    });
    this.buttonTwoYes.addEventListener("click", () => {
      this.handleAnswer("buttonTwoYes");
    });
    this.buttonTwoNo.addEventListener("click", () => {
      this.handleAnswer("buttonTwoNo");
    });
  }

  /**
   * Get a div by text id
   * @param {string} id
   * @returns HTMLElement
   */
  getElementById(id) {
    return document.getElementById(id);
  }

  /**
   * Go to the next question or end the quizz
   */
  nextQuestion() {
    console.log("Next Question");
    if (this.questions[this.step]) {
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
    console.log("Assigning Question");
    this.textPlaceholder.innerText = question.text;
    //this.textPlaceHolderOne.innerText = question.text;
    //this.textPlaceHolderOne.innerText = question.text;
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
          this.playerOneCount++;
          break;
        case "buttonOneNo":
          this.playerOneCount--;
          break;
        case "buttonTwoYes":
          this.playerTwoCount++;
          break;
        case "buttonTwoNo":
          this.playerTwoCount--;
          break;
        default:
          throw "No case match the button clicked";
      }
    }
    // If the answer is no
    else {
      switch (button) {
        case "buttonOneYes":
          this.playerOneCount--;
          break;
        case "buttonOneNo":
          this.playerOneCount++;
          break;
        case "buttonTwoYes":
          this.playerTwoCount--;
          break;
        case "buttonTwoNo":
          this.playerTwoCount++;
          break;
        default:
          throw "No case match the button clicked";
      }
    }

    // historical of answers
    this.historical.push({
      player: button.substring(0, -3),
      question: this.questions[this.step],
      playerAnswer: button.includes("Yes"),
      answer: this.actualQuestion.answer,
    });

    this.nextQuestion();
  }

  /**
   * end the game when there is no more questions
   * display the scoreboard and answers why parameters
   */
  end() {
    console.log("end");
    this.hiddeGameContainer();
    this.showScoreboard();
    this.createHtmlRenderForEndGame();
    gameIsRunning = false;
    console.log(
      `player1: ${this.playerOneCount} | player2: ${this.playerTwoCount}`
    );
  }

  createHtmlRenderForEndGame() {

    // all html elements you will push into the dom
    let htmlToReturn = [];

    // for each historical element, change it with your HTML and class
    for (let h of this.historical) {
      htmlToReturn.push(
        `
            <div class="exemple">
                player: ${h.player}, answer: ${h.answer}, playerAnswer: ${h.playerAnswer}, question: ${h.question}
            </div>
        `
      );
    }

    // push all the html elements in the dom, change it with your ID
    this.getElementById("exemple").innerHTML = htmlToReturn;
  }
}

let gameIsRunning = false;

let startButton1 = document.getElementById("start-button-1");
let startButton2 = document.getElementById("start-button-2");

startButton1.addEventListener("click", () => {
  if (!gameIsRunning) {
    const game = new Game(data[0]);
    gameIsRunning = true;
  }
});

startButton2.addEventListener("click", () => {
  if (!gameIsRunning) {
    const game = new Game(data[1]);
    gameIsRunning = true;
  }
});
