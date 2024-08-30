// Manejo del modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejo de la vista previa de la imagen
const productImageInput = document.getElementById('productImage');
const imagePreview = document.getElementById('imagePreview');

productImageInput.onchange = function() {
    const file = productImageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Vista previa de la imagen">`;
        };
        reader.readAsDataURL(file);
    }
};

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productImage = document.getElementById('productImage').files[0];

    const reader = new FileReader();
    
    reader.onload = function(e) {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        const productImg = document.createElement('img');
        productImg.src = e.target.result;

        const productInfo = document.createElement('div');
        
        const productTitle = document.createElement('h3');
        productTitle.textContent = productName;

        const productPriceTag = document.createElement('p');
        productPriceTag.textContent = `Precio: $${productPrice}`;

        productInfo.appendChild(productTitle);
        productInfo.appendChild(productPriceTag);

        productItem.appendChild(productImg);
        productItem.appendChild(productInfo);

        document.getElementById('profile').appendChild(productItem);

        // Cerrar el modal y limpiar el formulario
        modal.style.display = "none";
        document.getElementById('productForm').reset();
        imagePreview.innerHTML = '';
    };

    reader.readAsDataURL(productImage);
});
