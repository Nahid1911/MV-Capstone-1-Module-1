const modal = document.getElementById('myModal');
const btn = document.getElementById('hambargerIcon');
const span = document.getElementsByClassName('cancelBtn')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};


const speaker = document.getElementById('speakersContainer');
speaker.innerHTML = `
      <div class="featureSpeakerh3">
        <h3>Featured Speakers</h3>
        <hr>
      </div>
      <div class="allSpeaker flex">
        <div class="speaker flex">
          <div class="profileImgDiv">
            <img src="assets/profilepic.jpg" alt="speakerImage">
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
            <img src="assets/profilepic.jpg" alt="speakerImage">
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
            <img src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name hiddenSpeaker">Speaker-3</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex hiddenSpeaker">
          <div class="profileImgDiv">
            <img src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name hiddenSpeaker">Speaker-4</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex hiddenSpeaker">
          <div class="profileImgDiv">
            <img src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name hiddenSpeaker">Speaker-5</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="speaker flex  hiddenSpeaker">
          <div class="profileImgDiv">
            <img src="assets/profilepic.jpg" alt="speakerImage">
          </div>
          <div class="otherProElement">
            <h3 class="name">Speaker-6</h3>
            <p class="currentPosition">Designation</p>
            <hr>
            <p class="bio">Past Experiance and Achivements</p>
          </div>
        </div>
        <div class="displayMoreSpeaker">
          <P>MORE</P>
          <img src="assets/SeeMoreSpeakerSign.svg" alt="" srcset="">
        </div>
      </div>
`