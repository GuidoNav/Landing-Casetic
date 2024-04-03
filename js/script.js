const sliderSpeed = 70; // slider speed in pixels/seconds
const slider = document.querySelector(".slider");
let slides = slider.querySelectorAll("*");
let translate = 0;
let sliderMargin = slider.getBoundingClientRect().left;

function updateText() {
    let delta = (Date.now() - lastUpdate)/1000; // delta time to have consistent speed regardless of refresh rates
    lastUpdate = Date.now();
    requestAnimationFrame(updateText);

    translate += sliderSpeed * delta; // each seconds move from given number px
    slider.style = "margin-left: -" + translate + "px"; // apply pos
    const rect = slides[1].getBoundingClientRect();
    if (rect.left >= sliderMargin) return;
    // put the first element in last pos when then second start disapearing
    slider.appendChild(slides[0]);
    slides = slider.querySelectorAll("*"); // updates slides array after change
    translate = 0;
    slider.style = "margin-left: -" + translate + "px"; // apply pos
    sliderMargin = slider.getBoundingClientRect().left; // doing this is kind of overkill but allow resizing view without reload so it won't glitch
}
let lastUpdate = Date.now();
requestAnimationFrame(updateText);