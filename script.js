console.log('hello world')


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})



