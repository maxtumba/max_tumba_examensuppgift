
const audio = new Audio("filer/keyboardclick.mp3");


document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    const el = document.querySelector(`[data-key="${key}"]`)
    if (el) {
        el.classList.add("active");
    }
    audio.currentTime = 0;

    audio.play();
});

document.addEventListener("keyup", (e) => {
    const key= e.key.toLowerCase();

    const el = document.querySelector(`[data-key="${key}"]`);
    if (el)
    {
        el.classList.remove("active");
    }
});