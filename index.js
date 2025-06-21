const display = document.getElementById('display');
let shouldResetDisplay = false; 

function resizeDisplayFont() {
    const maxFontSize = 80; 
    const minFontSize = 20;
    let fontSize = maxFontSize;

    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
        fontSize -= 5;
        display.style.fontSize = fontSize + "px";
    }
}

function appendToDisplay(input) {
    if (shouldResetDisplay) {
        if (!isNaN(input) || input === '.') {
            display.value = '';
        }
        shouldResetDisplay = false;
    }

    display.value += input;
    resizeDisplayFont();
}

function clearDisplay() {
    display.value = '';
    shouldResetDisplay = false;
    resizeDisplayFont();
}

function calculate() {
    try {
        display.value = eval(display.value);   
        resizeDisplayFont();
        shouldResetDisplay = true; 
    } catch {
        display.value = "Error";
        resizeDisplayFont();
        shouldResetDisplay = true;
    }
}


