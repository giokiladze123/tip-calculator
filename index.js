const buttons = document.querySelectorAll(".btn");
const middleInput = document.querySelector(".middle-input");
const headerInput = document.querySelector(".header-input");
const footerInput = document.querySelector(".footer-input");
const reset = document.querySelector(".reset");
const tipPrice = document.querySelector(".tip-price");
const totalPrice = document.querySelector(".total-price");
const error = document.querySelector(".error")
let percent = 0;

function calculate() {
  let tip = headerInput.value * percent / 100;
  let tipPerPerson = tip / footerInput.value;
  tipPrice.textContent = "$" + tipPerPerson.toFixed(2);
  let totalAmount = +headerInput.value + tip;
  let totalPerPerson = totalAmount / footerInput.value;
  totalPrice.textContent = "$" + totalPerPerson.toFixed(2)
}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click",function(event){
    percent = parseInt(event.target.textContent)
    calculate()
  })
  
}

reset.addEventListener("click",function(){
  headerInput.value = "0"
  middleInput.value = "0"
  footerInput.value = "0"
  tipPrice.textContent = "$0.00"
  totalPrice.textContent = "$0.00"
})



headerInput.addEventListener("input",calculate);

middleInput.addEventListener("input",function(){
  percent = parseInt(middleInput.value);
  calculate();
})

footerInput.addEventListener("input",function(){
  calculate()
  if (footerInput.value === "0") {
    error.style.display = "block"
  } else {
    error.style.display = "none"
  }
})