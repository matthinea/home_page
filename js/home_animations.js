$('.about-me').animate({
    opacity: 1,
    right: "0"
}, 1000, function() {
    })

$("#personal-data").animate({
    opacity: 1
}, 2000)

$( "#bio" ).hide().slideDown('slow').animate({opacity: 1}, {queue: false, duration: 'slow'});