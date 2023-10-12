let gameData = {
  step: 0,
  questions: [],
  historical: [],
  playerOneCount: 0,
  playerTwoCount: 0,
  buttonOneYes: getElementById("button-one-yes"),
  buttonOneNo: getElementById("button-one-no"),
  buttonTwoYes: getElementById("button-two-yes"),
  buttonTwoNo: getElementById("button-two-no"),
  startContainer: getElementById("start-container"),
  gameContainer: getElementById("game-container"),
  endContainer: getElementById("end-container"),
  playerOneCountPlaceholder: getElementById("player-one-count"),
  playerTwoCountPlaceholder: getElementById("player-two-count"),
  backToMenuButton: getElementById("back-to-menu-button"),
  actualQuestion: {},
  gameIsRunning: false,
  textPlaceholder: getElementById("question-placeholder"),
};

isListeningToEvents = false;

function start(game_number) {
  reset();
  setQuestions(game_number);
  hiddeStartContainer();
  showGameContainer();
  listenToAnswerButtonsEvents();
  nextQuestion();
}

function setQuestions(game_number) {
  gameData.questions = questions[game_number];
}

function reset() {
  gameData = {
    step: 0,
    questions: [],
    historical: [],
    playerOneCount: 0,
    playerTwoCount: 0,
    buttonOneYes: getElementById("button-one-yes"),
    buttonOneNo: getElementById("button-one-no"),
    buttonTwoYes: getElementById("button-two-yes"),
    buttonTwoNo: getElementById("button-two-no"),
    startContainer: getElementById("start-container"),
    gameContainer: getElementById("game-container"),
    endContainer: getElementById("end-container"),
    playerOneCountPlaceholder: getElementById("player-one-count"),
    playerTwoCountPlaceholder: getElementById("player-two-count"),
    backToMenuButton: getElementById("back-to-menu-button"),
    actualQuestion: {},
    gameIsRunning: false,
    textPlaceholder: getElementById("question-placeholder"),
  };
}

function hiddeStartContainer() {
  gameData.startContainer.style.display = "none";
}

function showStartContainer() {
  gameData.startContainer.style.display = "flex";
}

function showGameContainer() {
  gameData.gameContainer.style.display = "flex";
}

function hiddeGameContainer() {
  gameData.gameContainer.style.display = "none";
}

function listenToAnswerButtonsEvents() {
  if (!isListeningToEvents) {
    gameData.buttonOneYes.addEventListener("click", () => {
      handleAnswer("buttonOneYes");
    });
    gameData.buttonOneNo.addEventListener("click", () => {
      handleAnswer("buttonOneNo");
    });
    gameData.buttonTwoYes.addEventListener("click", () => {
      handleAnswer("buttonTwoYes");
    });
    gameData.buttonTwoNo.addEventListener("click", () => {
      handleAnswer("buttonTwoNo");
    });
    gameData.backToMenuButton.addEventListener("click", () => {
      hiddeGameContainer();
      showStartContainer();
    });
  }
  isListeningToEvents = true;
}

function getElementById(id) {
  return document.getElementById(id);
}

function showScoreboard() {
  gameData.endContainer.style.display = "flex";
}

function hiddeScoreboard() {
  gameData.endContainer.style.display = "none";
}

function nextQuestion() {
  if (gameData.questions[gameData.step]) {
    gameData.actualQuestion = gameData.questions[gameData.step];
    assignQuestionToPlaceholders(gameData.questions[gameData.step]);
    gameData.step++;
  } else {
    end();
  }
}

function assignQuestionToPlaceholders(question) {
  gameData.textPlaceholder.innerText = question.text;
}

