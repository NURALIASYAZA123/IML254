let themeIndex = 0;
const themes = ['purple-theme','green-theme'];

function switchTheme() {
    // Remove all theme classes
    document.body.classList.remove(...themes);
    // Add the next theme class
    document.body.classList.add(themes[themeIndex]);
    // Update the theme index
    themeIndex = (themeIndex + 1) % themes.length;
}


