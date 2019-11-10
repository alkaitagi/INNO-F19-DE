function round(x) {
    let dec = 100000;
    return Math.round(x * dec) / dec;
}

let graph;
let x0 = 0;
let y0 = round(Math.SQRT1_2);
let X = 3;
let N = 10;
let h = 0.3;

document.addEventListener("DOMContentLoaded", () => {
    Chart.defaults.global.animation.duration = 200;
    canvas = document.querySelector("#graph canvas");
    _h = document.getElementById("h")

    _x0 = document.getElementById("x0");
    _x0.value = x0;
    _x0.addEventListener("input", () => {
        x0 = _x0.value;
        recalculate();
        _h.value = h;
    });

    _y0 = document.getElementById("y0");
    _y0.value = y0;
    _y0.addEventListener("input", () => {
        y0 = _y0.value;
        recalculate();
        _h.value = h;
    });

    _X = document.getElementById("X");
    _X.value = X;
    _X.addEventListener("input", () => {
        X = _X.value;
        recalculate();
        _h.value = h;
    });

    _N = document.getElementById("N");
    _N.value = N;
    _N.addEventListener("input", () => {
        N = _N.value;
        recalculate();
        _h.value = h;
    });

    recalculate();
});

function recalculate() {
    let h = (X - x0) / N;
    let xs = getXs(x0, h, N);

    let ys1 = getYs(xs, y0, h, euler, v11);
    let ys2 = getYs(xs, y0, h, eulerP, v11);
    let ys3 = getYs(xs, y0, h, runge, v11);
    let graph = new Chart(canvas, {
        type: 'line',
        data: {
            labels: xs,
            datasets: [{
                fill: false,
                label: "Runge-Kutta",
                backgroundColor: "#BF616A",
                borderColor: "#BF616A",
                borderDash: [5, 5],
                data: ys3
            }, {
                fill: false,
                label: "Improved Euler",
                backgroundColor: "#A3BE8C",
                borderColor: "#A3BE8C",
                data: ys2
            }, {
                fill: true,
                label: "Euler",
                backgroundColor: "#D8DEE9",
                borderColor: "#0000",
                data: ys1
            }]
        },
        options: {
            //responsive: true,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
}

/**
 * Returns array of x-values.
 * @param {number} x0 initial x-value.
 * @param {number} h evaluation step.
 * @param {number} N number of steps.
 */
function getXs(x0, h, N) {
    let x = [x0];

    for (i = 0; i < N; i++) {
        x.push(x0 += h);
    }

    return x.map(x => round(x));
}

/**
 * Returns array of y-values.
 * @param {number} x0 initial x-value.
 * @param {number} y0 initial y-value.
 * @param {number} h evaluation step.
 * @param {number} m approximation method of steps.
 * @param {number} y two-variable function.
 */
function getYs(x, y0, h, m, f) {
    let y = [round(y0)];

    for (i = 0; i < x.length; i++) {
        y.push(round(m(x[i], y[i], h, f)));
    }

    return y.map(y => round(y));
}