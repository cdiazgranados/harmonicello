
const aBtn = document.querySelector(".A");
aBtn.addEventListener("click", () => {
    const ctx = new(window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.frequency.value = 220; 
    osc.start(0);
    osc.stop(1);
    console.log("Audio Context played: A");
})

const dBtn = document.querySelector(".D");
dBtn.addEventListener("click", () => {
    const ctx = new(window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.frequency.value = 146.8; 
    osc.start(0);
    osc.stop(1);
    console.log("Audio Context played: D");
})

const gBtn = document.querySelector(".G");
gBtn.addEventListener("click", () => {
    const ctx = new(window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.frequency.value = 98;
    osc.start(0);
    osc.stop(1);
    console.log("Audio Context played: G");
})

const cBtn = document.querySelector(".C");
cBtn.addEventListener("click", () => {
    const ctx = new(window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    osc.connect(ctx.destination);
    osc.frequency.value = 65.4; 
    osc.start(0);
    osc.stop(1);
    console.log("Audio Context played: C");
})