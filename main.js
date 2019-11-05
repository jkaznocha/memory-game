const colors = ["lightyellow", "lightseagreen", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "white", "lightpink", "lightyellow", "lightseagreen", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "white", "lightpink"],
    btnStart = document.querySelector("button.start");

let div = document.querySelectorAll('div');


const blocks = [...div];

const init = function () {
    let index = Math.floor(Math.random() * 18);
    console.log(index)
}


btnStart.addEventListener('click', init)
// const randomNumber = () => {

//     const number = Math.floor(Math.random() * 9),
//         number2 = Math.floor(Math.random() * 9)
//     color1 = colors[number];
//     color2 = colors[number2];
//     //  return (color1, color2)
//     console.log(color1, color2)
// }

// const startGame = () => {

//     for (i = 0; i <= 9; i++) {
//         randomNumber();

//         blocks.forEach(block => block.style.backgroundColor = color1)
//     };
//     for (i = 0; 18 >= i > 9; i++) {
//         randomNumber();

//         blocks.forEach(block => block.style.backgroundColor = color2)
//     };

//     return blocks
// }

// window.addEventListener('load', startGame)


