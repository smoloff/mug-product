let currentCapacity = document.querySelector("#current-capacity") //вибраний об'єм
let currentColor = document.querySelector("#current-color") //обраний колір
let capacity = document.querySelector("#product-capacity")


capacity.addEventListener("click", function(e) {
    if (e.target.value) currentCapacity.innerText = e.target.value + " мл"
})
let color = document.querySelector(".product-color")


color.addEventListener("click", function(e) {
    elem = e.target.getAttribute("data-color")
    console.log(elem)
    if (elem) currentColor.innerText = elem
    // console.log(e.target)
})
console.log("i'm online")

const product = [
{
    color: {
        "white": "Білий"
    },
    capacity: 310,
    price: 140
},
{
    color: {
        "red" : "Червоний",
        "yellow" : "Жовтий", 
        "orange" : "Помаранчевий",
        "light-green": "Салатовий",
        "green": "Зелений",
        "light-blue": "Блактиний",
        "blue": "Фіолетовий",
        "black": "Чорний",
        "pink": "Рожевий",
        "maroon": "Бордовий"
    },
    capacity: 330,
    price: 150
}
]
    
