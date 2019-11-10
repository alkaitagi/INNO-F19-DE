function getPoints(x0, y0, X, N, m, f) {
    let p = [{ x: x0, y: y0 }];
    let h = (X - x0) / N;

    for (i = 0; i < N; i++) {
        points.push({ x: x0 += h, y: m(p[i].x, p[i].y, h, f) });
    }
    return points;
}

function euler(x, y, h, f) {
    return x + h * f(x, y)
}

function eulerP(x, y, h, f) {
    return y + h * f(x + h / 2, y + h * f(x, y) / 2);
}

function runge(x, y, h, f) {
    let k1 = f(x, y);
    let k2 = f(x + h / 2, y + h * k1 / 2);
    let k3 = f(x + h / 2, y + h * k2 / 2);
    let k4 = f(x + h, y + h * k3);
    return y + h * (k1 + 2 * k2 + 2 * k3 + k4) / 6;
}
