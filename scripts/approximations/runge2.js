export default (x, y, h, f) => {
    let k1 = h * f(x, y);
    let k2 = h * f(x + h, y + k1);
    return y + (k1 + k2) / 2;
}
