const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const input = document.getElementById('input');
const output = document.getElementById('output');

const conversionRate = document.getElementById('conversion-rate');
const swap = document.getElementById('swap');


//Functions
//Show and calculate rate
const calculateValue = () =>{
    const currencyone = currencyOne.value;
    const currencytwo = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyone}`)
    .then(res => res.json())
    .then(data => {
       const rate = data.rates[currencytwo].toFixed(2);
        conversionRate.innerText = `1 ${currencyone} = ${rate} ${currencytwo}`;

        output.value = (input.value * rate).toFixed(2);
    });
}

//Swapping
const swapElements = () =>{
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value=temp;
    calculateValue();
}

// const showCurrentRate = () =>{
//     conversionRate.innerText = `1 ${currencyone} = ${rate} ${currencytwo}`;
// }

//Event listeners
currencyOne.addEventListener('change', calculateValue);
input.addEventListener('input', calculateValue);
currencyTwo.addEventListener('change', calculateValue);
output.addEventListener('input', calculateValue);

swap.addEventListener('click', swapElements);

// rate.addEventListener('onload', showCurrentRate);