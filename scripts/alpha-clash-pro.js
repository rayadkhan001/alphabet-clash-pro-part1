// function play(){
//     /*Step-1: Hide the home screen, To hide the screen, add the class "hidden",
//     to the home section, show the playground.
//     */
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);

// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet is:', alphabet);

    // set(show it), randomly generated alphabet to the screen.
    const currentAlphabetElement =  document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set Background color 
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}