//Quizz code route:

//Affichage de la question
//Affichage des diverses reponses possible 
//l'utilisateur coche la réponse souhaité 
//Comparaison de la reponse à la reponse attendue
//Si vrai= vert si faux=rouge
// rejoue .


//1: Creer 1 tableau réponses creer 1 tableau question.
//2: Creer une variable qui s'appelle réponse stock la reponse utilisateur
//  via un prompt "question"
//3:Creer une boucle qui compare la réponse utilisateur à la réponse attendue.
//4:Creer une fonction afficher 


//1: Creer 1 tableau réponses creer 1 tableau question.
let tableauQuestion = [
  {
    q: "Quel est le panneau piste cyclable ?",
    a: "panneau A",
    b: "panneau B",
    c: "panneau C",
    d: "panneau D",
    r: "a"
  },
  {
    q: "Le panneau est une obligation de ?",
    a: "tourner a droite",
    b: "tourner a gauche",
    r: "b"
  },
  {
    q: " Dans cette situation etes vous prioritaires?",
    a: "oui",
    b: "non",
    r: "non"
  },
  {
    q: "Sans présence de panneaux de vitesse à combien êtes vous autorisés à rouler?",
    a: "70mk/h",
    b: "80km/h",
    c: "90km/h",
    d: "100km/h",

    r: "b"
  },
  {
    q: "Quel est le mot manquant sur le panneau?",
    a: "gendarmerie",
    b: "garderie",
    c: "prison",

    r: "a"
  }]

//2: Creer une variable qui s'appelle réponse stock la reponse utilisateur
//  via un prompt "question"

//3:Creer une boucle qui compare la réponse utilisateur à la réponse attendue+afficher

function Quizz(question) {
  tableauQuestion.forEach(question => {
    let reponse = prompt(`${question.q} : \n
    a: ${question.a} \n
    b: ${question.b}\n
    c:${question.c}\n
    d:${question.d}  
    `)

    if (reponse == question.r) {

      alert("bravo!")
    }
    else {

      alert("c'est faux!")
    }

  });
}

Quizz()
