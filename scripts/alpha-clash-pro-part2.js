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
    console.log('player pressed', playerPressed);

    // stop the game if player pressed 'ESC'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // key player was/is expected to press the key that has been showed on the screen.
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase(); 

    // check if the ans is correct or incorrect.
    if (playerPressed === expectedAlphabet) {
        //-------------------------------------------------------
        // Update correct Score: FIRST EXAMPLE (Explaination)
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        //-------------------------------------------------------
        console.log('you got a point!');

        // Update correct Score: Second Example (Easy)
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // 2. increase the score by 1
        const newScore = currentScore + 1;
        
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        console.log('The answer is Incorrect');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }


        // step 1: Update Incorrect Score: Second Example (Easy) when the answer is Incorrect.

        // step 2: reduce the life count.
        const newLife = currentLife - 1;

        // step 3: display updated life count.
        // currentLifeElement.innerText = newLife;

        //-------------------------------------------------------
        // Update Incorrect Score: First Example (Explaination), 
        // when the answer is Incorrect.

        // step 1: get the current life number.

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        //-------------------------------------------------------
        


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
    // hide everything and only show playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

// hiding playground when the life chances finishes
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected coloured alphabets highlights
    const currentAlphabet = getElementTextById('current-alphabet');

    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
