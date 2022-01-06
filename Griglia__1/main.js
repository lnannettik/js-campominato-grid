console.log('dai dai dai');




// crea una griglia 8 x 8
// al 'click' il quadrato corrispondente si colori di verde




const gridElement = document.querySelector('.grid');        //dove lo faccio?

for (let i = 0; i < 64; i++) {                  //quante volte lo faccio?

                                            //come lo faccio? vedi FUNZIONI sotto

    const elemento = creaSquare();       //richiamo la FUNZIONE che crea l'elemento

    elemento.addEventListener('click', function() {
        this.classList.add('active');
    });

    gridElement.append(elemento);    //aggiungo un elemento dopo l'altro man mano che si creano
    
}


// FUNZIONI

function creaSquare() {                                          //nomino la funzione
    const square = document.createElement('div');           //creo la const che crea l'elemento square
    square.classList.add('square');                  //aggiungo la classe 'square'
    return square;                              //return
}




