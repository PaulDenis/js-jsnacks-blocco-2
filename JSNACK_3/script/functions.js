// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function between(array, min, max) {
    var newArray = [];
    if (max <= array.length){
        for (var i = min; i < max; i++) { 
            // Potrei fare i=(min-1); i <= (max-1) se volessi la posizione "umana"
            newArray.push(array[i]);
        }
    } else {
        return alert ("L'array è troppo corto")
    }
    return newArray
}