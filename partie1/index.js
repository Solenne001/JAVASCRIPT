/* let nom //declaration de variable
nom ="Valentin" //affectation */
/* //camelcase
let nomEtudiant = "Reddington"

const nombreDevie =100
console.log(nom, nomEtudiant, nombreDevie)

console.log(5) */

/* let age =prompt("quelle est votre age?")
console.log(age)

let name =prompt("quelle est votre nom ?")
let prenom =prompt("quelle est votre prenom ?")


console.log("bienvenue" +prenom) */


//condition
let age = 17
if(age <= 17){
    console.log("oui c'est une mineur")
} else{
    console.log("tu peux aller")
}

let nom ="hector"
let prenom = "joel"

if(nom ==prenom){
    console.log("c'est bizzare")
} else{
    console.log("ca va")
}

//let number = Number(prompt("Veuiller choisir un nbre"))
/* console.log(number + 1)
console.log(typeof number) */ //pour ajouter un nbre au nbre precedent

/* if(number > 0){
    console.log("positif")
}else if(number == 0){
    console.log("nul")
}else{
    console.log("negatif")
} */

/* 
let sexe = prompt("Quelle est votre sexe, f pour feminin, m pour masculin")
let fesse = prompt("est ce que tu as fesse ? o pour oui et n pour non")

if(sexe =="f" && fesse =="o"){
    console.log("Ton avenir est collé derrière toi")
}else{
    console.log("Travaille dur, toi tu dois manger a la sueur de ton front")
}

//ou ||

if(sexe =="m" || fesse =="n"){
    console.log("je t'ai dit de te concentrer sur le travail")
} */
/* 
let lundi ="kodjo"
let mardi ="ablam"
let mercredi ="kokou"
let jeudi ="yao"
let vendredi ="koffi"
let samedi ="komi"
let dimanche ="kossi"

switch ("ayele"){
    case "kodjo":
        console.log("vous etes né un lundi")
      break;
    case "ablam":
      console.log("vous etes né un mardi")
      break;
    case "kokou":
        console.log("vous etes né un mercredi")
     break;
    case "yao":
        console.log("vous etes né un jeudi")
      break;
    case "koffi":
        console.log("vous etes né un vendredi")
      break;
    case "komi":
        console.log("vous etes né un samedi")
      break;
    case "kossi":
      console.log("vous etes né un dimanche")
    break;

    default:
        console.log("Votre nom doit etre erroné")
        break
} */

//boucle while & for
 /* let specialite = prompt("quelle spécialité faites vous")
while(specialite != "IT"){
   console.log("tu n'as pas ta place ici")
   specialite = prompt("qu'elle spécialité faite vous")
}  */

/* let nbr = 1
while(nbr <6){
    console.log("inférieur")
    //incrémentationsn
} */


/* for(let i =0; i < 5; i++){
    console.log(`tour ${i}`)
} */

/*  let numbermath =Number(prompt("veuillez entrer la note de math"))
 let numbersvt =Number(prompt("veuillez entrer la note de svt"))
 let numberphysique =Number(prompt("veuillez entrer la note de physique"))
 let numberphilo =Number(prompt("veuillez entrer la note de philo"))
 let moyenne = (math + svt + physique + philo)/4

 console.log("numbermath, ") */

 /* let jour ="veuillez Entrer un jour"

 switch ("jour"){
    case "lundi":
        console.log("le jour suivant est mardi")
      break;
    case "mardi":
     console.log("le jour suivant est mercredi")
      break;
      case "mercredi":
        console.log("le jour suivant est jeudi")
      break;
      case "jeudi":
        console.log("le jour suivant est vendredi")
      break;
      case "vendredi":
        console.log("le jour suivant est samedi")
      break;
      case "samedi":
        console.log("le jour suivant est dimache")
      break;
      case "dimanche":
        console.log("le jour suivant est lundi")
      break;

      default:
        console.log("vous avez erroné ")
        break;
 } */

 /* let heure = Number(prompt("veuillez entrer l'heure"))
 let minute = Number(prompt("veuiller entrer la minute"))
 let seconde = Number(prompt("et la seconde"))
 if(seconde > 0 && seconde < 59){
    seconde = seconde + 1
    console.log(`${seconde}`)
} else if (seconde == 59){
    if(minute > 0 && minute < 59){
        minute = minute + 1
        seconde = seconde = 0
        console.log(`${minute}: ${seconde}`)
    }else if(minute ==59){
        if(heure>0 && heure<24){
            heure =heure + 1
            minute =minute = 0
            console.log(`${heure}: ${minute}`)
        }
    }
} */

let number = Number(prompt("Quel valeur voulez vous utiliser"))

 for(let i =0; i <13; i++){
    console.log(`${number} * ${i} =${number*1}`)
} 




 


