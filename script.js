function about() {
    window.location.href = "about.html";
}

function whatsapp() {
    window.location.href = "https://whatsapp.com/channel/0029Va9G5SOHFxOt0W2QRn10";
}

function telegram() {
    window.location.href = "https://telegram.me/+AMWviTAjQOcxZWM1";
}

function smoker() {
    window.location.href = "https://telegram.me/Smoker_xxd";
}


const text = document.getElementById('typing-text').innerHTML;
document.getElementById('typing-text').innerHTML = '';

let i = 0;
const typingEffect = setInterval(() => {
  if (i <= text.length) {
    document.getElementById('typing-text').innerHTML = text.substring(0, i);
    i++;
  } else {
    clearInterval(typingEffect);
  }
}, 50);