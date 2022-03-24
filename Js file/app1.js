/** @format */

const services = [{
        tag: 1,
        name: "Bar",
        img: "./Service/bar.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        tag: 2,
        name: "Meeting Room",
        img: "./Service/meeting.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        tag: 3,
        name: "Bed Room",
        img: "./Service/room.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        tag: 4,
        name: "Spa",
        img: "./Service/spa.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

const img = document.getElementById("service-img");
const info = document.getElementById("info");
const serviceName = document.getElementById("service-name");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random");
let date = document.querySelector(".date");

let currentItem = 0;
let currentDate = new Date().getFullYear();
/* Event Listener */
window.addEventListener("DOMContentLoaded", loadItems);
nextBtn.addEventListener("click", loadNextService);
prevBtn.addEventListener("click", loadPrevService);
randomBtn.addEventListener("click", loadRandomView);

function loadItems() {
    let item = services[currentItem];

    img.src = item.img;
    serviceName.innerHTML = item.name;
    info.textContent = item.text;
    date.innerHTML = currentDate;
}

function displayServices(service) {
    let item = services[service];
    img.src = item.img;
    serviceName.textContent = item.name;
    info.textContent = item.text;
}

function loadNextService() {
    currentItem++;
    if (currentItem > services.length - 1) {
        currentItem = 0;
    }
    displayServices(currentItem);
}

function loadPrevService() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = services.length - 1;
    }
    displayServices(currentItem);
}

function loadRandomView() {
    currentItem = Math.floor(Math.random() * services.length);
    displayServices(currentItem);
}