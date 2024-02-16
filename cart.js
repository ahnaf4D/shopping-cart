const increaseDecreaseOne = document.getElementById('increase-decrase-1');
const itemIncrease = document.getElementById('item-increase');
let count = 0;
itemIncrease.addEventListener('click', function (event) {
    count++;
    let increaseDecreaseOneValue = increaseDecreaseOne.value;
    let increaseDecreaseNums = parseInt(increaseDecreaseOneValue);
    increaseDecreaseOneValue = count;
})