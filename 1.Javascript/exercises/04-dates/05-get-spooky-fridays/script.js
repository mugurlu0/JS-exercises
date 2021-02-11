/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        var y = parseInt(document.getElementById("year").value);
        var date = new Date(y, 01);
        var mlist = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        var spookyfriday = [];
        while (date.getFullYear() == y) {
            if (date.getDay() == 5 && date.getDate() == 13) {
                spookyfriday.push(mlist[date.getMonth()]);
            }
            date.setDate(date.getDate() + 1);
        }
        console.log("les mois correspondant à un vendredi 13 pour l'année " + y + " sont : " + spookyfriday.join(", "));

    });
})();