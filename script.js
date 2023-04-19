
var modal = document.getElementById("myModal");
var btn = document.getElementById("hambargerIcon");
var span = document.getElementsByClassName("cancelBtn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
    let target1 = document.getElementById("hambargerIcon");
    target1.classList.remove('displayNone')
}

