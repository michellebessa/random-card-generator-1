window.onload = () => {
    document.querySelector('.value').textContent = randomVal();
    document.querySelectorAll('.suit').forEach(elem => {
        elem.textContent = suit;
        if (elem.textContent === '♦' || elem.textContent === '♥') {
            elem.classList.add('red');
        }
    })
};

let randomVal = () => {
    let val = ['2', '3', '4', '5', '6', '7', '8', '9', 'K', 'Q', 'A'];
    let i = Math.floor(Math.random() * 11);
    return val[i];
};

let randomSuit = () => {
    let suit = ['♦', '♠', '♥', '♣'];
    let iSuit = Math.floor(Math.random() * 4);
    return suit[iSuit];
};

const suit = randomSuit();