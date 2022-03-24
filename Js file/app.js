/** @format */

/* ===== Menu Section ===*/
const menu = [{
        id: 1,
        title: "Mixed Smoothie",
        category: "smoothie",
        price: 15.99,
        img: "./drinks/image1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Violet granta drink",
        category: "smoothie",
        price: 13.99,
        img: "./drinks/image2.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "strawberry Drink",
        category: "smoothie",
        price: 6.99,
        img: "./drinks/image3.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "smoothie",
        price: 20.99,
        img: "./drinks/image4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "mango Smoothie",
        category: "smoothie",
        price: 22.99,
        img: "./drinks/image5.jpg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "Lemon Orange Drink",
        category: "Drink",
        price: 18.99,
        img: "./drinks/drink1.jpg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Rhubarb Spiritz",
        category: "Drink",
        price: 8.99,
        img: "./drinks/drink2.jpg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "Strawberry Drink",
        category: "Drink",
        price: 12.99,
        img: "./drinks/drink3.jpg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "pogmegranate Wine",
        category: "Drink",
        price: 16.99,
        img: "./drinks/drink4.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "Grape wine",
        category: "Drink",
        price: 22.99,
        img: "./drinks/drink5.jpg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                 <img src=${item.img} alt=${item.title} class="photo" />
                 <div class="item-info">
                   <header>
                     <h4 class="drink-info">${item.title}</h4>
                     <h4 class="price">$${item.price}</h4>
                   </header>
                   <p class="item-text">
                     ${item.desc}
                   </p>
                 </div>
               </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function(values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        }, ["all"]
    );
    const categoryBtns = categories
        .map(function(category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
/* === End Menu Section === */