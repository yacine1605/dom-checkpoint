let removecartitenButtons = document.getElementsByClassName("btn-danger");
console.log(removecartitenButtons);
for (let i = 0; i < removecartitenButtons.length; i++) {
    let button = removecartitenButtons[i];
    button.addEventListener("click", () => {
        let buttonCliked = event.target
        buttonCliked.parentElement.remove();

    })
}
updateCartTotal = () => {
    let cartIntemContainer = document.querySelector("cart-itmes ")
    let cartrows = cartIntemContainer.getElementsByClassName("cart-row ")
    let total = 0
    for (let i = 0; i < cartrows.length; i++) {
        let cartrows = cartrows[i]
        let priceelement = cartrows.getElementsByClassName('cart-price')
        let quantityelenmet = cartrows.querySelector('cart-quantity')
        let price = parseFloat(priceelement.inneText.replace("$", ""))
        let quantity = quantityelenmet.value
        total = total + (price * quantity)


    }
    document.querySelector("cart-total-price")[0].inneText = "$" + total
}

quantityChange = () => {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {

        input.value = 1

    }
    updateCartTotal()
}
let quantityinputs = document.getElementsByClassName('cart-quantity-input')
for (let i = 0; i < quantityinputs.length; i++) {
    let input = quantityinputs[i]
    input.addEventListener('change', quantityChange)
}




