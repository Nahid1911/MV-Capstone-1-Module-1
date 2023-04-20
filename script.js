const modal = document.getElementById('myModal');
const btn = document.getElementById('hambargerIcon');
const span = document.getElementsByClassName('cancelBtn')[0];

function disBlock() {
  modal.style.display = 'block';
}

btn.onclick = disBlock;

function disNone() {
  modal.style.display = 'none';
}
span.onclick = disNone;

const speaker = document.getElementById('speakersContainer');
speaker.innerHTML = `
      <div class="featureSpeakerh3">
        <h3>Featured Speakers</h3>
        <hr>
      </div>
      <div class="allSpeaker flex">
        <div class="speaker flex">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-1</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-2</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex hiddenSpeaker">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-3</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex hiddenSpeaker">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-4</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex hiddenSpeaker">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-5</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex  hiddenSpeaker">
          <div class="profileImgDiv">
            <img class="cheseTable" src="assets/chesse_background.png" alt="">
            <img class ="portrait" src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-6</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div id="showMore" class="displayMoreSpeaker">
          <P>MORE</P>
          <img src="assets/SeeMoreSpeakerSign.svg" alt="" srcset="">
        </div>
      </div>
`;

const loadMoreSpeaker = document.getElementById('showMore');

function moreSpeaker() {
  let target = document.querySelectorAll('.hiddenSpeaker');
  for (let i = 0; i < target.length; i += 1){
  target[i].classList.remove('hiddenSpeaker');
  }
}

loadMoreSpeaker.onclick = moreSpeaker;