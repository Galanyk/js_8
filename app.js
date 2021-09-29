const buttonEl = document.querySelector('#btn');
const inputEl = document.querySelector('#input');
const listEl = document.querySelector('#list');

buttonEl.addEventListener('click', onClick);

function onClick() {
    const data = inputEl.value.trim();
    if (data) {
        const textEl = document.createElement('li');
        textEl.textContent = data;
        listEl.append(textEl);
        inputEl.value = '';
    }else{
        inputEl.value = '';
        alert("Wrong operation")
    }
}