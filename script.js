let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter)

function counterColor() {
    if (counter.innerHTML > '0') {
        counter.style.color = '#4caf50';
    } else if (counter.innerHTML === '0') {
        counter.style.color = 'white';
    } else if (counter.innerHTML < '0') {
        counter.style.color = 'red';
    }
}

function counterAnimate() {
    counter.animate([{
        opacity: '0.2'
    }, {
        opacity: '1.0'
    }], {
        duration: 500,
        fill: 'forwards'
    })
}

function incrementCounter() {
    count++;
    counter.innerHTML = count;
    counterColor();
    counterAnimate();
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    counterColor();
    counterAnimate();
}