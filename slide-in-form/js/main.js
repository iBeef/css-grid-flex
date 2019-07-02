const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('rightPanelActive');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('rightPanelActive');
});