const inputBar = document.querySelector('#todo-text');
const submitButton = document.querySelector('.submit-button');
const todoSection = document.querySelector('.todos');
const errorArea = document.querySelector('#error-area');

submitButton.addEventListener('click', onSubmit);

function onSubmit(e) {
    if (inputBar.value === '') {
        errorArea.innerText = 'Please fill out field ^'
        errorArea.className = 'error-on';
        setTimeout(function() {
            errorArea.innerText = '';
            errorArea.className = '';
        }, 3000);
    } else {
        const li = document.createElement('li');
        li.classList = 'item';
        li.innerHTML = `<div><button>X</button>${inputBar.value}</div>`;
        todoSection.appendChild(li);
        li.querySelector('div').querySelector('button').addEventListener('click', (e) => li.remove());
        inputBar.value = '';
    }
}