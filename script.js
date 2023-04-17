// for mobile menu appear and disappear
const mobileMenu = document.getElementById('mobile-menu');

function displayFunction() {
  const menuList = document.getElementById('nav-menu');
  if (menuList.classList.contains('menue-button-pressed') === false) {
    menuList.classList.add('menue-button-pressed');
  } else { menuList.classList.remove('menue-button-pressed'); }
  const menuIcon = document.getElementById('mobile-menu');
  const menuIconArrtibute = menuIcon.getAttribute('src');
  const image1 = 'media/Hamberger_menu_icon.svg';
  const image2 = 'media/Cancel-Menu-icon.svg';
  const newSer = (menuIconArrtibute === image1) ? image2 : image1;
  menuIcon.setAttribute('src', newSer);
}
mobileMenu.addEventListener('click', displayFunction);

// Mobile Menu disappear after clicking

const menuItemPortfolio = document.getElementById('portfolio-li');
const menuItemAbout = document.getElementById('about-li');
const menuItemContact = document.getElementById('contact-li');

function menuDisappear() {
  const menuList = document.getElementById('nav-menu');
  menuList.classList.remove('menue-button-pressed');
  document.getElementById('mobile-menu').setAttribute('src', 'media/Hamberger_menu_icon.svg');
}

menuItemPortfolio.addEventListener('click', menuDisappear);
menuItemAbout.addEventListener('click', menuDisappear);
menuItemContact.addEventListener('click', menuDisappear);

//  ----My Recent Works dynamic insertion ----
const workHistory = [
  {
    cardThumbnail: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1575936123452-b67c3203c357%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8%26w%3D1000%26q%3D80',
    cardTitle: 'Multi-Post Stories Gain+Glory',
    cardTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnInnerText: 'See project',
  },

  {
    cardThumbnail: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1575936123452-b67c3203c357%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8%26w%3D1000%26q%3D80',
    cardTitle: 'Multi-Post Stories Gain+Glory',
    cardTags: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnInnerText: 'See project',
  },

];

const workContainer = document.getElementById('WorkContainerID');
const sectionDiv = document.createElement('div');
sectionDiv.id = 'work-history';
sectionDiv.innerHTML = `
  <div class="work-history">
    <div id="firstProCard" class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail} alt="Project Thumbnail" alt="Project Thumbnail">
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="0" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>
    <div id="2ndProCard" class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail}>
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="1" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail}>
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="2" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail}>
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="3" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail}>
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="4" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>
    <div class="project">
      <div class="project-preview">
        <img src=${workHistory[0].cardThumbnail}>
      </div>
      <div class="project-info">
        <h3 class="project-title">${workHistory[0].cardTitle}</h3>
        <div>
          <ul class="project-tags">
            <li>${workHistory[0].cardTags[0]}</li>
            <li>${workHistory[0].cardTags[1]}</li>
            <li>${workHistory[0].cardTags[2]}</li>
            <li>${workHistory[0].cardTags[3]}</li>
          </ul>
        </div>
        <div class="btn-container">
          <button id="5" type="submit" class="btn-all">See project</button>
        </div>
      </div>
    </div>

  </div>`;

workContainer.appendChild(sectionDiv);

//  ----Mobile Popup Window ----

const projectBtn = document.querySelectorAll('.work-history .btn-all');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projects = [
      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },
      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['JavaScript', 'CSS', 'Ruby on Rails'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },
    ];

    const div1 = document.createElement('div');
    div1.id = 'mainContainerId';
    div1.className = 'mainContainer';
    div1.innerHTML = `
      <div id="mainContainerL2" class="mainContainerL2">
        <div id="children0" class="children0">
        <img id="children0Img" src="media/popup_Icon_mobile_Cancel.svg">
        </div>
        <div id="children1" class="children1">
        <img id="children1Id" src="media/Popup_img_Desktop_Portfolio.svg">
        </div>
        <div id="children2" class="children2">
          <h2>${projects[i].projectName}</h2>
          <ul id="ulChildren2Class" class="ulChildren2Class">
            <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[0]}</li>
            <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[1]}</li>
            <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[2]}</li>
          </ul>
        </div>
        <div id="children3" class="children3">
          <p id="pOfChild3" class="pOfChild3">${projects[i].projectDescription}</p>
        </div>
        <div id="children4" class="children4">
          <a href=${projects[i].linkToLive} target="_blank">
            <button id="btn-all-id" class="btn-all">See live
              <img src="media/Popup_img_Mobile_btn.svg">
            </button>
          </a>
          <a href=${projects[i].linkToSource} target="_blank">
            <button id="btn-all-id2" class="btn-all">See source
              <img src="media/Popup_img_mobile_btn_GitHub.svg">
            </button>  
          </a>
        </div>
      </div>`;
    document.body.appendChild(div1);

    // Mobile-Menu-Disapper

    const toggleBtn = document.getElementById('children0Img');
    const toggleContent = document.getElementById('mainContainerId');
    toggleBtn.addEventListener('click', () => {
      if (toggleContent) {
        toggleContent.parentNode.removeChild(toggleContent);
      }
    });
    // div1.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// -------------Contact form validation----------------

const submit = document.querySelector('.form-submit-btn');
const errordiv = document.getElementById('error-div');
const email = document.getElementById('email');

submit.addEventListener('click', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    errordiv.innerHTML = 'error: please write the email address in lowercase';
    event.preventDefault();
  } else {
    errordiv.innerHTML = '';
  }
});
