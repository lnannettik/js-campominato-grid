// CHECH
console.log(`JS OK`);


// REF

const playButton = document.getElementById('play');
const levels = document.getElementById('levels');
const wrapGrid = document.querySelector('.wrap-grid');


// INIZIO PARTITA

playBtn.addEventListener('click', () => {
    // reset wrap grid
    wrapGrid.innerHTML = '';
    
    // set dimansioni per difficolta'
    let cellsNumber;
    let cellsPerSide;

    switch (levels.value) {
        case '1':
        cellsNumber = 100;
        cellsPerSide = 10;  
        break;
    
        case '2':
        cellsNumber = 81;
        cellsPerSide = 9;             
        break;
                    
        case '3':
        cellsNumber = 49;
        cellsPerSide = 7;

    }

    console.log(cellsNumber);
    console.log(cellsNumber);



    // genera griglia
    const grid = document.createElement('div');
    grid.classList.add('grid');


    // genera squares, tante quante saranno le cellNumber

    for (let i = 1; i <= cellsNumber; i++) {
        // generare singola square
        const square = createGridSquare(i, cellsPerSide)


        // click square
        square.addEventListener('click', () => {
            square.classList.add('clicked');
        });

        // aggiunta di square al grid
        grid.append(square);
    }

    // inserire grid in  wrap
    wrapGrid.append(grid);


});


// FUNCTION

// genera square

function createGridSquare(num, cells) {
    // creazione nodo
    const nodo = document.createElement('div');


    // aggiungi classe e dimensioni
    nodo.classList.add('square');
    nodo.style.width = `calc(100% / ${cells})`;
    nodo.style.height = `calc(100% / ${cells})`;
    

    // inserire num dentro il nodo
    nodo.append(num);


    // return nodo
    return nodo;
    
}

















// const wrapGrid = document.querySelector('.wrap-grid');
// const dimensionLevel = document.getElementById('dimensions')
// setBtn.addEventListener('click', () => {
//     //reset contenuto wrap-grid
//     wrapGrid.innerHTML = '';

//     //ottenimento valore dimensione griglia
//     const gridDimensions = dimensionLevel.value;
//     let cellNumber;
//     let cellPerSide;

//     //in base alla selezione, imposteremo i seguenti valori

//     switch (gridDimensions) {
//         case '3':
//             cellsNumber = 100;
//             cellPerSide = 10;
//             break;
        
//         case '2':
//             cellsNumber = 81;
//             cellPerSide = 9;
//             break;

//         case '1':
//             cellsNumber = 49;
//             cellPerSide = 7;
//             break;
//     }
//     console.log(cellsNumber, cellPerSide);

//     // generazione Grid parent
//     const grid = document.createElement('div');
//     grid.classList.add('grid');

//     //inserimento griglia nel body
//     wrapGrid.append(grid);

//     // gen grid square
//     const numList = []; //lista di numeri univoci
//     for (let i = 1; i <= cellsNumber; i++) {
//         // gen num random per la casella
//         let number = genUnicoRandom(numList, 1, cellsNumber);
//         numList.push(number);

//         //generazione squares
//         const square = createGridSquare(number, cellPerSide);
//         grid.append(square);

//         square.addEventListener('click', function() {
//             this.classList.add('active');
//         });
//     }
// });

// // generazione random di un numero unico

// function genUnicoRandom(list, min, max) {
//     //loop fino a nuovo numero non presente nell'array
// //  
// function createGridSquare(num, cells) {
//     // pari o dispari
//     // operatore ternario
//     const type = (num % 2 === 0) ? 'even' : 'odd';

//     // creiamo nodo .square
//     const node = document.createElement('div');
//     node.classList.add('square', `square-${type}`);
//     node.style.width = `calc( 100% / ${cells})`;
//     node.style.height = `calc(100% / ${cells})`;

//     //nodo span per il testo
//     const span = document.createElement('span');
//     span.append(num);
//     node.append(span);

//     return node;
// }




