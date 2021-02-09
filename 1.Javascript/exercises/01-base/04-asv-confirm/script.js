/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
})();
var x = [prompt("quel age as tu? "),
prompt("es tu un h ou une f? "),
prompt("quelle ville habites tu? ")];
var y = confirm("confirmes-tu les infos? ");
if (y != true) {
    var x = [prompt("quel age as tu? "),
    prompt("es tu un h ou une f? "),
    prompt("quelle ville habites tu? ")];
    var y = confirm("confirmes-tu les infos? ");
}


