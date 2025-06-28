document.addEventListener("DOMContentLoaded", () => {
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const trashButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");
  const totalPrice = document.querySelector(".total");

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const quantSpan = btn.nextElementSibling;
      let quant = parseInt(quantSpan.textContent);
      quant++;
      quantSpan.textContent = quant;
      Total();
    });
  });

  minusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantSpan = btn.previousElementSibling;
      let quantity = parseInt(quantSpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantSpan.textContent = quantity;
      }
      Total();
    });
  });

  trashButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      if (card) {
        card.remove();
      }
      Total();
    });
  });

  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.style.color= "red" ;
    });
  });



  function Total() {
    let total = 0;
    document.querySelectorAll(".card").forEach((card) => {
      const priceText = card.querySelector(".unit-price").textContent;
      const price = parseInt(priceText);
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      total += price * quantity;
    });
    totalPrice.textContent = `${total} $`;


    
  }
});


