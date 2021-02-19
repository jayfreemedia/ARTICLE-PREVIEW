const sharearrow = document.querySelector(".sharearrow");
const sharecircle = document.querySelector(".sharecircle");
const smediabubble = document.querySelector(".smediabubble");
const bubblearrow  = document.querySelector(".bubblearrow");
const gridcontainer = document.querySelector(".gridcontainer");
let isClick = false;

sharecircle.addEventListener("click", function() {
    sharearrow.style.fill = "hsl(210, 46%, 95%)";
    sharecircle.style.backgroundColor = "hsl(214, 17%, 51%)";
    smediabubble.style.display = "block";
    bubblearrow.style.display = "inline-block";
    isClick = true;
    console.log("click");
})