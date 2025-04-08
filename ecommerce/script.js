document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 2", price: 59.99},
        {id: 3, name: "Product 3", price: 79.99},
    ];

    const cart = JSON.parse(localStorage.getItem('product')) || [];

    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartTotal = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // displaying product

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id='${product.id}'>Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            // console.log(product);
            addToCart(product);
        }
    });

    function addToCart(product) {
        cart.push(product);
        console.log(cart);
        localStorage.setItem("product", JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        cartItems.innerText = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotal.classList.remove('hidden');

            cart.forEach((item, index) => {
                totalPrice += item.price;

                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                    <button data-id='${item.id}'>Remove</button>
                `;
                cartItems.appendChild(cartItem);

                cartItem.querySelector('button').addEventListener('click', (e) => {
                    if (e.target.tagName === "BUTTON") {
                        e.stopPropagation();
                        const removeId = parseInt(e.target.getAttribute('data-id'));
                        cartItem.remove();
                        cart.splice(cart.findIndex(r => r.id === removeId), 1);
                        console.log(cart);
                        localStorage.setItem("product", JSON.stringify(cart));
                        renderCart();
                    }
                });

                totalPriceDisplay.textContent = `$${Math.round(totalPrice)}`;
            });

        } else {
            emptyCartMessage.classList.remove('hidden');
            totalPriceDisplay.textContent = `$0.00`;
        }
    }

    renderCart();

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;
        localStorage.removeItem('product');
        alert('Checkout Successfull!');
        renderCart();
    });
});