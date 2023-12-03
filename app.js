const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
    input.addEventListener('change', ({target}) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    });
}


// creditCardInput.addEventListener('input', (e) => {
//     console.log("credit card changed", e);
//     formData['cc'] = e.target.value;
// })

// veggieSelect.addEventListener('input', (e) => {
//     console.log("veggie changed", e);
//     formData['veggie'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('checkbox', e);
//     formData['agreeToTerms'] = e.target.checked;
// })

// form.addEventListener('submit', function(e){
//     alert('Submitted the form');
//     console.log('cc', creditCardInput.value);
//     console.log('terms', termsCheckbox.checked);
//     console.log('veggie', veggieSelect.value);
//     e.preventDefault();
// })