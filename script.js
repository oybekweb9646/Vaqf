let isDisMobile = false;
function searchMobile () {
    isDisMobile = !isDisMobile;
    if (isDisMobile === true){
        // document.getElementById('input_mobile').classList.remove('d-none');
        document.getElementById('button_mobile').innerHTML = '&#x2715;';
        document.getElementById("input").focus();
    }
    else {
        document.getElementById("input").style.animationDuration = "3s";

        document.getElementById('input_mobile').classList.add('d-none');
        document.getElementById('button_mobile').innerHTML = '<img width="20px" src="image/search.png" alt="">';
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
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTo({top: 0, behavior: "smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
}
$(".open-btn").click(function () {
    $("#search-wrap").addClass('panelactive');
    $('#search-text').focus();
});
$(".close-btn").click(function () {
    $("#search-wrap").removeClass('panelactive');
});
function online() {
    document.getElementById('online').style.backgroundColor = '#3CB68A';
    document.getElementById('other').style.backgroundColor = 'white';
    document.getElementById('other').style.color = 'black';
    document.querySelector('.online-xayriya').classList.remove('d-none')
    document.querySelector('.boshqa_usul').classList.add('d-none')
    document.getElementById('online').classList.add('text-white');
}
function other() {
    document.getElementById('other').style.backgroundColor = '#3CB68A';
    document.getElementById('other').style.color = 'white';
    document.getElementById('online').style.backgroundColor = 'white';
    document.getElementById('online').classList.remove('text-white');
    document.querySelector('.online-xayriya').classList.add('d-none');
    document.querySelector('.boshqa_usul').classList.remove('d-none');
}

let isOpen = false;
    $("#button").click(function() {
        isOpen = !isOpen
        if (isOpen === true) {
            $('#button').html("uzbek");
            $('#eng').html("english");
            $('#rus').html("ruscha");
            $('#uz').html("uzbek");
        }
        else{
            $('#button').html("uz");
            $('#eng').html("eng");
            $('#rus').html("rus");
            $('#uz').html("uz");
        }
        $('#span').toggleClass('d-none');
        $('#button').toggleClass('test-1');
        $('#drop').toggleClass('drop1');
        $('#eng').toggleClass('link1');
        $('#rus').toggleClass('link1');
        $('#uz').toggleClass('link1');
    });

$('#owl-modal').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
lightGallery(document.getElementById('gallery'), {
    animateThumb: true,
});
