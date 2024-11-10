function append(character) {
    const display = document.getElementById('display');
    display.value += character;
    animateButtonPress();
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
    animateButtonPress();
}

function animateButtonPress() {
    const display = document.getElementById('display');
    display.classList.add('button-pressed');
    setTimeout(() => {
        display.classList.remove('button-pressed');
    }, 150);
}
