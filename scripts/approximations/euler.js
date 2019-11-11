export default (x, y, h, f) => {
    return y + h * f(x, y);
};
