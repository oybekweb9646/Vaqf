
var ctx = document.getElementById("my").getContext('2d');
var myChart = new Chart(ctx,
    {
        type: 'bar',
        responsive: true,
        options: {
            responsive: true,
            legend: {
                display: false,
                marginTop: 50,
                responsive: true,
                position: "bottom",
            },
        },
        data: {
            labels: ["2 389 290 710 сум","275 000 сум"],
            datasets: [{
                data: [12, 19, 23, 17, 28, 24,7],
                backgroundColor:"#36A2EB"
            }, {
                data: [40, 29, 5, 5, 20, 3, 10],
                backgroundColor:"#43DDFF"
            },
                {
                    data: [30, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#FF6384"
                },
                {
                    data: [20, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FF9F40"
                },
                {
                    data: [10, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#4BC0C0"
                },
                {
                    data: [30, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FFCD56"
                }]
        }
    });
var ctx1 = document.getElementById("my1").getContext('2d');
var myChart1 = new Chart(ctx1,
    {
        type: 'bar',
        responsive: true,
        options: {
            responsive: true,
            legend: {
                display: true,
                responsive: true,
                position: "bottom",
            },
        },
        data: {
            labels: ["58 260 384 сум", "2 010 731 сум"],
            datasets: [{
                label: 'apples',
                data: [12, 19, 23, 17, 28, 24,7],
                backgroundColor:"#36A2EB"
            }, {
                label: 'oranges',
                data: [40, 29, 5, 5, 20, 3, 10],
                backgroundColor:"#43DDFF"
            },
                {
                    label: 'oranges',
                    data: [30, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#FF6384"
                },
                {
                    label: 'oranges',
                    data: [20, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FF9F40"
                },
                {
                    label: 'oranges',
                    data: [10, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#4BC0C0"
                },
                {
                    label: 'oranges',
                    data: [30, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FFCD56"
                }]
        }
    });

var ctx2 = document.getElementById("my2").getContext('2d');
var myChart2 = new Chart(ctx2,
    {
        fontColor: "red",
        type: 'bar',
        responsive: true,
        options: {
            responsive: true,
            legend: {
                display: true,
                responsive: true,
                position: "bottom",
                fontColor: "red",

            },
        },
        data: {
            labels: ["Тулов тизимлари 58 260 384 сум", "Мунис 2 010 731 сум","Банк тизими 2 389 290 710 сум","Инфокиосклар 275 000 сум"],
            datasets: [{
                label: 'apples',
                data: [12, 19, 23, 17, 28, 24,7],
                backgroundColor:"#36A2EB"
            }, {
                label: 'oranges',
                data: [40, 29, 5, 5, 20, 3, 10],
                backgroundColor:"#43DDFF"
            },
                {
                    label: 'oranges',
                    data: [30, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#FF6384"
                },
                {
                    label: 'oranges',
                    data: [20, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FF9F40"
                },
                {
                    label: 'oranges',
                    data: [10, 29, 15, 5, 20, 3, 10],
                    backgroundColor:"#4BC0C0"
                },
                {
                    label: 'oranges',
                    data: [30, 29, 5, 5, 20, 3, 10],
                    backgroundColor:"#FFCD56"
                }]
        }
    });

