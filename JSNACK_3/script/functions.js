// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function between(array, a, b) {
    var newArray = [];
    if (b <= array.length){
        if (b < a) {
            return alert("Il primo numero deve essere maggiore del secondo");
        } else {
            for (var i = a; i < b; i++) { 
                // Potrei fare i=(a-1); i <= (b-1) se volessi la posizione "umana"
                newArray.push(array[i]);
            }
        }

    } else {
        return alert ("L'array è troppo corto")
    }
    return newArray
}