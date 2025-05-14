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
//5: Creer une fonction question suivante 


//1: Creer 1 tableau réponses creer 1 tableau question.
let tableauQuestion=[{question:[
    { q1:"Quel est le panneau piste cyclable?",
      r1:"a"},
     {q2:"Le panneau est une obligation de ?",
        r2:"c"},
    {q3:" Dans cette situation etes vous prioritaires?",
      r3:"non"},
    {q4:"Sans présence de panneaux de vitesse à combien êtes vous autorisés à rouler?",
      r4:"80km"},
    { q5:"Quel est le mot manquant sur le panneau?",
        r5:"gendarmerie"
    } 
]}
]

//2: Creer une variable qui s'appelle réponse stock la reponse utilisateur
//  via un prompt "question"
letReponse=prompt(tableauQuestion)

//3:Creer une boucle qui compare la réponse utilisateur à la réponse attendue.

function Quizz(question){
tableauQuestion.forEach(question => {
    if(reponse===question[1]){

console.log("bravo!")
    }
     else{

console.log("c'est faux!")
    }
    
});
}