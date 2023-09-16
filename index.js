const urls = [
    "./assets/Dictionary-pana.png",
    "./assets/Knowledge-pana.png",
    "./assets/Nerd-amico.png",
];

const img = document.querySelector(".switchImg");

let index = 0;

function change() {
    img.src = urls[index];
    index > 1 ? (index = 0) : index++;
}

window.onload = function () {
    setInterval(change, 2000);
};
