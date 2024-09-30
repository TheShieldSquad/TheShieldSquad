function addCSS(filePath) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = filePath;
    document.head.appendChild(link);
}

function addJavaScript(filePath, callback) {
    const script = document.createElement('script');
    script.src = filePath;
    script.onload = callback;
    document.body.appendChild(script);
}

addCSS('styles.css');

addJavaScript('https://codes.myindianhub.com/backend/search-bot.js', () => {
    initApp();
});

function initApp() {
    console.log('Initializing the application...');
}

addCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
