const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e){
    alert('Submitted the form');
    console.log(e);
    e.preventDefault();
})