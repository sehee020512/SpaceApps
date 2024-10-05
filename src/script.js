document.getElementById('imageSelector').addEventListener('change', function() {
    const selectedValue = this.value; 
    const imageElement = document.getElementById('displayImage'); 
    imageElement.src = selectedValue; 
});
