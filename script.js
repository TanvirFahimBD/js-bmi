// //select dom element
let weightEl = document.getElementById('weightInput');
let heightEl = document.getElementById('heightInput');
let resultEl = document.getElementById('result');
let calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', calculateBmi)

function calculateBmi(e) {
    e.preventDefault();
    let weight = parseFloat(weightEl.value);
    let height = parseFloat(heightEl.value);
    let BMI = parseFloat(weight / (height * height));
    // 1.524 + 0.1016
    resultEl.innerHTML = BMI;
}
