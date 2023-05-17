// Code cho chức năng thêm sản phẩm vào giỏ hàng
let addToCartButtons = document.querySelectorAll('.btn-primary');

addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Sản phẩm đã được thêm vào giỏ hàng.');
    });
});
