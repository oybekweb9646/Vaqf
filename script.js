let isDis = false;
function search () {
    isDis = !isDis;
    if (isDis === true){
document.getElementById('input').classList.remove('d-none');
        document.getElementById('button').innerHTML = '&#x2715;';

    }
    else {
        document.getElementById('input').classList.add('d-none');
        document.getElementById('button').innerHTML = '<img width="20px" src="image/search.png" alt="">';
    }
}

$('.owl-carousel').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    margin:10,
    autoplay: true,
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

function sliceSize(dataNum, dataTotal) {
    return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
    $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
    var offset = offset - 1;
    var sizeRotation = -179 + sliceSize;
    $("."+sliceID).css({
        "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
    });
    $("."+sliceID+" span").css({
        "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
        "background-color": color
    });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
    var sliceID = "s"+dataCount+"-"+sliceCount;
    var maxSize = 179;
    if(sliceSize<=maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
    } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
    }
}
function createPie(dataElement, pieElement) {
    var listData = [];
    $(dataElement+" span").each(function() {
        listData.push(Number($(this).html()));
    });
    var listTotal = 0;
    for(var i=0; i<listData.length; i++) {
        listTotal += listData[i];
    }
    var offset = 0;
    var color = [
        "cornflowerblue",
        "olivedrab",
        "orange",
        "tomato",
        "crimson",
        "purple",
        "turquoise",
        "forestgreen",
        "navy",
        "gray"
    ];
    for(var i=0; i<listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);
        $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
        offset += size;
    }
}
createPie(".pieID.legend", ".pieID.pie");





var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "startDuration": 0,
    "theme": "light",
    "addClassNames": true,
    // "legend": {
    //   "position": "right",
    //   "marginRight": 100,
    //   "autoMargins": false
    // },
    "innerRadius": "60%",
    "defs": {
        "filter": [{
            "id": "shadow",
            "width": "200%",
            "height": "200%",
            "feOffset": {
                "result": "offOut",
                "in": "SourceAlpha",
                "dx": 0,
                "dy": 0
            },
            "feGaussianBlur": {
                "result": "blurOut",
                "in": "offOut",
                "stdDeviation": 5
            },
            "feBlend": {
                "in": "SourceGraphic",
                "in2": "blurOut",
                "mode": "normal"
            }
        }]
    },
    "dataProvider": [{
        "country": "Lithuania",
        "litres": 501.9
    }, {
        "country": "Czech Republic",
        "litres": 301.9
    }, {
        "country": "Ireland",
        "litres": 201.1
    }, {
        "country": "Germany",
        "litres": 165.8
    }, {
        "country": "Australia",
        "litres": 139.9
    }, {
        "country": "Austria",
        "litres": 128.3
    }, {
        "country": "UK",
        "litres": 99
    }, {
        "country": "Belgium",
        "litres": 60
    }, {
        "country": "The Netherlands",
        "litres": 50
    }],
    "valueField": "litres",
    "titleField": "country",
    "balloon": {
        "fillAlpha": 0,
        "borderAlpha": 0,
        "shadowAlpha": 0,
        "fixedPosition": true
    },
    "listeners": [{
        "event": "changed",
        "method": function(e) {
            console.log(e.type);
        }
    }],
    "chartCursor": {

    },
    "export": {
        "enabled": true
    }
});

chart.addListener("init", handleInit);

chart.addListener("rollOverSlice", function(e) {
    handleRollOver(e);
});

function handleInit() {
    chart.legend.addListener("rollOverItem", handleRollOver);
}

function handleRollOver(e) {

    var chart = e.chart,
        radiusReal = chart.radiusReal,
        innerRadius = parseInt(chart.innerRadius, 10) * 0.01,
        marginTop = radiusReal * innerRadius;

    $('.amcharts-balloon-div').css({
        marginTop: marginTop * -1
    });

    var wedge = e.dataItem.wedge.node;
    wedge.parentNode.appendChild(wedge);
}




