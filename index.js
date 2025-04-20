const products = [
    {
      name: "Boho Beaded Bracelet",
      image: "beadsflower.jpg",
      price: "8.00 MAD"
    },
    {
      name: "cherry braclets",
      image: "braclets.jpg",
      price: "5.00 MAD"
    },
  ];
  
  const productList = document.getElementById('productList');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.price}</p>
    `;
    productList.appendChild(card);
  });
  
  function scrollToShop() {
    document.getElementById("shop").scrollIntoView({ behavior: 'smooth' });
  }
  
  document.getElementById("year").textContent = new Date().getFullYear();
  
