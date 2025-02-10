const nomsorcier = prompt("Comment te nommes-tu, sorcier ?");
console.log(`Le sorcier se nomme : ${nomsorcier} !`);

// Définition de variables

const boutique = "L'antre du Dragon qui dort";
let nbpotions= 20;
let prixpotion=5;
let ouverture=true;

//Affichage conditionnel

if (ouverture){
    console.log(`Bienvenue dans la boutique ${boutique} Aventurier !`);
}else  {
    console.log(`La boutique ${boutique} est fermée, revenez plus tard Aventurier !`)
}

//Affichage conditionnel avec switch

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ?");
console.log("1. Le nom de la boutique");
console.log("2. Le nom du Sorcier");
console.log("3. Le prix d'une potion de soin");
console.log("4. La quantité d'une potion de soin");

let choix = parseInt(prompt("Fais ton choix (1-4) :"));

switch (choix) {
    case 1:
        console.log(`Le nom de la boutique est : ${boutique}`);
        break;
    case 2:
        console.log(`Le nom du Sorcier est : ${nomsorcier}`);
        break;
    case 3:
        console.log(`Le prix d'une potion de soin est de ${prixpotion} pièces d'or.`);
        break;
    case 4:
        console.log(`Il reste ${nbpotions} potions de soin en stock.`);
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !");
}