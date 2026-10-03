const imageInput = document.querySelector('#clothing-image');
const imagePreview = document.querySelector('#image-preview');
let previewUrl;

imageInput.addEventListener('change', () => {

    const selectedImage = imageInput.files[0];

    imagePreview.replaceChildren();

    if (!selectedImage) {
        imagePreview.innerHTML = '<span>INSIRA A IMAGEM</span>';
        return;
    }

    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
    }

    const previewImage = document.createElement('img');
    previewUrl = URL.createObjectURL(selectedImage);
    previewImage.src = previewUrl;
    previewImage.alt = `Prévia de ${selectedImage.name}`;
    imagePreview.appendChild(previewImage);
});