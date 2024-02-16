const increaseDecreaseOne = document.getElementById('increase-decrase-1');
const itemIncrease = document.getElementById('item-increase');
itemIncrease.addEventListener('click', function (event) {
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseNums = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOne.value = increaseDecreaseNums + 1;

})