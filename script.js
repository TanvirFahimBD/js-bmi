//select dom element
let weightEl = document.getElementById('weightInput');
let heightEl = document.getElementById('heightInput');
let resultEl = document.getElementById('result');
let calculateBtn = document.getElementById('calculateBtn');
let form = document.querySelector('form');

calculateBtn.addEventListener('click', calculateBmi)

function calculateBmi(e) {
    e.preventDefault();
    let weight = parseFloat(weightEl.value);
    let height = parseFloat(heightEl.value);
    let BMI = parseFloat(weight / (height * height));
    resultEl.innerHTML = `Your BMI result: ${BMI}`;
    form.reset();
}


