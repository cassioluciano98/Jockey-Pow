const optionImages = document.querySelectorAll('.option-image')
const container = document.querySelector('.container')
const resultText = document.querySelector('.result-text')
const userResult = document.querySelector('.user-result img')
const computerResult = document.querySelector('.computer-result img')

const computerImg = [
    'images/pedra.png', 
    'images/papel.png', 
    'images/tesoura.png'
]

/*

Pedra = Rock (R)
Papel = Paper (P)
Tesoura = Scissors (S)

*/

const winner = {
    RR: "Empate",
    RP: "Computador",
    RS: "Voce",
    PP: "Empate",
    PS: "Computador",
    PR: "Voce",
    SS: "Empate",
    SR: "Computador",
    SP: "Voce"
}


function handleOptionClick(event) {
    const clickedImage = event.currentTarget;
    const clickedIndex = Array.from(optionImages).indexOf(clickedImage);

    container.classList.add('start')
    resultText.textContent = "..."

    userResult.src = computerResult.src = computerImg[0];

    setTimeout(() => {
        container.classList.remove('start')

        userResult.src = computerImg[clickedIndex];

        const randomNumber = Math.floor(Math.random() * computerImg.length);
        computerResult.src = computerImg[randomNumber];
        
        const userValue = ['R', 'P', 'S'][clickedIndex];
        const computerValue = ['R', 'P', 'S'][randomNumber];
        const combinationResult = userValue + computerValue;

        const finalResult = winner[combinationResult];


        resultText.textContent = userValue === computerValue ? 'Empate!' : `${finalResult} Ganhou!`;

    }, 2000);
}

optionImages.forEach( img => {
    img.addEventListener('click', handleOptionClick)
})