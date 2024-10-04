`use strict`;


const inputRange = document.querySelector(`#range-inp`);
const price = document.querySelector(`.price`);
const rangeLine = document.querySelector(`.range-line`)


price.textContent = `$${inputRange.value}.00`;
rangeLine.style.width = `${(inputRange.value / 32) * 100}%`;



inputRange.addEventListener(`input`, () => {
    price.textContent = `$${inputRange.value}.00`;
    rangeLine.style.width = `${(inputRange.value / 32) * 100}%`

})