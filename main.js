const colors = ["lightyellow", "lightsea", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "lightbrown", "lightpink", "lightyellow", "lightsea", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "lightbrown", "lightpink"],
    btnStart = document.querySelector("button.start");

let div = document.querySelectorAll('div');


let blocks = [...div];

const init = function () {

    blocks.forEach(block => {
        let index = Math.floor(Math.random() * colors.length);
        block.classList.add(colors[index]);
        colors.splice(index, 1);
        block.addEventListener('click', showBlocks)

    })
    window.setTimeout(hidden, 1000)
}

const hidden = () => {
    blocks.forEach(block => block.classList.add('hidden'))
}


const hiddenBlocks = () => {

    const index = blocks.findIndex(block => !(block.classList.contains('hidden')));
    console.log(index)
    const index2 = blocks.findIndex((block, indeks) => !(block.classList.contains('hidden')) && indeks !== index)
    console.log(index2)

    if (blocks[index].classList.value === blocks[index2].classList.value) {
        blocks[index].classList.add("opacity");
        blocks[index2].classList.add('opacity');
        return blocks
    } else {
        return blocks
    }
}

const endGame = () => {
    if (blocks.some(block => !(block.classList.contains('hidden')))) {
        return
    } else {

    }
}

const showBlocks = (e) => {
    let newBlocks = blocks.filter(block => block.classList.contains("hidden"));
    console.log(newBlocks)
    if (newBlocks.length > 16) {
        e.target.classList.remove('hidden');
        // console.log(e.target.classList.value)

        blocks = hiddenBlocks();
    } else {
        hidden();
    }
    endGame();
};


btnStart.addEventListener('click', init);
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


