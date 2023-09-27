

console.log('Hello, World!')


let BurgerBtm = document.querySelector('.burger-btm');
let burger = document.querySelector('.burger');

BurgerBtm.addEventListener('click', function(){
    BurgerBtm.classList.toggle('active');
    burger.classList.toggle('active');
}) 
alert("Вы любите аниме?")