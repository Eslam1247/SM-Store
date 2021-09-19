var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

window.addEventListener('resize', function(){
  addRequiredClass();
})


function addRequiredClass() {
  if (window.innerWidth < 860) {
      document.body.classList.add('mobile')
  } else {
      document.body.classList.remove('mobile') 
  }
}


window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})
/*
const alllinks = document.querySelectorAll('.nav-list a')

function scrolltosmeewhere(elemnets) {
    elemnets.forEach(ele => {

        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })


        })
    })
}
scrolltosmeewhere(alllinks)
*/
// scroll bottom to top

let myButton = document.getElementById('up');

window.onscroll = function() {
        // Display after 400px height
        if (window.pageYOffset >= 200) {
            myButton.style.display = 'block';
        } else {
            myButton.style.display = 'none';
        }
    }
    //Onclick function
myButton.addEventListener('click', function() {
    window.scrollTo({
        top: 00,
        left: 0,
        behavior: "smooth"
    });
});
let tabs = document.querySelectorAll('.ul-size li a');
let tabsarrays = Array.from(tabs)

tabsarrays.forEach((e) => {
    e.addEventListener('click' , function (el) {
        //console.log(e)
        tabsarrays.forEach( (ele) => {
            ele.classList.remove('active')
        })
        el.currentTarget.classList.add('active')
        divsarray.forEach( (divs) => {
            divs.style.display ='none'
        })  
      })

})