function handleAnswer(button) {

  HiddeEveryButtonsForNewQuestion()

  // If the answer is yes
  if (gameData.actualQuestion.answer) {
    switch (button) {
      case "buttonOneYes":
        gameData.playerOneCount++;
        showFakeAndOpacity("fake-button-one-yes", "fake-button-one-no");
        break;
      case "buttonOneNo":
        gameData.playerTwoCount++;
        showFakeAndOpacity("fake-button-one-no", "fake-button-one-yes");
        break;
      case "buttonTwoYes":
        gameData.playerTwoCount++;
        showFakeAndOpacity("fake-button-two-yes", "fake-button-two-no");
        break;
      case "buttonTwoNo":
        gameData.playerOneCount++;
        showFakeAndOpacity("fake-button-two-no", "fake-button-two-yes");
        break;
      default:
        throw "No case match the button clicked";
    }
  }
  // If the answer is no
  else {
    switch (button) {
      case "buttonOneYes":
        gameData.playerTwoCount++;
        showFakeAndOpacity("fake-button-one-yes", "fake-button-one-no");
        break;
      case "buttonOneNo":
        gameData.playerOneCount++;
        showFakeAndOpacity("fake-button-one-no", "fake-button-one-yes");
        break;
      case "buttonTwoYes":
        gameData.playerOneCount++;
        showFakeAndOpacity("fake-button-two-yes", "fake-button-two-no");
        break;
      case "buttonTwoNo":
        gameData.playerTwoCount++;
        showFakeAndOpacity("fake-button-two-no", "fake-button-two-yes");
        break;
      default:
        throw "No case match the button clicked";
    }
  }

  // historical of answers
  gameData.historical.push({
    player: button.substr(6,3),
    question: gameData.questions[gameData.step],
    playerAnswer: button.includes("Yes"),
    answer: gameData.actualQuestion.answer,
  });

  gameData.playerOneCountPlaceholder.innerText = gameData.playerOneCount;
  gameData.playerTwoCountPlaceholder.innerText = gameData.playerTwoCount;

  nextQuestion();
}

function end() {
  hiddeGameContainer();
  showScoreboard();
  createHtmlRenderForEndGame();
  gameData.gameIsRunning = false;
}

function createHtmlRenderForEndGame() {
 // Get the DOM element where you want to display the data
  let container = document.getElementById("exemple");
  
  let containerSec = document.getElementById("exemplesec");
  console.log(gameData.historical);
  // Iterate through the historical data and create HTML for each entry
  for (let h of gameData.historical) {
    if(h.player==="One"){
    // Determine the text and color based on playerAnswer and answer
    let textColor = h.playerAnswer === h.answer ? "green-text" : "red-text";
    let playerAnswerText = h.playerAnswer ? "OUI" : "NON";

    // Create HTML for the entry
    let htmlEntry = `
      
      <div class="question">
        <p>${h.question.text}</p>
        <span class="${textColor}">${playerAnswerText}</span>
        <div class="explanation">${h.question.why}</div>
      </div>
    `;

    // Append the HTML entry to the container
    container.innerHTML += htmlEntry;
  }
  if(h.player==="Two"){
    // Determine the text and color based on playerAnswer and answer
    let textColor = h.playerAnswer === h.answer ? "green-text" : "red-text";
    let playerAnswerText = h.playerAnswer ? "OUI" : "NON";

    // Create HTML for the entry
    let htmlEntrySec = `
      
      <div class="question">
        <p>${h.question.text}</p>
        <span class="${textColor}">${playerAnswerText}</span>
        <div class="explanation">${h.question.why}</div>
      </div>
    `;

    // Append the HTML entry to the container
    containerSec.innerHTML += htmlEntrySec;
    }
}
}

function showFakeAndOpacity(buttonToFake, buttonToHidde) {
  getElementById(buttonToFake).style.display = "inline";
  getElementById(buttonToHidde).style.display = "inline";
  getElementById(buttonToHidde).style.opacity = "0";

  setTimeout(() => {
    getElementById(buttonToFake).style.display = "none";
    getElementById(buttonToHidde).style.display = "none";
    getElementById(buttonToHidde).style.opacity = "1";
  }, 3000)
}

function HiddeEveryButtonsForNewQuestion() {
  const buttons = [
    "button-one-no",
    "button-one-yes",
    "button-two-no",
    "button-two-yes",
  ];

  for (const btn of buttons) {
    getElementById(btn).style.display = "none";
  }

  setTimeout(() => {
    for (const btn of buttons) {
      getElementById(btn).style.display = "inline";
    }
  }, 3000);
}

function showEveryAnswerButtons() {
  const buttons = [
    "button-one-no",
    "button-one-yes",
    "button-two-no",
    "button-two-yes",
  ];

  for (const btn of buttons) {
    getElementById(btn).style.display = "inline";
  }
}

document.getElementById("start-button-1").addEventListener("click", () => {
  start(0);
});

document.getElementById("start-button-2").addEventListener("click", () => {
  start(1);
});

// data
const questions = [
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
