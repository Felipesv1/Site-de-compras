const dim = document.querySelector('.dim');
const sum = document.querySelector('.sum');
const num = document.querySelector('.num');
const btn = document.querySelector('.add');
const Cart = document.querySelector('.addcart');

  num.innerHTML = 1;

addCart = () => {
    if(num.innerHTML >= 1){
        alert('Added to cart');
        btn.setAttribute('disabled', 'disabled');
        btn.style.opacity = '0.2';
        num.innerHTML = 1;
    }else{
        btn.removeAttribute('disabled');
        num.innerHTML = 1;
    }
}
decrement = () => {
    if(num.innerHTML > 1){
        num.innerHTML = parseInt(num.innerHTML) - 1;
        btn.style.opacity = '1';
 }
}
increment = () => {
    if(num.innerHTML < 5){
           num.innerHTML = parseInt(num.innerHTML) + 1;
           btn.style.opacity = '1';
    }
}

dim.addEventListener('click',decrement);
sum.addEventListener('click',increment);
btn.addEventListener('click',addCart);
Cart.addEventListener('click',addCart);