`use strict`;


const inputRange = document.querySelector(`#range-inp`);
const price = document.querySelector(`.price`);
const rangeLine = document.querySelector(`.range-line`);

const billingBtnDiv = document.querySelector(`.billing-btn--div`);
const billingBtn = document.querySelector(`.billing-btn`)





/**
 * Updates the price text content and range line width based on the input range value.
 */
price.textContent = `$${inputRange.value}.00`;
rangeLine.style.width = `${(inputRange.value / 32) * 100}%`;



/**
 * Adds an event listener to an input range element that updates the price text content
 * and adjusts the width of a range line based on the input value.
 */
inputRange.addEventListener(`input`, () => {
    price.textContent = `$${inputRange.value}.00`;
    rangeLine.style.width = `${(inputRange.value / 32) * 100}%`

})


/**
 * Adds a click event listener to the billing button div that toggles the 'active' class on the billing button.
 */
billingBtnDiv.addEventListener(`click`, () => {
    billingBtn.classList.toggle(`active`);
})


