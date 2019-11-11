export default (x, y, h, f) => {
    return y + h * f(x + h / 2, y + h * f(x, y) / 2);
}
