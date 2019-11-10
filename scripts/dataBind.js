let x0Input = document.getElementById("x0");
let y0Input = document.getElementById("y0");
let XInput = document.getElementById("X");
let NInput = document.getElementById("N");

Chart.defaults.global.animation.duration = 200;

document.addEventListener("DOMContentLoaded", () => {
    canvas = document.querySelector("#graph canvas").getContext("2d");

    x0Input = document.getElementById("x0");
    x0Input.addEventListener("input", collectData);

    y0Input = document.getElementById("y0");
    y0Input.addEventListener("input", collectData);

    XInput = document.getElementById("X");
    XInput.addEventListener("input", collectData);

    NInput = document.getElementById("N");
    NInput.addEventListener("input", collectData);

    collectData();
});

function collectData() {
    recalculate(
        parseFloat(x0Input.value),
        parseFloat(y0Input.value),
        parseFloat(XInput.value),
        parseInt(NInput.value, 10)
    );
}
