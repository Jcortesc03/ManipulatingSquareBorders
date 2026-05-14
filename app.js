const square = document.getElementById("square")
const scroll1 = document.getElementById("scroll-1")
const scroll2 = document.getElementById("scroll-2")
const scroll3 = document.getElementById("scroll-3")
const scroll4 = document.getElementById("scroll-4")

function modifyBorderRadius(border, border2modify){
    //console.log([`${border.value}`][0])
    square.style[`border${border2modify}Radius`] = border.value + "%";
    console.log(border2modify)
}

scroll1.addEventListener("input", () => {modifyBorderRadius(scroll1, "TopLeft")})
scroll2.addEventListener("input", () => {modifyBorderRadius(scroll2, "BottomLeft")})
scroll3.addEventListener("input", () => {modifyBorderRadius(scroll3, "BottomRight")})
scroll4.addEventListener("input", () => {modifyBorderRadius(scroll4, "TopRight")})