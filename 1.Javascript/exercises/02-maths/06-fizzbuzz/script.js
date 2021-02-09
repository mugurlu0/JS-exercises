/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    for (i = 1; i <= 100; i++) {
        if (i % 3 == 0) { console.log(i + " fizz") }

        else if (i % 5 == 0) { console.log(i + " buzz") }

        else if ((i % 5 == 0) && (i % 3 == 0)) {
            console.log(i + " fizzbuzz");
        }
        else {
            console.log(i + " fizzbuzz");
        }
    }

})();

// Dans la console, pour chaque nombre entre 1 et 100 : affiche "fizz" si le nombre est multiple de 3, 
// "buzz" s'il est multiple de 5, "fizzbuzz" s'il est multiple de 3 ET 5, ou simplement le nombre si aucun cas ne correspond.


