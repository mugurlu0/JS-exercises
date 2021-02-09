/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        var num = document.getElementById("numbers").value;
        num = num.split(",").map(Number); // méthode map(): crée un nouveau tableau avec résultats de l'appel d'une fonction sur chaque
        // élément du tableau appelant.
        x = []; //je crée un array vide
        index = 0; //l'index de base et set sur 0
        while (num.length > 0) { //je démarre une boucle while en paramétrant la condition tant que la longeur de mes nombres 
            //sera plus grand que 0
            var indexOne = num[0]; //je crée une variable pour set le premier index
            for (var i = 0; i < num.length; i++) {//je crée une boucle tant que la longeur de nuum n'est pas atteinte, i++
                if (num[i] <= indexOne) {//je récupère le i pour mes indexes, mets une limite pour que l'index ne tombe pas en négatif 
                    //ou à 0 de nouveau
                    indexOne = num[i];//je précise que dans ce cas indexOne doit correspondre dans ce cas à index i
                    index = i;//j'attribue i à index (qui avait 0 au début comme valeur)
                }
            }
            x.push(num[index]);//j'insère mes numéros dans l'array
            num.splice(index, 1);//La méthode splice() modifie le contenu d'un tableau en retirant des éléments 
            //et/ou en ajoutant de nouveaux éléments à même le tableau.
            //On peut ainsi vider ou remplacer une partie d'un tableau.
        }
        document.write(x);
    });
})();