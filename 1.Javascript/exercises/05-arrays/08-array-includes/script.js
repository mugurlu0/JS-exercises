/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ]; const pomme = fruits.includes("pomme");
    if (pomme){
        console.log("oui");}
    else{
            console.log("non, pas de pomme")
        }
    }
    );
    //Au clic sur le bouton, affiche dans la console si, oui ou non, il y a une pomme dans le tableau fruits.
})();
