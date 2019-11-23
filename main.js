
let select = document.getElementById.bind(document);
let inputValue = select('myText');
let itemsArr = new Array();
let p = select('pos');
let btn = select('btn');
btn.addEventListener('click', insertHTML());

function insertHTML(e){
    if(inputValue.value === ' '){
        alert('Enter a valid data please!');
    }else{
        p.insertAdjacentHTML('beforeend', 
        `<li id='item' ><input type="checkbox" id="check">
        <span>${inputValue.value}</span></li>`)
    }
}