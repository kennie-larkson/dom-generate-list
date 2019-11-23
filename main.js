
let select = document.getElementById.bind(document);
let create = document.createElement.bind(document);
let inputValue = select('myText');
let itemsArr = new Array();
let p = select('pos');
//let list = select('item');
p.style.listStyle = 'none';

//let btn = select('btn');
//btn.addEventListener('click', insertHTML())

function insertHTML(){
    if(inputValue.value === ''){
        alert('Enter a valid data please!');
    }else{
        p.insertAdjacentHTML('beforeend', 
        `<li id='item' ><input type="checkbox" id="check">
        <span>${inputValue.value}</span><span><button type="button">Remove</button></span></li>`);
    }
    itemsArr.push(inputValue.value);
}