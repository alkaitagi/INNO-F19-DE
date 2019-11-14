import exact from "./graphs/exact/v11.js"
import euler from "./graphs/approximate/euler.js"
import eulerP from "./graphs/approximate/eulerP.js"
import runge4 from "./graphs/approximate/runge4.js"

const approximations = [runge4, eulerP, euler];

export function recalculate(x0, y0, X, N0, N) {
    let inputs = exact.calculateInputs(x0, X, N);

    exact.updateValues(inputs, y0);
    approximations.forEach(function (a) {
        a.updateValues(inputs, y0, exact.equation.derivative);
        a.updateLocalErrors(exact.values);
        a.updateGlobalErrors(
            x0,
            y0,
            exact.equation.derivative,
            X,
            exact.values[exact.values.length - 1],
            N0,
            N
        );
    });

    window.CInput.value = exact.constant;
    inputs = exact.round(inputs);

    updateChart(
        window.charts.function,
        inputs,
        [
            ...approximations.map(a => a.createDataset(a.values)),
            exact.createDataset(exact.values),
        ],
    );
    updateChart(
        window.charts.localError,
        inputs,
        [
            ...approximations.map(a => a.createDataset(a.localErrors)),
        ],
    );
    updateChart(
        window.charts.globalError,
        Array.from({ length: N - N0 + 1 }, (x, i) => i + N0),
        [
            ...approximations.map(a => a.createDataset(a.globalErrors)),
        ],
    );
}

function updateChart(chart, labels, datasets) {
    chart.data = {
        labels: labels,
        datasets: datasets,
    }
    chart.update();
}
