const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "orange",
                img: "img/custom-nike-air-force-1-mid-by-you-shoes.png",
            },
            {
                code: "white",
                img: "img/air-force-1-07-next-nature-shoes-7dl9fM.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordans",
        price: 149,
        colors: [
            {
                code: "red",
                img: "img/Jordan-Shoes-PNG-Pic.png",
            },
            {
                code: "skyblue",
                img: "img/air-jordan-1-mid-gs-ice-blue-555112-401_1_grande.webp",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "black",
                img: "img/custom-nike-blazer-mid-77-by-you.png",
            },
            {
                code: "white",
                img: "img/blazer white.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "white",
                img: "img/Nike-Crater-Impact-SE-Mens-Shoes-White.png",
            },
            {
                code: "darkcyan",
                img: "img/dj6308-002-phslh000-2000.webp",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "img/hippie01.webp",
            },
            {
                code: "maroon",
                img: "img/maroonhippie.webp",
            },
        ],
    },
]

let choosenProduct = products[0]

const currentProductImg  = document.querySelector(".productImg");
const currentProductTitle  = document.querySelector(".productTitle");
const currentProductPrice  = document.querySelector(".productPrice");
const currentProductColors  = document.querySelectorAll(".color");
const currentProductSizes  = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        // change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "£" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const producuButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

producuButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});