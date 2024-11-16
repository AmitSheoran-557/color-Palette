new Typed("#typed-text", {
    strings: ["Awesome Websites!", "Creative Designs!", "Tailwind + JS!"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});
// ==================== color box js =========================
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = "";
    for (let i = 0; i < 8; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement("div");
        colorBox.style.backgroundColor = color;
        colorBox.classList.add("lg:p-10", "md:p-5", "p-2", "rounded-md", "shadow-xl");
        const para = document.createElement("p");
        para.classList.add("text-black", "font-bold");
        para.textContent = color;
        colorBox.appendChild(para);
        palette.appendChild(colorBox);
    }
}

generatePalette();