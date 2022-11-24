//dark mode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 


//scroll to button
// let scrolBtn = document.querySelector(".scroll-top");
// window.onscroll = function(){
//   if(this.scrollY >= 500){
//     scrolBtn.classList.add("scroll-show")
//   }
//   else{
//     scrolBtn.classList.remove("scroll-show")
//   }
// }







//scroll counter
document.addEventListener("DOMContentLoaded", function() {
  // You can change this class to specify which elements are going to behave as counters.
  var elements = document.querySelectorAll(".scroll-counter")

  elements.forEach(function(item) {
    // Add new attributes to the elements with the '.scroll-counter' HTML class
    item.counterAlreadyFired = false
    item.counterSpeed = item.getAttribute("data-counter-time") / 45
    item.counterTarget = +item.innerText
    item.counterCount = 0
    item.counterStep = item.counterTarget / item.counterSpeed

    item.updateCounter = function() {
      item.counterCount = item.counterCount + item.counterStep
      item.innerText = Math.ceil(item.counterCount)

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed)
      } else {
        item.innerText = item.counterTarget
      }
    }
  })

  // Function to determine if an element is visible in the web page
  var isElementVisible = function isElementVisible(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    )
  }

  // Funciton that will get fired uppon scrolling
  var handleScroll = function handleScroll() {
    elements.forEach(function(item, id) {
      if (true === item.counterAlreadyFired) return
      if (!isElementVisible(item)) return
      item.updateCounter()
      item.counterAlreadyFired = true
    })
  }

  // Fire the function on scroll
  window.addEventListener("scroll", handleScroll)
})






//slick sliders 
$('.slick-slider').slick();

$('.partners-slider').slick({
  arrows: false,
  autoplay: true,
  infinite: true,
  // centerPadding: '45px',
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});


$('.clients-slider').slick({
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});

$('.c-partners-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay : true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  
  ]
});


$('.c-clients-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  
  ]
});

$('.company-slider-dets').slick({
  dots: false,
  autoplay : true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 4
      }
    }
  
  ]
});


$('.team-member-slider').slick({
  dots: false,
  autoplay : true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});


$('.your-class').slick();


$('.main-slideee').slick({
  dots: false,
  autoplay : true,
  arrows: true,
  infinite: true,
  speed: 300,
});




//sticky Navabr and scroll to button
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunctionn()};
// Get the navbar
var navbar = document.getElementById("navbar");
var scrolBtn = document.querySelector(".scroll-top");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunctionn() {
  if (window.pageYOffset >= 400) {
    navbar.classList.add("stickyy");
    scrolBtn.classList.add("scroll-show")
    
  } else {
    navbar.classList.remove("stickyy");
    scrolBtn.classList.remove("scroll-show");
  }
}

scrolBtn.onclick = function(){
  window.scrollTo({
     top : 0,
     behavior : "smooth"
   })
}




//wow js
new WOW().init();


//mixitup 
var containerEl = document.querySelector('.contain');
var mixer = mixitup(containerEl);





