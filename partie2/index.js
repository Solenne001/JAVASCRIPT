//function

/* function direBonjour(){
    console.log("Bonjour !!!") //declarations d'une fct
}

direBonjour() //on l'a appelé

function direBonjourAmi(nomAmi){
    console.log(`Bonjour ${nomAmi}`)
}

direBonjourAmi("Famous") //ici on decrit un parametre 

function chiffreSacre(nombre){
    console.log(`Mon chiffre sacré est ${nombre}`)
}

chiffreSacre(7) */

/* function affichage(){
    nom = prompt("Quel est votre nom ?")
    prenom = prompt("Quel est votre prenom ?")
    age = Number(prompt("Quel est votre age ?"))
    console.log(`votre nom est ${nom}`)
    console.log(`votre prenom est ${prenom}`)
    console.log(`votre age est ${age}`)
}

affichage() */
/* 
function affichage(nom, prenom, age){
    console.log(`$nom, $prenom, $age`)
}
let nom = prompt("Quel est votre nom ?")
let prenom = prompt("Quel est votre prenom ?")
let age = Number(prompt("Quel est votre age ?"))
affichage(nom, prenom, age) */ //avec paramètre
/* 
function direBonjour(){
    console.log("Bonjour !!!") //declarations d'une fct
}

function bonjour(){
    return "Bonjour !!!" //pour la valeur pour faire qlq chose
}

let salutation = bonjour() //pour l'appele le return
console.log(salutation) // pour l'afficher */
/* 
function addition(nbre1, nbre2){
    console.log(nbre1 + nbre2)
    return nbre1 + nbre2
}
let nombre = addition(nbre1 + nbre2)
for(let i = 0; i < 13; i++){
    console.log(nombre * i)
} */

// () => {} : fct flèche
/* let direBonjour = ()=>{
    console.log("Bonjour!!!");
}
let bonjourAmi =(nomAmi)=>console.log("Bonjour!!!" +nomAmi); //la fonctions flèche */

// function Presentation () {} équivaut a let Presentation = ()=>{}

//TABLEAU
/* let mesFilms = ["Mavrick", "wakanda", "Avatar"] */
/* console.log(mesFilms);
mesFilms.push("spider-man")//pour save dans le tableau
mesFilms.push(prompt("ton film"))//demander a l'user d'entrer son film et ça va l'ajouter
console.log(mesFilms);
mesFilms.pop()//pour supprimer le dernier element
console.log(mesFilms);
mesFilms.splice(1,1) // supprimer un element a partir d'un indice1
console.log(mesFilms); */

/* let randomTab = [15, true, ["edwige", "rose"], {nom: "Linda"}, () =>{}]
console.log(randomTab);
console.log(randomTab[1]);
console.log(randomTab[2][0]);
console.log("taille du tableau:" +randomTab.length);//pour savoir la taille du tableau */
/* 
for(let i = 0; i< mesFilms.length; i++){
    console.log(mesFilms [i]);
}

for(let film of mesFilms){
    console.log(`j'ai regarde le film ${film}`);//maniere simple c'est la mm chose que le for
} */

//objet

/* let etudiant= {
    nom: "solenne",
    age: 18,
    statutMatrimonial: "celibataire",
    presentation(){
        console.log(
            `je m'appelle ${this.nom}
            j'ai ${this.age} ans et je suis ${this.statutMatrimonial}`
        );
    }
}
etudiant.presentation()
etudiant.filiere = "sil"
console.log(etudiant.filiere); */


/* console.log(`je m'appelle ${etudiant.nom}
 je suis agée de ${etudiant.age} et
  je suis ${etudiant.statutMatrimonial}`);

etudiant.nom ="satoru";
console.log(etudiant.nom);
console.log(); */ // %2 = parité paire

/* let parite =(nombre)=>{
    if(nombre % 2 ==0){
      
    }
} */
/* 
let chiffre = [34, 11, 33, 10, 56, 21, 67]
let parite =(chif)=>{
   for(let note of chif){
      if(note % 2 !=0){
        console.log(`note`);
      }  
   
    }
}
console.log(chiffre); */

/* let tableau = [{titre:"ty", annee: 2004}, {titre:"tu", annee: 2009}, {titre:"hi", annee: 2005}, {titre:"po", annee: 2002}]
/* for(let element of tableau){
    console.log(element.titre); */
  //affiche le plus petit année
/*  function serie(params) {
    let plusPetit =[0].annee;
    for(let element of params){
        if(plusPetit > element.annee){
            plusPetit = element.a;
        }
    }
    console.log(plusPetit);
 }
 serie(tableau);
  */

 //créér une classe et son constructeur
 class Personne{
    constructor(n, p){
     this.nom = n;
     this.prenom = p;  
    }
    presentation(){
        console.log(`je m'appelle ${this.nom} ${this.prenom}`);
    }
 }

 class Professeur extends Personne{
    constructor(nom, prenom, filiere){
        super(nom, prenom)
        this.filiere = filiere
    }
    frequente = true
 }

 let agbodjan = new Professeur("Agbodjan", "Eric", "D")
 console.log(agbodjan);
 let franklin = new Personne("Franklin", "Delano")
 console.log(franklin);
 let audrey = new Personne("audrey", "yawa")
 console.log(audrey);

/*  class Animaux{
    constructor(nom){
        this.name = nom
    }
    pres(){
        console.log(`leurs nom ${this.name}`);
    }
 }
 let chien = new Animaux("chouchou")
 console.log(chien);
 let chat = new Animaux("milou")
 console.log(chat); */



 /* let koffi = new Personne() //ajouter une persone
 console.log(koffi);
 let audrey = new Personne()
 console.log(audrey); */

 

    
    

    






