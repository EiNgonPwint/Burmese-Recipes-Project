// Include your product.js file here

let productDiv = document.getElementById("product-div");
let searchInput = document.getElementById("searchInput");
function renderProducts() {
    products.forEach((product) => {
        //console.log('Product ID:', product.id);
      productDiv.innerHTML += `
        <div class="col-12 col-lg-4 mb-4 ">
          <div class="card bg-success-subtle">
          <a href="details.html?id=${product.id}">
              <div class="card-body">
                <img src="${product.src}" class="w-100"  />
                <hr />
                <p class="fs-5 fw-bold custom-text-color">${product.Name}</p>
              </div>
            </a>
          </div>
        </div>`;
    });
  }
  

renderProducts();

searchInput.addEventListener("input",handleSearch);
// Function to handle the search
function handleSearch() {
    // Get the search query from the input field
    let query = searchInput.value.toLowerCase();
  
    // Filter products based on the search query
   let filteredProducts = products.filter(
      (product) =>
        product.Name.toLowerCase().includes(query) ||
        product.Ingredients.toLowerCase().includes(query) ||
        product.CookingInstructions.toLowerCase().includes(query)
    );
  
    // Clear both productDiv and details before rendering the filtered products
    productDiv.innerHTML = '';
    //details.innerHTML = '';
  
    // Render the filtered products
    filteredProducts.forEach((product) => {
      productDiv.innerHTML += `
        <div class="col-12 col-lg-4 mb-4">
          <div class="card">
          <a href="details.html?id=${product.id}">
              <div class="card-body">
                <img src="${product.src}" class="w-100" />
                <hr />
                <p class="fs-5 fw-bold custom-text-color">${product.Name}</p>
              </div>
            </a>
          </div>
        </div>`;
    });
  }
  handleSearch();
// rest of the code
