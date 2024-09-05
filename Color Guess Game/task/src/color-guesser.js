const rng = () => Math.floor(Math.random() * 256);
const blocks = document.getElementById('blocks');
document.getElementById('restart').addEventListener('click', e => start());
const clicker = id => e => {
    if (isCorrect == id) {
        for (node of blocks.children) {
            node.style.backgroundColor = e.target.style.backgroundColor;
            document.getElementById('status').innerText = 'Correct!';
        }
    } else {
        e.target.style.display = 'none';
        document.getElementById('status').innerText = 'Try Again!';
    }
}
let isCorrect;

for(let i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', clicker(i));
}

const start = () => {
    document.getElementById('status').innerText = 'Start Guessing!';
    isCorrect = Math.floor(Math.random() * blocks.children.length);
    let i = 0;
    for (const node of blocks.children) {
        const [red, green, blue] = [rng(), rng(), rng()];
        if (isCorrect == i++) {
            document.getElementById('rgb-color').innerText = `RGB(${red}, ${green}, ${blue})`;
        }
        node.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        node.style.display = 'initial';
    }
}
start();
