/**************************************************************************
 * Basic color picker exercise
 */

let picker1 = document.querySelector('.picker1');
let picker2 = document.querySelector('.picker2');
let h3Title = document.querySelector('.h3Title');
let bgColor = document.querySelector('.bgColor');

function changeBgColor() {
  console.log(picker1.value);
  console.log(picker2.value);
  bgColor.style.background = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;
  h3Title.textContent = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;
}

picker1.addEventListener('input', changeBgColor);

picker2.addEventListener('input', changeBgColor);

h3Title.textContent = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;


