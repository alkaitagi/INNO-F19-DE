function euler(x, y, h, f) {
    return y + h * f(x, y);
}

function eulerP(x, y, h, f) {
    return y + h * f(x + h / 2, y + h * f(x, y) / 2);
}

function runge(x, y, h, f) {
    let k1 = h * f(x, y);
    let k2 = h * f(x + h / 2, y + k1 / 2);
    let k3 = h * f(x + h / 2, y + k2 / 2);
    let k4 = h * f(x + h, y + k3);
    return y + (k1 + 2 * k2 + 2 * k3 + k4) / 6;
}
