function loadMainContent() {
    // Create an iframe to load the index.html
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'index.html';
    document.body.appendChild(iframe);

    iframe.onload = function() {
        // Redirect to index.html after the iframe has loaded
        window.location.href = 'main.html';
    };
}

// Start loading index.html in the iframe after the loader is displayed
window.onload = function() {
    setTimeout(loadMainContent, 3000); // Show loader for 3 seconds
};