//const nomsorcier = prompt("Comment te nommes-tu, sorcier ?");
//console.log(`Le sorcier se nomme : ${nomsorcier} !`);

// Définition de variables

const nomsorcier = "Orphee";
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

//Calcul du prix total d'une commande de potion

const quantitepotion = parseInt(prompt("Combien désires tu de potions?"));
const prixtotalpotion =prixpotion * quantitepotion;
console.log(`Prix de ${quantitepotion} potions de soins : ${prixtotalpotion} mon cher Aventurier.`)

//Bourse de l'Aventurier

let bourse= 100;

if (bourse >= prixtotalpotion) {
    if (stockPotions >= quantitePotionsDemandees) {
        bourse -= prixtotalpotion;  
        nbpotions -= quantitepotion;}
    else{
        console.log("Je n'ai pas assez de potions pour votre commande !")
    }
}
else{
    console.log("Vous n'avez pas assez d'argent pour cet achat!")
}

//Liste des potions

const potions = ["Potion de soin", "Potion anti-poison", "Potion de Mana"];
console.log(potions);

//Affichage des potions

console.log(potions[0]);
console.log(potions[potions.length - 1]);
for (let i=0;i<potions.length;i++){
    const nompotion=potions[i];
    console.log(`Nous avons de la ${potions} !`)
}

//Ajout d'une nouvelle potion



