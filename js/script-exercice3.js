/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExerciceXPGold SwapCase
 */


//Write a JavaScript function which takes a string as an argument and swaps the case of each character.
/**
 * takes a string as an argument and swaps the case of each character.
 * @param phrase
 */
function swapCase(phrase) {
    let phraseSwap = "";
    for (let i = 0; i < phrase.length; i++) {
        if (("" + phrase.charAt(i)) == ("" + phrase.charAt(i)).toUpperCase()) {
            phraseSwap += ("" + phrase.charAt(i)).toLowerCase();
        } else {
            phraseSwap += ("" + phrase.charAt(i)).toUpperCase().trim();
        }
    }
    return phraseSwap.trim();
}

console.log(swapCase("The Quick Brown Fox"));