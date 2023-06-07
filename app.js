let p1 = prompt("1-o`yinchi")
let p2 = prompt("2-o`yinchi")

document.getElementById("player_1").innerHTML = p1
document.getElementById("player_2").innerHTML = p2

let btn_1 = document.getElementById("btn_1")

btn_1.addEventListener("click", function(){
    my1(p1,p2)
})

function my1(p1,p2) {
    let img_1 = document.getElementById("img_1")
    let q = Math.floor(Math.random() * 6);
    let img_2 = document.getElementById("img_2")
    let w = Math.floor(Math.random() * 6);
    if (q === 0) {
        img_1.src = "1.png"
    }
    if (q === 1) {
        img_1.src = "2.png"
    }
    if (q === 2) {
        img_1.src = "3.png"
    }
    if (q === 3) {
        img_1.src = "4.png"
    }
    if (q === 4) {
        img_1.src = "5.png"
    }
    if (q === 5) {
        img_1.src = "6.png"
    }

    if (w === 0) {
        img_2.src = "1.png"
    }
    if (w === 1) {
        img_2.src = "2.png"
    }
    if (w === 2) {
        img_2.src = "3.png"
    }
    if (w === 3) {
        img_2.src = "4.png"
    }
    if (w === 4) {
        img_2.src = "5.png"
    }
    if (w === 5) {
        img_2.src = "6.png"
    }
    let result = document.getElementById("reslut")
    let p_1 = p1 + " is winner"
    let p_2 = p2 + " is winner"
    if(q>w){
        result.innerHTML = p_1
    }
    else if(q<w){
        result.innerHTML = p_2
    }
    else{
        result.innerHTML = "Draw"
    }
}