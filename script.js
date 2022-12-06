let currentCapacity = document.querySelector("#current-capacity") // вибраний об'єм
let currentColor = document.querySelector("#current-color") // обраний колір
let productPrice = document.querySelector('#product-price') // вартість
let capacity = document.querySelector("#product-capacity")
let capacityValue = 330; // стартовий об'єм
let colorValue = "white"; // стартовий колір
let color = document.querySelector(".product-color")//div з кольорами чашок
let webp = document.querySelector("#webp");
let jpeg = document.querySelector("#jpeg");
let orderButton = document.querySelector("#order-button")
console.log(orderButton)



capacity.addEventListener("click", function (e) {
    if (e.target.value) {
        capacityValue = e.target.value;
        sort(checkCapacity(), colorValue);
    }
})


color.addEventListener("click", function (e) {
    let elem = e.target.getAttribute("data-color")
    if (elem) {
        colorValue = elem;
        sort(checkCapacity(), colorValue)
    }
})

function checkCapacity() {
    if (capacityValue == 180) return capacity180;
    if (capacityValue == 330) return capacity330;
    if (capacityValue == 425) return capacity425;
}



function sort(val, col) {
    console.log(val)
    console.log(col)
    val.forEach(element => {
        if (element.color == col) {
            currentCapacity.innerText = element.value + " мл";
            currentColor.innerText = element.name;
            productPrice.innerText = element.price + " грн";
            webp.srcset = `https://www.paperfox.com.ua/wp-content/uploads/${element.img}.webp`;
            jpeg.src = `https://www.paperfox.com.ua/wp-content/uploads/${element.img}.jpeg`;
            orderButton.href= `https://www.paperfox.com.ua/product/${element.link}`;
        }
    });
}

const capacity180 = [
    {
        value: 180,
        color: "white",
        name: "Білий",
        img: "2015/06/mug-print-310-white",
        price: 140,
        link: "mug-white-180"
    },
    {
        value: 180,
        color: "orange",
        name: "Помаранчевий",
        img: "2015/06/mug-print-310-inner-orange",
        price: 140,
        link: "mug-orange-mini"
    },
    {
        value: 180,
        color: "yellow",
        name: "Жовтий",
        img: "2015/06/mug-print-310-inner-yellow",
        price: 140,
        link: "mug-yellow-mini"
    }
]

const capacity330 = [
    {
        value: 330,
        color: "white",
        name: "Білий",
        img: "2015/06/mug-print-310-white",
        price: 140,
        link: "mug-white"
    },
    {
        value: 330,
        color: "orange",
        name: "Помаранчевий",
        img: "2015/06/mug-print-310-inner-orange",
        price: 150,
        link: "mug-orange-"


    },
    {
        value: 330,
        color: "yellow",
        name: "Жовтий",
        img: "2015/06/mug-print-310-inner-yellow",
        price: 150,
        link: "mug-yellow-"

    }
]

const capacity425 = [
    {
        value: 425,
        color: "white",
        name: "Білий",
        img: "2017/02/mug-print-white-425",
        price: 200,
        link: "mug-white-xl"
    },
    {
        value: 425,
        color: "orange",
        name: "Помаранчевий",
        img: "2017/02/mug-print-orange-425",
        price: 200,
        link: "mug-orange-xl"

    },
    {
        value: 425,
        color: "yellow",
        name: "Жовтий",
        img: "2017/02/mug-print-yellow-425",
        price: 200,
        link: "mug-yellow-xl"
    }

]