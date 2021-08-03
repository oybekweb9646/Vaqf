var oilCanvas = document.getElementById("oilChart");
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
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 210, 132)',
                'rgb(210, 162, 235)',
                'rgb(255, 20, 86)'
            ],
        }]
};
var pieChart = new Chart(oilCanvas, {
        type: 'doughnut',
        data: oilData,
        responsive: true,
        options: {
            responsive: true,
            legend: {
                display: false,
                responsive: true,
                position: "right",
                labels: {
                    fontColor: "#333",
                    fontSize: 20,
                    paddingTop: 50,
                }
            },
        }
    }
);

$('#owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#owl-carousel').owlCarousel({
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

$(document).ready(function () {
    $(".counter").counterUp({
        delay: 20,
        time: 1500
    })
})
lightGallery(document.getElementById('gallery'), {
    animateThumb: true,
});

