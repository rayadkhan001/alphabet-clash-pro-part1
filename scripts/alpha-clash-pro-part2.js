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

// keyboard function 
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // key player was/is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase(); 

    // check if the ans is correct or incorrect.
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point!');

        // update score: 
        // 1. get the corrent score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);


        // 2. increase the score by 1
        const newScore = currentScore + 1;
        
        // 3. show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('The answer is Incorrect');
        // step 1: get the current life number.
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        
        // step 2: reduce the life count.
        const newLife = currentLife - 1;

        // step 3: display updated life count.
        currentLifeElement.innerText = newLife;
    }

}

// captured keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent); // this is called callback function

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet is:', alphabet);

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