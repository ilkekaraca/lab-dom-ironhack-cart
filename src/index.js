// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  console.log(Number(price.innerText), quantity.value);
  let subtotal = price.innerText * quantity.value;
  console.log(subtotal);
  product.querySelector(".subtotal span").textContent = subtotal;

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // end of test
  let sum = 0;

  // ITERATION 2
  //... your code goes here
  document
    .querySelectorAll(".product")
    .forEach((singleProduct) => (sum += updateSubtotal(singleProduct)));

  // ITERATION 3
  //... your code goes here
  document.querySelector("#total-value span").textContent = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target.parentNode.parentNode);
  const line = target.parentNode.parentNode;
  line.parentNode.removeChild(line);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
  document
    .querySelectorAll(".btn.btn-remove")
    .forEach((removeButton) =>
      removeButton.addEventListener("click", removeProduct)
    );

  document.querySelector("#create").addEventListener("click", createProduct);
});
