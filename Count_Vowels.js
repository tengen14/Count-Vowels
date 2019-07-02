/* Count Vowels - Enter a string and the program counts the number of vowels in the text. For added complexity have it report a sum of each vowel found. */


console.log("Insert a string as an argument in the function countVowels(). The program will return the total number of vowels plus the total numbers of each vowel.");

function countVowels(str) {
    var totalVowels = 0;
    
    var vowels = {
        "a": 0,
        "e": 0,
        "i": 0,
        "o": 0,
        "u": 0
    };
    
    for (let char of str.toLowerCase()) {
        for (let vowel in vowels) {
            if (char === vowel) {
                totalVowels++;
                vowels[vowel]++;
            }
        }
    }
    return "Total Vowels: " + totalVowels.toString() + " :Total of Each Vowel: " + JSON.stringify(vowels);
}

countVowels("Thane is a big one. Orville is a clown disguised as a human.");

