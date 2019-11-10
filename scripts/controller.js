import equation from "./equations/v11.js"
import euler from "./approximations/euler.js"
import eulerP from "./approximations/eulerP.js"
import runge from "./approximations/runge4.js"

console.log(euler.name);

export function recalculate(x0, y0, X, N) {
    // let h = (X - x0) / N;
    // let xs = getXs(x0, h, N);

    // if (window.chart && window.chart !== null) {
    //     window.chart.destroy();
    // }
    // window.chart = new Chart(canvas, {
    //     type: 'line',
    //     data: {
    //         labels: xs,
    //         datasets: [{
    //             fill: false,
    //             label: "Runge-Kutta",
    //             backgroundColor: "#BF616A",
    //             borderColor: "#BF616A",
    //             borderDash: [5, 5],
    //             data: approximate(xs, y0, h, runge, equation.f)
    //         }, {
    //             fill: false,
    //             label: "Improved Euler",
    //             backgroundColor: "#A3BE8C",
    //             borderColor: "#A3BE8C",
    //             data: approximate(xs, y0, h, eulerP, equation.f)
    //         }, {
    //             fill: false,
    //             label: "Euler",
    //             backgroundColor: "#000",
    //             borderColor: "#000",
    //             data: approximate(xs, y0, h, euler, equation.f)
    //         },
    //         {
    //             label: "Exact",
    //             backgroundColor: "#D8DEE9",
    //             borderColor: "#0000",
    //             data: exact(xs, y0, c, y)
    //         }]
    //     },
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: false,
    //         tooltips: {
    //             mode: 'index',
    //             intersect: false,
    //         },
    //         hover: {
    //             mode: 'nearest',
    //             intersect: true
    //         }
    //     }
    // });
}

/**
 * Returns array of x-values.
 * @param {number} x0 initial x-value.
 * @param {number} h evaluation step.
 * @param {number} N number of steps.
 */
function getXs(x0, h, N) {
    let x = [];

    for (i = 0; i <= N; i++) {
        x.push(x0 + i * h);
    }

    return round(x);
}

function exact(x, y0, c, y) {
    let ys = [y0];
    let cv = c(x[0], y0);

    for (i = 0; i < x.length; i++) {
        ys.push(y(x[i], cv));
    }

    return round(ys);
}

/**
 * Returns array of y-values.
 * @param {number} x0 initial x-value.
 * @param {number} y0 initial y-value.
 * @param {number} h evaluation step.
 * @param {number} m approximation method of steps.
 * @param {number} y two-variable function.
 */
function approximate(x, y0, h, m, f) {
    let y = [y0];

    for (i = 0; i < x.length; i++) {
        y.push(m(x[i], y[i], h, f));
    }

    return round(y);
}

function round(x) {
    for (i = 0; i < x.length; i++)
        x[i] = +(Math.round(x[i] + "e+3") + "e-3");
    return x;
}
