var allProducts = document.querySelectorAll(".product");
var content = document.querySelector("#content");
var button = document.getElementById("cart");
var totalPrice = 0;
var totalDisplay = document.getElementById("total");
allProducts.forEach(function (item) {
    item.onclick = function () {
        totalPrice += +item.getAttribute("price");
        content.innerHTML += item.querySelector("h3").textContent + " / ";
        if (content.innerHTML !== "") {
            button.style.display = "block";
        }
    };
});
button.onclick = function () {
    totalDisplay.innerHTML = "Total Price: $" + totalPrice;
};