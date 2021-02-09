/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").




    const performOperation = operation => {
        var op1 = parseInt(document.getElementById("op-one").value);//these variables need to be declared inside the bracket.
        var op2 = parseInt(document.getElementById("op-two").value);//otherwise ignored as numbers
        switch (operation) { //we pass the const performOperation to operation and this one will be referred as our const from now on
            case 'addition': //id's are referenced in cases
                document.write(op1 + op2);
                break;// break statement is a sine qua non when switching
            case 'substraction':
                document.write(op1 - op2);
                break;
            case 'multiplication':
                document.write(op1 * op2);
                break;
            case 'division':
                document.write(op1 / op2);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), true),
        ),
    );
})();
