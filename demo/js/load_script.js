window.onload = function() {
    setTimeout(function() {
        document.getElementById('buffering').style.display = 'none';
        document.getElementById('index').style.display = 'block';
        document.getElementById('themeStylesheet').setAttribute('href', 'css/main.css');
    }, 3000);
};
