let overLay = document.getElementById('overlay');

let openModal = document.getElementById('open-modal');
openModal.addEventListener('click', function(){
    overLay.style.display = 'block';
})

let closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function(){
    overLay.style.display = 'none';
})