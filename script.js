let button = document.getElementById("hambargerIcon");
button.addEventListener('click', function(){

    let diVMobileMenue = document.createElement('dev');
    diVMobileMenue.id = 'mobileMenue';
    diVMobileMenue.innerHTML = `
    <div class='mobileMenueDiv'>
        <img id='cancelBtn' class='cancelBtn' src='assets/Repeat_background.svg'>
        <ul class='mobileMenueUl'>
            <li>About</li>
            <li>Program</li>
            <li>Join</li>
            <li>Sponsor</li>
            <li>News</li>
        </ul>
    </div>
    `
    let target1 = document.getElementById("hambargerIcon");
    target1.classList.add('displayNone')
    let target = document.getElementById('mainContainer');
    target.insertBefore(diVMobileMenue, target.firstChild);
});

let cancelButton = document.getElementById('cancelBtn');
console.log(id);
cancelButton.addEventListener('click', function (){
    if(document.getElementById('mobileMenue').classList.contains('displayNone') === true){
        document.getElementById('mobileMenue').classList.remove('displayNone');
    }
})
