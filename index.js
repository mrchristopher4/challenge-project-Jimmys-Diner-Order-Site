import {menuObj} from "./data.js";

const btnAddToCart = document.getElementById('btnAddToCart');
const btnCompleteOrder = document.getElementById('btnCompleteOrder');
const btnPay = document.getElementById('btnPay');

const cartObj = {};

/*btnAddToCart.addEventListener('click', function(e){
    When the btnAddToCart is clicked, I want to have the selected target element's 
    associated object property be selected and added as a new property to the empty
    cartObj object

    const foodItemId = e.target.id
    menu[foodItemId]
});*/

btnCompleteOrder.addEventListener('click', function() {
    modal.style.display ='block';
});

btnPay.addEventListener('click', function() {
    confirmMessage.style.display ='block';
    modal.style.display ='none';
    containerCheckout.style.display ='none';
});

function getMenuHtml(menuObj) {
    
    return menuObj.map(function(currentMenuItem) {
        
        const {name, ingredients, id, price, emoji} = menuObj;

        return `<div class="food-item">
                    <div class="img-food">${currentMenuItem.emoji}</div>
                    <div class="food-text">
                        <h3>${currentMenuItem.name}</h3>
                        <p>${currentMenuItem.ingredients}</p>
                        <p>$${currentMenuItem.price}</p>
                    </div>
                    <button class="btn-add-to-cart" id="btnAddToCart ${currentMenuItem.id}">+</button>
                </div>`;

    }).join('');

}

function getCartItemsHtml (cartObj) {
    return cartObj.map(function(currentCartItem) {
        
        const {name, id, price} = cartObj;

        const selectedItemsPricesArray = Object.values(cartObj[price]);
        const ItemsPriceTotal = selectedItemsPricesArray.reduce(function(accumulatorTotal, currentEl){
            return accumulatorTotal + currentEl;
        })

        return `<div class="checkout-item">
                    <p>${currentCartItem.name}</p>
                    <button>remove</button>
                    <p>$${currentCartItem.price}</p>
                </div>`;

    }).join('');
}

function getCartTotalHtml (cartObj) {    
        const {name, id, price} = cartObj;

        const selectedItemsPricesArray = Object.values(cartObj[price]);
        const ItemsPriceTotal = selectedItemsPricesArray.reduce(function(accumulatorTotal, currentEl) {
            return accumulatorTotal + currentEl;
        });

        return `<p>Total Price:</p>
                <p>$${ItemsPriceTotal}</p>`;
}

document.getElementById('menu').innerHTML = getMenuHtml(menuObj);
document.getElementById('itemsCheckoutDisplay').innerHTML = getCartItemsHtml(cartObj);
document.getElementById('checkoutTotal').innerHTML = getCartTotalHtml(cartObj);


