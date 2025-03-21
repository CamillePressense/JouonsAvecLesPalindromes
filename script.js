
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
//getNextPalindromes(10)

/* Étape 4
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. 
Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.
 */

//Je créée la fonction qui retourne true si la string entrée en paramètre est un palindrome.
function isPalindrome(string){
    let string2 = string.toLowerCase()
    let result;
    if (string2.split("").reverse().join("") === string2 ){
    result = true;
    } else {
    result = false;
    }
    return result;
}

/* isPalindrome("ada");
isPalindrome("martin");
isPalindrome("radaR") */

//Je créée la fonction qui vérifie si la date entrée en paramètre est une date valide. Elle retourne true si c'est le cas.
function isValidDate(stringDate){
    let result;
    //Je récupère la partie jour-mois-année de la date en format dd/mm/yyyy
    let day = stringDate[0] + stringDate[1];
    let month = stringDate[3] + stringDate[4];
    let year = stringDate[6] + stringDate[7] + stringDate[8] + stringDate[9]

    //Je créé une vraie date à partir des variables day, month, year créées
    let dateToCheck = new Date(); 
    dateToCheck.setFullYear(year);
    dateToCheck.setMonth(month - 1);
    dateToCheck.setDate(day);

    let dayOfRealDate = dateToCheck.getDate();
    let monthOfRealDate = dateToCheck.getMonth() + 1;
    let yearOfRealDate = dateToCheck.getFullYear();

    // Je récupère les day, month, year de la date réelle créée et les compare à mes valeurs initiales
    if ((day == dayOfRealDate) && (month == monthOfRealDate) && (year == yearOfRealDate)){
        result = true;
    } else {
        result = false;
    }
    return result
}
    

//Je créée la fonction qui vérifie si une date est un palindrome, en s'assurant d'abord qu'elle soit valide.
function isDatePalindrome(stringDate){
    if (isValidDate(stringDate) === true){
        let date = stringDate.replaceAll("/", "");
        if (isPalindrome(date) === true){
            console.log(`La date ${stringDate} est un palindrome.`)
        } else {
            console.log(`La date ${stringDate} n'est pas un palindrome.`)
        }
    } else {
        console.log(`La date ${stringDate} n'est pas une date valide.`)
    }
}

isDatePalindrome("11/02/2011");
isDatePalindrome("30/02/2005");
isDatePalindrome("31/11/2019");
isDatePalindrome("25/11/2018");
isDatePalindrome("21/02/2012");


