/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


/* I principali datatype in JavaScript con una spiegazione semplice e chiara per farli comprendere anche ai bambini:

1-Stringhe: una stringa è una sequenza di caratteri, come una parola o una frase. Ad esempio, "ciao" è una stringa composta da 4 caratteri.

2-Numeri: i numeri sono i numeri che usiamo tutti i giorni, come 1, 2, 3, 4, ecc. In JavaScript, i numeri possono essere scritti con o senza virgola decimale.

3-Booleani: i booleani sono il tipo di dato che rappresenta due possibili valori: vero o falso. Ad esempio, se chiedi a qualcuno se il cielo è blu, la risposta potrebbe essere "vero" o "falso".


4-Oggetti: un oggetto è un tipo di dato che contiene una serie di proprietà o attributi. Ad esempio, un oggetto potrebbe rappresentare una persona e avere le proprietà "nome", "età" e "sesso".

5-Null e undefined: questi sono due valori speciali in JavaScript. "Null" rappresenta l'assenza di un valore, mentre "undefined" significa che una variabile non è stata definita o non ha un valore assegnato.
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* In JavaScript, un oggetto è un tipo di dato che rappresenta un insieme di proprietà o attributi. Si può pensare a un oggetto come a un contenitore di informazioni, dove ogni proprietà è un'informazione specifica. Ad esempio, un oggetto che rappresenta una persona potrebbe avere proprietà come "nome", "età", "sesso" e così via. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* let Somma = 12+20 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12 */


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let name= "Samuel" */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let Sottrazione= x-4 */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); // Output: true

console.log(name1.toLowerCase() === name2.toLowerCase()); // Output: true
