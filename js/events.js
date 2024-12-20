// // option 1: directly set on the HTML element
// <button onclick="console.log(69)">Another button</button>

//  option 2: add onclick function on the html element
// IMPORTaNT : we will use this
// <button onclick="makeRed()">Make Red</button>

// console.log('This is separate JS file');

function makeRed() {
    document.body.style.backgroundColor = 'red';

}

// option: 3
const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
// makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}


// option: 3 another
const purpleButton = document.getElementById('make-purple');
// const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option: 4
const pinkButton = document.getElementById('make-pink')
// consol.log(pinkButton);
pinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option: 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';

});

// option: 4 final
// IMPORTANT: we will use this sometimes
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
});
