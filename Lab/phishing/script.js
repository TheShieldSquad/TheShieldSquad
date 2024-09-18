document.getElementById('phishingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const terminalOutput = `
    User Name: ${username}
    Password : ${password}
    `;

    document.getElementById('terminal').textContent = terminalOutput;
});
