const data = [
  [
    {
      text: "Louis a tapé sur les fesses de Lucie, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Théo complimente Sofia sur sa nouvelle coupe de cheveux, est-ce un acte de harcèlement sexuel ?",
      answer: false,
      why: "La réponse est NON car complimenté de manière occasionnelle est un acte amical.",
    },
    {
      text: "Michel, supérieur hiérarchique de Julie, lui a envoyé des sms en lui indiquant notamment 'je te souhaite une bonne journée avec plein de baisers sur tes lèvres' est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car envoyer des messages non sollicités à une personne est un acte de harcèlement sexuel.",
    },
    {
      text: "Marc, supérieur hiérarchique de Jeanne, lui partage des images de femmes nues tous les matins, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car envoyer des messages non sollicités à une personne est un acte de harcèlement sexuel.",
    },
    {
      text: "Pierre fait des blagues sexistes tous les jours à Thomas son collègue de bureau est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel. ",
    },
    {
      text: "Éléonore a mis son pied au niveau de l’entre-jambes de Charles pendant toute la réunion, est-ce un acte d’agression sexuel ?",
      answer: true,
      why: "La réponse est OUI car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Lucas tire les cheveux d’Emma pendant qu’elle ramasse son stylo, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Alexandre s’amuse à faire raisonner la chanson “You can leave your hat on” de Joe Cocker dans son bureau, chaque fois que Sarah porte une nouvelle jupe, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel.",
    },
    {
      text: "Noah continue de faire des compliments au quotidien à Chloé alors qu’elle lui a dit d’arrêter, est-ce un acte harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel.",
    },
    {
      text: "Agathe, l’employeur de Juliette, a tenté d'obtenir des faveurs de nature sexuelle en multipliant les cadeaux et les appels, est-ce un acte harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car envoyer des messages non sollicités à une personne est un acte de harcèlement sexuel.",
    },
  ],
  [
    {
      text: "Patrick, employé, reçoit constamment par email des rendez-vous non professionnels de sa cliente Manon, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car envoyer des messages non sollicités à répétition à une personne est un acte de harcèlement sexuel.",
    },
    {
      text: "Camille fait la bise à Romane pour lui dire bonjour, est-ce un cas de harcèlement sexuel ?",
      answer: false,
      why: "La réponse est NON car faire la bise est un acte amical.",
    },
    {
      text: "Charlotte menace de licencier Noémie si elle refuse ses avances sexuelles, est-ce un cas de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car impacter la santé mentale d’une personne peut engendrer un isolement professionnel donc c’est un acte de harcèlement sexuel.",
    },
    {
      text: "Richard fait passer un entretien d’embauche à Zoé et lui demande de venir avec une jupe de plus en plus courte à chaque nouvel entretien, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel.",
    },
    {
      text: "Maxime siffle Émilie car elle est venue travailler avec une robe décolletée est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel.",
    },
    {
      text: "Hugo, collègue de bureau de Léa, lui pose des questions privées du type “Quel est la taille de ses seins ?“, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car faire des commentaires inappropriés au quotidien est un acte de harcèlement sexuel.",
    },
    {
      text: "Inès lors d’un déplacement professionnel en voiture a mis sa main sur la cuisse de Jade à plusieurs reprises est-ce un acte de harcèlement sexuel ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Fernand enferme avec lui Margot dans une pièce après des avances sexuelles, est-ce un acte de drague ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Étienne impose à Gabriel, son employé, de partager une chambre lors d’un déplacement, est-ce un acte de drague ? ?",
      answer: false,
      why: "La réponse est NON car avoir un comportement physique déplacé est un acte d’agression sexuel.",
    },
    {
      text: "Marc, technicien, doit intervenir chez Sylvie, elle l’accueille constamment en lingerie, quoiqu’il lui ait expliqué sa gêne, est-ce un acte de harcèlement sexuel ?",
      answer: true,
      why: "La réponse est OUI car le fait d’appliquer une pression importante, voire grave, afin d’obtenir un acte de nature sexuelle est un acte de harcèlement sexuel.",
    },
  ],
];

class Game {
  // on part de 10 pour pouvoir décrementer le compteur
  // si la personne se dépeche pour sélectionner une mauvaise réponse
  // elle sera pénalisée face a quelqu'un qui prends le temps de réfléchir
  playerOneCount = 0;
  playerTwoCount = 0;
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
    this.playerOneCountPlaceholder = this.getElementById("player-one-count")
    this.playerTwoCountPlaceholder = this.getElementById("player-two-count")
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
          this.playerTwoCount++;
          break;
        case "buttonTwoYes":
          this.playerTwoCount++;
          break;
        case "buttonTwoNo":
          this.playerOneCount++;
          break;
        default:
          throw "No case match the button clicked";
      }
    }
    // If the answer is no
    else {
      switch (button) {
        case "buttonOneYes":
          this.playerTwoCount++;
          break;
        case "buttonOneNo":
          this.playerOneCount++;
          break;
        case "buttonTwoYes":
          this.playerOneCount++;
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

    this.playerOneCountPlaceholder.innerText = `joueur 1: ${this.playerOneCount}`
    this.playerTwoCountPlaceholder.innerText = `joueur 2: ${this.playerTwoCount}`

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
