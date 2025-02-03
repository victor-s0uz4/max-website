function createRoundedFavicon(imageSrc) {
  let canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64; // Adjust size as needed
  let ctx = canvas.getContext("2d");

  let img = new Image();
  img.onload = function () {
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, 0, 0, 64, 64);

    let favicon = document.querySelector("link[rel='icon']");
    favicon.href = canvas.toDataURL("image/png");
  };
  img.src = imageSrc;
}

createRoundedFavicon("./public/max.png");

const toggleButton = document.querySelector(".toggle-theme");
let isDarkMode = false;

toggleButton.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
  const menuOpacity = window.getComputedStyle(menu).opacity;

  if (menuOpacity === "1") {
      menu.style.opacity = "0";
      toggleMenu.style.transform = toggleMenu.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  } else {
    menu.style.opacity = "1"
    toggleMenu.style.transform = toggleMenu.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
  }
})

const screen = document.querySelector('.commands');

const botHidden = document.querySelector('.bot-hidden');
const utilHidden = document.querySelector('.util-hidden');
const ecoHidden = document.querySelector('.eco-hidden');

const botToggle = document.querySelector('.bot');
const utilToggle = document.querySelector('.util');
const ecoToggle = document.querySelector('.eco');

function toggleSection(toggleBtn, section, newHeight) {
    const isActive = section.classList.contains('active');

    [botHidden, utilHidden, ecoHidden].forEach(hiddenSection => {
        if (hiddenSection !== section) {
            hiddenSection.classList.remove('active');
            hiddenSection.style.height = '0px';
        }
    });

    if (!isActive) {
        section.classList.add('active');
        section.style.height = `${newHeight}vh`;
        screen.style.height = `${newHeight + 40}vh`;
    } else {
        section.classList.remove('active');
        section.style.height = '0px';
        screen.style.height = '40vh';
    }

    toggleBtn.classList.toggle('rotated');
}

botToggle.addEventListener('click', () => toggleSection(botToggle, botHidden, 30));
utilToggle.addEventListener('click', () => toggleSection(utilToggle, utilHidden, 85));
ecoToggle.addEventListener('click', () => toggleSection(ecoToggle, ecoHidden, 85));


const bgFace = document.getElementsByClassName('bg-face')
const bgInsta = document.getElementsByClassName('bg-ig')
const bgMail = document.getElementsByClassName('bg-mail')
const bgGit = document.getElementsByClassName('bg-git')
const bgDc = document.getElementsByClassName('bg-dc')

const fiFace = document.getElementsByClassName('fi-face')
const fiInsta = document.getElementsByClassName('fi-ig')
const fiMail = document.getElementsByClassName('fi-mail')
const fiGit = document.getElementsByClassName('fi-git')
const fiDc = document.getElementsByClassName('fi-dc')

function addHoverEffect(bgElements, fiElements, bgColor, textColor) {
for (let i = 0; i < bgElements.length; i++) {
  bgElements[i].addEventListener('mouseenter', () => {
    bgElements[i].style.background = bgColor;
    if (fiElements[i]) fiElements[i].style.color = textColor;
  });

  bgElements[i].addEventListener('mouseleave', () => {
    bgElements[i].style.background = ''; // Reset to default
    if (fiElements[i]) fiElements[i].style.color = ''; // Reset color
  });
}
}

addHoverEffect(bgFace, fiFace, '#065bc2', '#ffffff');
addHoverEffect(bgInsta, fiInsta, '#C13584', '#ffffff');
addHoverEffect(bgMail, fiMail, '#D44638', '#ffffff');
addHoverEffect(bgGit, fiGit, '#333333', '#ffffff');
addHoverEffect(bgDc, fiDc, '#5865F2', '#ffffff');