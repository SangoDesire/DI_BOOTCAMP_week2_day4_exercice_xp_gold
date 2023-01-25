/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp Week2 Day4 ExerciceXP Abbrev_name
 */

/**
 * Retourne le nom sous forme abbrégée
 * @param name
 */
function abbrevName(name) {
    let nameSplit = name.split(" ");
    let newName = nameSplit[0];
    if (nameSplit.length > 1) {
        for (let i = 1; i < nameSplit.length; i++) {
            newName += " " + nameSplit[i].toUpperCase().charAt(0) + ".";
        }
    }
    return newName;
}

console.log(abbrevName("Robin Singh"));