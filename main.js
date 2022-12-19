// let hertz = 220;
function getValue(){
    hertz = document.getElementById("getHertz").value;
    hertz = hertz / 2; 
    console.log(hertz);
    drawGrid(hertz);
}



const notesDiv = document.getElementById("notes");
function makeString(f) {
    return [
        f,
        f * 2,
        f * 3,
        f * 4,
        f * 5,
        f * 6,
        f * 7,
        f * 8 
    ]
}

//perhaps populate an array of string values from the database?
function makeGrid(f) {
    let string1 = f;
    let string2 = (string1 * (4/3)) /2;
    let string3 = (string2 * (4/3)) /2;
    let string4 = (string3 * (4/3)) /2;

    return [
        makeString(string1),
        makeString(string2),
        makeString(string3),
        makeString(string4)
    ]
}

function drawGrid(f) {
    let notes = makeGrid(f);

    for (let row = 0; row < notes.length; row++) {
        let tempRowDiv = document.createElement("div");

        for (let col = 0; col < notes[row].length; col++) {
            let tempCellButton = document.createElement("button");
            tempCellButton.setAttribute("state", "off");
            tempCellButton.style.background = '#d3d3d3';
            tempCellButton.textContent = notes[row][col];
            tempCellButton.addEventListener("click", toggleSynth);
            tempRowDiv.appendChild(tempCellButton);
        }
        notesDiv.appendChild(tempRowDiv);
    }
}

const audioCtx = new AudioContext();
audioCtx.suspend();

let synths = {};

function toggleSynth(event) {
    let button = event.target;
    let frequency = button.innerText;

    if (button.getAttribute("state") == "off") {
        button.setAttribute("state", "on");
        button.style.background = '#00FF00';
        let oscillatorNode = makeOscillator();
        oscillatorNode.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        synths[frequency] = oscillatorNode;
    } else {
        button.setAttribute("state", "off");
        button.style.background='#d3d3d3';
        synths[frequency].stop();
    }
    console.log(synths);

    audioCtx.resume();
}

function makeOscillator() {
    let oscillatorNode = audioCtx.createOscillator();
    let gainNode = audioCtx.createGain();
    let output = audioCtx.destination;

    oscillatorNode.connect(gainNode);
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.connect(output);
    oscillatorNode.start()

    return oscillatorNode;
}
// hertz = 220;
// drawGrid(hertz);








//simple string buttons

// const aBtn = document.querySelector(".A");
// aBtn.addEventListener("click", () => {
//     const ctx = new(window.AudioContext || window.webkitAudioContext)();
//     const osc = ctx.createOscillator();
//     osc.connect(ctx.destination);
//     osc.frequency.value = 220; 
//     osc.start(0);
//     osc.stop(1);
//     console.log("Audio Context played: A");
// })

// const dBtn = document.querySelector(".D");
// dBtn.addEventListener("click", () => {
//     const ctx = new(window.AudioContext || window.webkitAudioContext)();
//     const osc = ctx.createOscillator();
//     osc.connect(ctx.destination);
//     osc.frequency.value = 146.8; 
//     osc.start(0);
//     osc.stop(1);
//     console.log("Audio Context played: D");
// })

// const gBtn = document.querySelector(".G");
// gBtn.addEventListener("click", () => {
//     const ctx = new(window.AudioContext || window.webkitAudioContext)();
//     const osc = ctx.createOscillator();
//     osc.connect(ctx.destination);
//     osc.frequency.value = 98;
//     osc.start(0);
//     osc.stop(1);
//     console.log("Audio Context played: G");
// })

// const cBtn = document.querySelector(".C");
// cBtn.addEventListener("click", () => {
//     const ctx = new(window.AudioContext || window.webkitAudioContext)();
//     const osc = ctx.createOscillator();
//     osc.connect(ctx.destination);
//     osc.frequency.value = 65.4; 
//     osc.start(0);
//     osc.stop(1);
//     console.log("Audio Context played: C");
// })