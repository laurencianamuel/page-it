document.querySelector('.cartbtn').addEventListener('click', () => {
    const book = {
      title: "The 24th Hour",
      author: "James Patterson & Maxine Paetro",
      price: 43.2,
      quantity: parseInt(document.querySelector('.quantity-field').value),
      image: "../images/the24thhour.jpg"
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Book added to cart!");
  });