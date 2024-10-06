`use strict`;


const inputRange = document.querySelector(`#range-inp`);
const price = document.querySelector(`.price`);
const rangeLine = document.querySelector(`.range-line`);

const billingBtnDiv = document.querySelector(`.billing-btn--div`);
const billingBtn = document.querySelector(`.billing-btn`);
const monthYear = document.querySelector(`.m-y`);





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

    if(!billingBtn.classList.contains(`active`)) {
        // monthYear.textContent = `/ month`
        price.textContent = `$${inputRange.value}.00`;
        rangeLine.style.width = `${(inputRange.value / 32) * 100}%`
    } else {
        // monthYear.textContent = `/ year`
        price.textContent = `$${inputRange.value - ((25 / 100) * inputRange.value)}`;
        rangeLine.style.width = `${(inputRange.value / 32) * 100}%`
    }


})


/**
 * Adds a click event listener to the billing button div that toggles the 'active' class on the billing button.
 */
billingBtnDiv.addEventListener(`click`, () => {
    billingBtn.classList.toggle(`active`);

    /**
     * Updates the display of pricing information based on the active state of the billing button.
     * If the billing button is not active, the price is displayed per month.
     * If the billing button is active, the price is displayed per year with a 25% discount.
     */
    if(!billingBtn.classList.contains(`active`)) {
        monthYear.textContent = `/ month`;
        price.textContent = `$${inputRange.value}.00`;
    } else {
        monthYear.textContent = `/ year`;
        price.textContent = `$${inputRange.value - ((25 / 100) * inputRange.value)}`;
    }
    
})






