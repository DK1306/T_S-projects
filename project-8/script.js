const products = [
  { id: 1, name: "T-Shirt", category: "Clothing", price: 299, rating: 4.5, image: "https://placehold.co/200x200?text=T-Shirt" },
  { id: 2, name: "Sneakers", category: "Footwear", price: 1499, rating: 4.7, image: "https://placehold.co/200x200?text=Sneakers" },
  { id: 3, name: "Watch", category: "Accessories", price: 1999, rating: 4.2, image: "https://placehold.co/200x200?text=Watch" },
  { id: 4, name: "Jeans", category: "Clothing", price: 999, rating: 4.3, image: "https://placehold.co/200x200?text=Jeans" },
  { id: 5, name: "Bag", category: "Accessories", price: 1299, rating: 4.6, image: "https://placehold.co/200x200?text=Bag" }
];
const productContainer = document.getElementById("product-container");
function displayProducts(list) {
  productContainer.innerHTML = ""; 
  list.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: Rs.${product.price}</p>
      <p>Rating: ${product.rating} / 5</p>
      <button onclick="hc()">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
}
function hc()
{
    alert("product is added to the cart!!!");
}
displayProducts(products);