let dateGlobal = new Date();
let annee = dateGlobal.getFullYear();
let mois = dateGlobal.getMonth();
const allMonth = [
  "janvier",
  "fevrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "aout",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];
let moisEnCours = allMonth[mois];
let jours = dateGlobal.getDate();
let joursSemaine = dateGlobal.getDay();
const allDays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
let joursEncours = allDays[jours];
document.getElementById("jour").innerHTML =
  joursEncours + " " + jours + " " + moisEnCours + " " + annee;
