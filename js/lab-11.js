   //Const for my variables
    const list = document.querySelector('ul');  
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    //Creating onClick function for the button
    button.onclick = function() {
    let myItem = input.value;
    input.value = '';

    //Creating DOM elements
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;

    //Creating Onclick for delete button
    listBtn.onclick = function() {
        list.removeChild(listItem);
    }

    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    //focus method in order for the input element
    input.focus();
    }