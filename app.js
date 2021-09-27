const buttonEl = document.querySelector('#btn');
const textInputEl = document.querySelector('[name="text-input"]');
buttonEl.addEventListener('click', onClick);
const textEl = document.querySelector('#container');

function onClick() {
    console.log("clicked");
    textEl.textContent = textInputEl.value;
}