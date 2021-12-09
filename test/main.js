// Get the modal


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var button = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var img = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
button.onclick = function() {
  modal.style.display = "block";
}
button.onclick = function() {
  button.style.display = "none"
  modal.style.display = "block"
  img.style.display = "block"
}
// When the user clicks on <span> (x), close the modal
img.onclick = function() {
  modal.style.display = "none"
}
modal.onclick = function() {
  button.style.display = "block"
  img.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}