var models = [
    {
        name: "BMW CAR",
        image: 'img/bmw.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2017-model-bmv-1.16-d-joy-plus-hasarsiz-906619442/detay'
    },
    {
        name: "HONDA CAR",
        image: 'img/honda.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2017-model-bmv-1.16-d-joy-plus-hasarsiz-906619442/detay'
    },
    {
        name: "MAZDA CAR",
        image: 'img/mazda.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2017-model-bmv-1.16-d-joy-plus-hasarsiz-906619442/detay'
    },
    {
        name: "SKODA CAR",
        image: 'img/skoda.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2017-model-bmv-1.16-d-joy-plus-hasarsiz-906619442/detay'
    },
    {
        name: "VOLVO CAR",
        image: 'img/volvo.jpg',
        link: 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2017-model-bmv-1.16-d-joy-plus-hasarsiz-906619442/detay'
    }
]

var index = 2;
var slaytCount = models.length;
var interval;
var settings = {
    duration: 1500,
    random: true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    });
});


function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

function init(settings) {

    var prev;

    interval = setInterval(function () {
        if (settings.random) {
            do {
                index = Math.floor((Math.random() * slaytCount));
            } while (index == prev)
            prev = index;
        }
        else {
            if (slaytCount == index + 1) {
                index = -1;

            }
            showSlide(index)
            index++;
        }
        showSlide(index);
    }, settings.duration);
}

