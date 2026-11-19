// js/bill.js: Split the Bill page (uses Rounding from lib/rounding.js)

const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calcButton = document.getElementById("calc");
const message = document.getElementById("message");

const receipt = {
  bill: document.getElementById("r-bill"),
  tipLabel: document.getElementById("r-tip-label"),
  tip: document.getElementById("r-tip"),
  total: document.getElementById("r-total"),
  each: document.getElementById("r-each"),
};

function formatRM(amount) {
  return "RM " + Number(amount).toFixed(2);
}

function toNearest5sen(amount) {
  return (Math.round(amount * 20) / 20).toFixed(2);
}

function calculate() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipSelect.value);
  const people = Number(peopleInput.value);

  if (billInput.value === "" || peopleInput.value === "") {
    message.textContent = "Enter the bill amount and the number of people.";
    return;
  }
  message.textContent = "";

  const tipAmount = (bill * tipPercent) / 100;
  const total = toNearest5sen(bill + tipAmount);
  const perPerson = total / people;

  receipt.bill.textContent = formatRM(bill);
  receipt.tipLabel.textContent = `Tip (${tipPercent}%)`;
  receipt.tip.textContent = formatRM(tipAmount);
  receipt.total.textContent = formatRM(total);
  receipt.each.textContent = formatRM(perPerson);
}

calcButton.addEventListener("click", calculate);
