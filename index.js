const display = document.getElementById('display');
function resizeDisplayFont() {
    const maxFontSize = 80; 
    const minFontSize = 20;
    const display = document.getElementById('display');
    let fontSize = maxFontSize;

    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > display.clientWidth && fontSize > minFontSize) {
        fontSize -= 20;
        display.style.fontSize = fontSize + "px";
    }
}

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try {
        display.value = eval(display.value);   
        resizeDisplayFont();

        setTimeout(() => {
            clearDisplay(); 
        },10000); 
    } catch {
        display.value = "Error";
        resizeDisplayFont();
    }
}


