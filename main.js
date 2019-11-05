const colors = ["lightyellow", "lightsea", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "lightbrown", "lightpink", "lightyellow", "lightsea", "lightgreen", "lightblue", "lightcoral", "lightviolet", "lightgrey", "lightbrown", "lightpink"],
    btnStart = document.querySelector("button.start"),
    section = document.querySelector('section');

let div = document.querySelectorAll('div');
let counter = 0;

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

const resetGame = () => {
    location.reload();
    counert++;
}



const hidden = () => {
    blocks.forEach(block => block.classList.add('hidden'))
}


const hiddenBlocks = () => {

    const index = blocks.findIndex(block => !(block.classList.contains('hidden')));
    // console.log(index)
    const index2 = blocks.findIndex((block, indeks) => !(block.classList.contains('hidden')) && indeks !== index)
    // console.log(index2)

    if (blocks[index].classList.value === blocks[index2].classList.value) {
        blocks[index].classList.add("opacity");
        blocks[index].removeEventListener('click', showBlocks);
        blocks[index2].classList.add('opacity');
        blocks[index2].removeEventListener('click', showBlocks)
        return blocks
    } else {
        return blocks
    }
}

const endGame = () => {


    if (blocks.every(block => block.classList.contains('opacity'))) {
        section.classList.add('end');
        section.innerHTML = '<h3> Wygrałeś! Gratulacje!</h3><br><h6>Jeśli chcesz zagrać jeszcze raz wciśnij </h6><button class="reset">Reset</button>';

        const btnReset = document.querySelector('button.reset');
        btnReset.addEventListener('click', resetGame)
    }
}

const showBlocks = (e) => {
    let newBlocks = blocks.filter(block => block.classList.contains("hidden"));
    // console.log(newBlocks)
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

