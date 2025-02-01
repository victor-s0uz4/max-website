//Icon
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

createRoundedFavicon("./public/max.jpg");




//Theme
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    const isDark = getComputedStyle(document.documentElement).getPropertyValue('--background').trim() === '#000000';

    document.documentElement.style.setProperty('--backgroundimage', isDark ? 'radial-gradient(rgba(164, 164, 164, 0.4) 2px, transparent 2px)' : 'radial-gradient(rgba(255, 255, 255, 0.09) 2px, transparent 2px)');
    
    document.documentElement.style.setProperty('--background', isDark ? '#dddddd' : '#000000');

    document.documentElement.style.setProperty('--background2', isDark ? '#dddddd' : '#000000');

    document.documentElement.style.setProperty('--text-gradient', isDark ? 'linear-gradient(to right,rgb(106, 106, 106),rgb(158, 43, 53),rgb(93, 2, 10))' : 'linear-gradient(to right, #d85c66, #e24653, #880712)');

    document.documentElement.style.setProperty('--text', isDark ? '#444444' : '#ffffff');

    document.documentElement.style.setProperty('--shadow', isDark ? 'rgb(192, 192, 192)' : '#111111');
});

//Icons hover
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