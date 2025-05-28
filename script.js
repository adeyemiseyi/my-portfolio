 var typed = new Typed('.element', {
            strings: ["Graphic Designer.", "Frontend Developer.","UI/UX Designer"],
            typeSpeed: 100,
            backSpeed:100,
            backDelay: 1000,
            loop:true 
        });



        
//responsive hadle bar
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
   bar.addEventListener('click', () => {
      nav.classList.add('active');
   })
}

if (close) {
   close.addEventListener('click', () => {
      nav.classList.remove('active');
   })
}


function on(){
   document.getElementById("overlay").style.display = "block";
}

function off() {
   document.getElementById("overlay").style.display = "none"
}


