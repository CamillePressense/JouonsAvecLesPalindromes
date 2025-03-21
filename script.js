/* Étape 1
Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
Tout au long de l’exercice, on supposera des années supérieures à 999 et inférieures 9999 - 
autrement dit, l’année sera systématiquement représentée sur 4 caractères.
isValidDate("03/04/2001") // true isValidDate("03/14/2001") // false car 14 n'est pas un mois valide
Vous aurez probablement besoin de créer une autre fonction maxDaysInMonth pour vous assurer 
que le nombre de jours par mois est valide*/


const DAYS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19","20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const MONTHS = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
const YEARA = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const YEARBCD = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const MONTHSIN30 = ["04", "06", "09", "11"];
const MONTHSIN31 = ["01", "03", "05", "07", "08", "10", "12"];
const FEBRUARY = "02";

function maxDaysInMonth(day, month){
    if (MONTHSIN30.includes(month) && day === "31"){
        return false
    } else if (month === FEBRUARY && (day === "29" || day === "30" || day === "31")){
        return false
    } else {
        return true
    }
}

function isValidDate(strDate){
    let result;
    let dayOfStrDate = strDate[0] + strDate[1];
    let montfOfStrDate = strDate[3] + strDate[4];

    // Je vérifie le nombre de caractères 
    if (strDate.length === 10){
        //Je vérifie le format xx/xx/xxxx 
        if (strDate[2] === "/" && strDate[5] === "/"){
            //Je vérifie les jours (entre 01 et 31) et les mois ( entre 01 et 12)
            if (DAYS.includes(dayOfStrDate) && MONTHS.includes(montfOfStrDate)){
                //Je vérifie l'année (entre 1000 et 9999)
                if (YEARA.includes(strDate[6]) && YEARBCD.includes(strDate[7]) && YEARBCD.includes(strDate[8]) && YEARBCD.includes(strDate[9]) )
                result = true;   
            } else {
                result = false;
            }
        } else {
            result = false;
        }
    } else {
        result = false;
    }
    // Je vérifie que le nombre de jours correspond au nombre max de jours dans ce mois
    if (result === true && maxDaysInMonth(dayOfStrDate, montfOfStrDate)){
        result = true ;  
    } else {
        result = false;
    }
    console.log(result)
    return result
};

/* Étape 2
Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui indique si la date est un palindrome. 
Si la date est invalide, retourner false.
Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.
isPalindrome("11/02/2011") // true isPalindrome("03/04/2001") // false */

function isPalindrome(strDate){
    let result;
    if (strDate[0] === strDate[9] &&
        strDate[1] === strDate[8] &&
        strDate[3] === strDate[7] &&
        strDate[4] === strDate[6]) {
            result = true
        } else {
            result = false
        }
    //console.log ( "la date est un palindrome : "+ result)
    return result
}

isPalindrome("12/02/2021");
isPalindrome("31/12/1986");
isPalindrome("11/11/1111");

/* Étape 3
Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. 
La fonction prendra le x en paramètre. */


//Je crée un array avec toutes les dates en palindromes, entre 1000 et 9999, classées par ordre chronologique

let allPalDates = [];
for (let d of DAYS){
    for (let m of MONTHS){
        let palindromeDate = {
        day: d,
        month: m,
        year: (d+m).split("").reverse().join("")
        }
        allPalDates.push(palindromeDate);
        allPalDates.sort((a, b) => a.year - b.year);
    }
}


function getNextPalindromes(x){
    const ACTUALYEAR = new Date().getFullYear();
    const ACTUALMONTH = new Date().getMonth() + 1;
    const ACTUALDAY = new Date().getDate();
    
    let nextPalindromes = [];

    allPalDates.forEach(date => {
        if ((date.year > ACTUALYEAR) || 
        ((date.year === ACTUALYEAR) && (date.month >= ACTUALMONTH) && (date.day > ACTUALDAY))){
            if (nextPalindromes.length < x){
                nextPalindromes.push(date);
            } else {
            return nextPalindromes;
            }
        }
    })
    console.log(nextPalindromes);
}

getNextPalindromes(10)





