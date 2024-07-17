document.getElementById('menuToggle').addEventListener('change', function() {
    var menuContent = document.getElementById('menuContent');
    if (this.checked) {
        menuContent.classList.add('show');
    } else {
        menuContent.classList.remove('show');
    }
});

document.getElementById('myButton').addEventListener('click', function() {
  window.location.href = '';
});
// this js for Menu bar
function toggleDropdown() {
    var dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    var body = document.body;
    var isChecked = document.querySelector('.input').checked;

    if (isChecked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.remove('light-mode');
    }
}

function setMode(mode) {
    var body = document.body;

    if (mode === 'default') {
        body.classList.remove('light-mode', 'dark-mode');
        document.querySelector('.input').checked = false;
    } else if (mode === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.querySelector('.input').checked = false;
    } else if (mode === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.querySelector('.input').checked = true;
    }
}
// This js is for switch toggle.
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-navbar');
    var scrollImage = document.getElementById('scroll-image');
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        header.classList.add('hide');
        navbar.classList.add('hide');
        scrollImage.classList.add('show-scroll-image');
    } else {
        header.classList.remove('hide');
        navbar.classList.remove('hide');
        scrollImage.classList.remove('show-scroll-image');
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-navbar');
    var scrollImage = document.getElementById('scroll-image');
    var navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) {
        header.classList.add('hide');
        scrollImage.classList.add('show-scroll-image');
        navbar.classList.add('show-scroll-items');
    } else {
        header.classList.remove('hide');
        scrollImage.classList.remove('show-scroll-image');
        navbar.classList.remove('show-scroll-items');
    }
});

document.addEventListener('DOMContentLoaded', function() {
var typed = new Typed(".typing", {
strings: ["Join Us in Worship in Triumph Assembly Church .", "Experience His Grace in Triumph Assembly Church ." , "Feel the Love of God in  Triumph Assembly Church ."],
typeSpeed: 100,
backSpeed: 60,
loop: true
});
});
// This js is for the scroll effect and typing.



function updateTimer() {
const now = new Date();
let targetDate;

if (now.getDay() >= 1 && now.getDay() <= 3) {
    // Monday to Wednesday: Next Thursday 8:00 AM UTC
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (4 - now.getDay()), 8, 0, 0);
} else if (now.getDay() === 4 && now.getUTCHours() < 8) {
    // Thursday before 8:00 AM UTC: Today at 8:00 AM UTC
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0);
} else if (now.getDay() >= 5 && now.getDay() <= 6) {
    // Friday to Saturday: Next Sunday 8:00 AM UTC
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 8, 0, 0);
} else {
    // Thursday after 8:00 AM UTC or Sunday: Next Sunday 8:00 AM UTC
    targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 8, 0, 0);
}

const countdownElement = document.getElementById('homepage-hero-watch-live-timer');
const watchNowContent = document.getElementById('watch-now-content');

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
        clearInterval(interval);
        countdownElement.classList.add('hidden');
        watchNowContent.classList.remove('hidden');
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
}, 1000);
}

updateTimer();      
// This js is for the timer.

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}