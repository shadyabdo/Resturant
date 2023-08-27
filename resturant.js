// Veno LIghtBox Library//
new VenoBox({
    selector: '.my-video-links',
});
///////////////////

//AOS library Animation //
AOS.init();

///////////////////

let up = document.querySelector(".up");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (eo) => {
    if (window.scrollY >= 120) {
        up.classList.add("show");
        navbar.classList.add("navbarScrool");

    } else {
        up.classList.remove("show");
        navbar.classList.remove("navbarScrool");

    }
})

up.addEventListener("click", (eo) => {
    scroll({
        top: 0,

    })

});


// VenoBox ///
new VenoBox({
    selector: '.my-video-links',
});

// //////////
let titleHero = document.getElementById("titleHero");
let linkVid = document.querySelector(".linkVid");
let offcanvasTitle = document.querySelector(".offcanvas .title")
let ScroolBar = document.querySelector("::-webkit-scrollbar-thumb")
function SetColor(color) {
    titleHero.style.color = color;
    linkVid.style.background = color;
    offcanvasTitle.style.background = color;
    up.style.background = color;
}



// owl-carousel js

$('.content6').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
    ;

// //////////

$('.content8').owlCarousel({
    
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        800: {
            items: 2,
            nav: false
        },

        1000: {
            items: 3,
            nav: true,
            loop: false
        }

    },

})

// main-9

new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});