console.log('okkkk');

/*
* creare griglia in JS con dimensioni impostate dall'utente attraverso select
* 10, 9, 7
*
* ogni casella avrà un numero univoco da 1 a max possibile 
*
* al click la casella: 
*   - diventa verde se num pari;
    - diventa rossa se num dispari;
*/


const setBtn = document.getElementById('set-dimensions');
const dimensionLevel = document.getElementById('dimensions')
const wrapGrid = document.querySelector('.wrap-grid');


//set griglia al click sul btn 'Imposta'
setBtn.addEventListener('click', () => {            
    wrapGrid.innerHTML = '';                    //elimina l' <h2>

    const gridDimension = dimensionLevel.value;         
    console.log(gridDimension);

    let cellNumber;
    let cellPerSide;

    switch (gridDimension) {
        case '1':
            cellNumber = 100;
            cellPerSide = 10;            
            break;
        case '2':
            cellNumber = 81;
            cellPerSide = 9;            
            break;
        case '3':
            cellNumber = 49;
            cellPerSide = 7;            
            break;
    }

    console.log(cellNumber);
    console.log(cellPerSide);


    // GENERATORE grid esterna
    const gridEsterna = document.createElement('div');
    gridEsterna.classList.add('grid');


    //GENERATORE griglia interna e numeri univoci
    const numList = [];

    for (let i = 1; i <= cellNumber; i++) {
        //gen num random e univoco
        const num = numGenerator(numList, 1, cellNumber);
        numList.push(num);

        //gen square
        const square = squareGenerator(num, cellPerSide);

        square.addEventListener('click' , function() {
            this.classList.add('active');
        });

        //appendi square a grid esterna
        gridEsterna.append(square);

    }
    console.log(numList);
    

    //INSERIRE la griglia nell'HTML
    wrapGrid.append(gridEsterna);

});



// FUNZIONI

//gen num random e univoco
function numGenerator(list, min, max) {

    //loop fino a numero non già presente nella list
    let number = 0;

    do {
        number = Math.floor(Math.random() * max - min + 1) + min;
    } while (list.includes(number));

    return number;
}

//gen elemento square
function squareGenerator(num,cells) {

    //pari o dispari?
    const type = (num % 2 === 0) ? 'even' : 'odd';

    //crea lo square nell'HTML
    const node = document.createElement('div');
    node.classList.add('square', `square-${type}`);
    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    //crea il numerino da inserire nello square
    const span = document.createElement('span');
    span.append(num);

    //add numerino nello square
    node.append(span);

    return node;
}



