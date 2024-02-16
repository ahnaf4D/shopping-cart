const addToCart1 = document.getElementById('add-item-1');
let count = 0;
addToCart1.addEventListener('click', function () {
    count++;
    // console.log(count)
    const productTitle = document.getElementById('pd-1-title').innerText;
    const productPrice = document.getElementById('shoe-price').innerText;
    // console.log(productPrice);
    let itemCount = document.getElementById('item-count');
    let itemCountText = itemCount.value;
    let itemCountValue = parseInt(itemCountText);
    itemCountValue = count;
    console.log(itemCountValue); // item increase
})