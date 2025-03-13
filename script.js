/* let today = new Date()
console.log(today)
let actualYear  = today.getFullYear()
console.log(actualYear) */

/* Étape 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - 
autrement dit, l’année sera systématiquement représentée sur 4 caractères.
isValidDate("03/04/2001") // true isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer 
que le nombre de jours par mois est valide*/