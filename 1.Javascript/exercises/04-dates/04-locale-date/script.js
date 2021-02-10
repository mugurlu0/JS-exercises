/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    var date = new Date();
    var options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
    var hour = date.getHours();
    var minz = date.getMinutes();
    var clock = hour + "h" + minz;
    var ok = (date.toLocaleDateString("fr-FR", options) + ", " + clock);
    document.getElementById("target").innerHTML = ok;
})();
