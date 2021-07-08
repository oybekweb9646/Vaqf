let isDisMobile = false;
function searchMobile () {
    isDisMobile = !isDisMobile;
    if (isDisMobile === true){
        document.getElementById('input_mobile').classList.remove('d-none');
        document.getElementById('button_mobile').innerHTML = '&#x2715;';

    }
    else {
        document.getElementById('input_mobile').classList.add('d-none');
        document.getElementById('button_mobile').innerHTML = '<img width="20px" src="image/search.png" alt="">';
    }
}

let isDis = false;

function search() {
    isDis = !isDis;
    if (isDis === true) {
        document.getElementById('input').classList.remove('d-none');
        document.getElementById('button').innerHTML = '&#x2715;';

    } else {
        document.getElementById('input').classList.add('d-none');
        document.getElementById('button').innerHTML = '<img width="20px" src="image/search.png" alt="">';
    }
}

let mobile_is = false;

function mobile_toggle () {
    mobile_is = !mobile_is;
    if (mobile_is === true) {
        document.getElementById('toggle').innerHTML = '<img class="p-1" width="30px" src="image/img_3.png" alt="">';
        document.getElementById('mobile_items').classList.remove('d-none');
        document.getElementById('mobile_items').classList.add('d-flex');
    } else {
        document.getElementById('toggle').innerHTML = '<img class="p-1" width="30px" src="image/img.png" alt="">';
        document.getElementById('mobile_items').classList.add('d-none');
        document.getElementById('mobile_items').classList.remove('d-flex');

    }
}

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 20,
        time: 1500
    })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    margin:10,
    autoplay: false,
    nav:true,
    items: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



$('#carouselExample').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});



// Developed at agap2
// Based on:
// http://www.codeply.com/go/s3I9ivCBYH/multi-carousel-single-slide-bootstrap-4

$('.multi-item-carousel').on('slide.bs.carousel', function (e) {
    let $e = $(e.relatedTarget),
        itemsPerSlide = 3,
        totalItems = $('.carousel-item', this).length,
        $itemsContainer = $('.carousel-inner', this),
        it = itemsPerSlide - (totalItems - $e.index());
    if (it > 0) {
        for (var i = 0; i < it; i++) {
            $('.carousel-item', this).eq(e.direction == "left" ? i : 0).
                // append slides to the end/beginning
                appendTo($itemsContainer);
        }
    }
});



//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTo({top: 0, behavior: "smooth"}); // For Safari
    document.documentElement.scrollTo({top: 0, behavior: "smooth"}); // For Chrome, Firefox, IE and Opera
}



var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 0;

var oilData = {
    labels: [
        "Saudi Arabia",
        "Russia",
        "Iraq",
        "United Arab Emirates",
        "Canada",
        "kjkjk"
    ],
    datasets: [
        {
            data: [90, 86.2, 52.2, 51.2, 50.2, 30],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF",
                "#6384aa"
            ],
        }]
};

var pieChart = new Chart(oilCanvas, {
    type: 'pie',
    data: oilData
});
