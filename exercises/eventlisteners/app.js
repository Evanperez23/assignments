var box = document.getElementById("colorBox")
box.style.height = "300px"
box.style.width = "300px"
box.style.backgroundColor = "beige"
box.style.marginLeft = "auto"
box.style.marginRight = "auto"
box.style.marginTop = "auto"

var colorBox = document.getElementById("colorBox")

colorBox.addEventListener("mouseover",function(){
    colorBox.style.backgroundColor = "blue"
})

colorBox.addEventListener("mousedown",function(){
    colorBox.style.backgroundColor = "red"
})

colorBox.addEventListener("mouseup", function (){
    colorBox.style.backgroundColor = "yellow"
})

colorBox.addEventListener("dblclick", function (){
    colorBox.style.backgroundColor = "green"
})

colorBox.addEventListener("mouseout", function (){
    colorBox.style.backgroundColor = "orange"
})

window.addEventListener("keydown", (event) => {
        var unicode = event.key
        if (unicode === "b") {
            colorBox.style.backgroundColor = "blue"
        } else if (unicode === "r") {
            colorBox.style.backgroundColor = "red"
        } else if (unicode === "y") {
            colorBox.style.backgroundColor = "yellow"
        } else if (unicode === "g") {
            colorBox.style.backgroundColor = "green"
        } else if (unicode === "o") {
            colorBox.style.backgroundColor = "orange"
        }

    }
)