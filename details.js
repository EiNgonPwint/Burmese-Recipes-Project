// Get the detailsDiv element
const detailsDiv = document.getElementById("details-div");

// Get the product ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const productId = urlParams.get("id");
console.log(productId);
// Find the product with the given ID
const selectedProduct = products.find((product) => product.id == productId);

// Display details of the selected product
detailsDiv.innerHTML = `
<div class='container'>
<div class="row mt-5">
  <div class="col-12">
    <div class="row">
    <div class='col-10 col-md-6 m-auto col col-lg-4 m-md-0'>
      <img class='w-100 card border-4 shadow-sm' src="${selectedProduct.src}" alt="${selectedProduct.Name}"/>
    </div>
    
    <div class='col-10 col-md-6 m-auto m-md-0 mt-4'>
       <div>
        <h1 class="text-success fs-2 fw-bold">Menu Name</h1>
        <p class='fs-6 text-white'> ${selectedProduct.Name}</p>
       </div>
       <div>
        <h1 class="text-success fs-2 fw-bold">Ingredientss</h1>
        <p class='fs-6 text-white'>${selectedProduct.Ingredients}</p>
       </div>
       <div>
        <h1 class="text-success fs-2 fw-bold">How to cook?</h1>
        <p class='fs-6 text-white'>${selectedProduct.CookingInstructions}</p>
       </div>
       <div class="d-grid gap-2 d-md-flex justify-content-md-end">
         
         <a href="index.html" class="btn btn-success " tabindex="-1" role="button" aria-disabled="true">Back</a>
         
       </div>
    </div>
    </div>
  </div>
</div>
</div>
`;





    