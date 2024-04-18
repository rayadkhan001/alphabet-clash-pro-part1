// ek bar code likhsi. akhon shudhu aikhan theke nam call kore kaj korbo.
// bibhinno jaigai use kora hobe ai code ta tai alada independent bhabe likhsi 
// aitao same ager 2 tar moto. Showed bgc in add
// hidden bgc in remove same accept for bgc.
// aita shudhu random alphabet ber korar jonno likha hoise simply.



function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400'); 
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


// goto class a aita dekhaise, uprer ta revice akar a abar koraise
// function getARandomAlphabet(){

//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; //(26 alphabets)
//     const alphabets = alphabetString.split('');



//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);


//     const alphabet = alphabets[index];
//     return alphabet;
// }
