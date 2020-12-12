// Get modal
var modal = document.getElementById("myModal");

// Get button that open modal
var btn = document.getElementById("myBtn");

// Get element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Open modal when clicked 
btn.onclick = function() {
  modal.style.display = "block";
}

// When (x) is clicked, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When clicked anywhere outisde of modal, close the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}