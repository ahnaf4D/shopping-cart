const increaseDecreaseOne = document.getElementById('increase-decrase-1');
const itemIncrease = document.getElementById('item-increase');
const itemDecrease = document.getElementById('item-decrease');
itemIncrease.addEventListener('click', function (event) {
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseOneValueNum = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOneValueNum += 1;
    increaseDecreaseOne.value = increaseDecreaseOneValueNum;
})
itemDecrease.addEventListener('click', function () {
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseOneValueNum = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOneValueNum -= 1;
    increaseDecreaseOne.value = increaseDecreaseOneValueNum;
})