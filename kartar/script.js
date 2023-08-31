window.onload = function () {
    document.getElementById("year").innerHTML = new Date().getFullYear();
};
function tst() { console.log('foo'); };
var exampleModal = document.getElementById('pictureModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var image = event.relatedTarget
    // Extract info from data-bs-* attributes
    var id = image.getAttribute('data-bs-id')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var img = exampleModal.querySelector('.modal-body img')
    var download = exampleModal.querySelector('.modal-footer a')
    img.src = "https://drive.google.com/uc?export=view&id=" + id
    download.href = "https://drive.google.com/uc?export=download&id=" + id
})