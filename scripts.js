let screen = document.getElementById('screen');
let scientificMode = false;
let darkMode = false;

document.getElementById('enter-calculator').addEventListener('click', () => {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('calculator').classList.remove('hidden');
});

document.getElementById('scientific-mode-toggle').addEventListener('click', () => {
    scientificMode = !scientificMode;
    document.getElementById('scientific-buttons').classList.toggle('hidden', !scientificMode);
    if (scientificMode) {
        document.getElementById('scientific-mode-toggle').innerText = 'Standard Mode';
    } else {
        document.getElementById('scientific-mode-toggle').innerText = 'Scientific Mode';
    }
});

document.getElementById('theme-switcher').addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    document.getElementById('theme-switcher').innerText = darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme';
});

function appendValue(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}