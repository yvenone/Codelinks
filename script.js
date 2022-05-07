let btnAdd = document.querySelector('button');
let input = document.querySelector('input');
let select = document.querySelector('select');

btnAdd.addEventListener('click', () =>{
    let option = document.createElement('option');
    option.value = input.value.toLowerCase();
    option.text = input.value;

    let currentIndex = select.options[select.selectedIndex];
    select.add(option, currentIndex);
    input.value = '';
});
