const modal = document.getElementById('myModal');
const btn = document.getElementById('hambargerIcon');
const span = document.getElementsByClassName('cancelBtn')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
  let target1 = document.getElementById('hambargerIcon');
  target1.classList.remove('displayNone');
};