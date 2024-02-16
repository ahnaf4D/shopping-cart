const increaseDecreaseOne = document.getElementById('increase-decrase-1');
const itemIncrease = document.getElementById('item-increase');
const itemDecrease = document.getElementById('item-decrease');
let iPhonePrice = document.getElementById('iPhone-price');
itemIncrease.addEventListener('click', function (event) {
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseOneValueNum = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOneValueNum += 1;
    increaseDecreaseOne.value = increaseDecreaseOneValueNum;
    let iPhonePriceValue = parseInt(iPhonePrice.innerText);
    const totalCalculation = increaseDecreaseOneValueNum * iPhonePriceValue;
    console.log(totalCalculation);
    iPhonePrice.innerText = totalCalculation;
})
itemDecrease.addEventListener('click', function (event) {
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseOneValueNum = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOneValueNum -= 1;
    increaseDecreaseOne.value = increaseDecreaseOneValueNum;
    let iPhonePriceValue = parseInt(iPhonePrice.innerText);
    console.log(iPhonePriceValue);
    const totalCalculation = increaseDecreaseOneValueNum * iPhonePriceValue;
    console.log(totalCalculation);
    const totalCalculationDecrease = totalCalculation - 1219;
    iPhonePrice.innerText = totalCalculationDecrease;
})