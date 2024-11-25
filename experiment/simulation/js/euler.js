function f1(x, y) {
    return Math.pow(x, 2) / (Math.pow(y, 2) + 1);
}
function gety(x1, xn, y1, n) {
    let h = (xn - x1) / n;
    let y = [];
    y[0] = y1;
    for (let i = 1; i <= n; i++) {
        //   y[i]=y[i-1]+h*f1(x1,y[i-1]);
        let s1 = h * f1(x1, y[i - 1]);
        let s2 = h * f1(x1 + (h / 2), y[i - 1] + (s1 / 2));
        let s3 = h * f1(x1 + (h / 2), y[i - 1] + (s2 / 2));
        let s4 = h * f1(x1 + h, y[i - 1] + s3);
        let s = (s1 + (2 * s2) + (2 * s3) + s4) / 6;
        y[i] = y[i - 1] + s;
        x1 += h;
    }
    return y;
}
function f2(x, y) {
    return -2 * Math.pow(x, 3) + 12 * Math.pow(x, 2) - 20 * x + 8.5;
}
function gety2(x1, xn, y1, n) {
    let h = (xn - x1) / n;
    let y = [];
    y[0] = y1;
    for (let i = 1; i <= n; i++) {
        // y[i] = y[i - 1] + h * f2(x1, y[i - 1]);
        let s1 = h * f2(x1, y[i - 1]);
        let s2 = h * f2(x1 + (h / 2), y[i - 1] + (s1 / 2));
        let s3 = h * f2(x1 + (h / 2), y[i - 1] + (s2 / 2));
        let s4 = h * f2(x1 + h, y[i - 1] + s3);
        let s = (s1 + (2 * s2) + (2 * s3) + s4) / 6;
        y[i] = y[i - 1] + s;
        x1 += h;
    }
    return y;
}
function f3(x, y) {
    return x - Math.pow(y, 2);
}
function gety3(x1, xn, y1, n) {
    let h = (xn - x1) / n;
    let y = [];
    y[0] = y1;
    for (let i = 1; i <= n; i++) {
        // y[i] = y[i - 1] + h * f3(x1, y[i - 1]);
        let s1 = h * f3(x1, y[i - 1]);
        let s2 = h * f3(x1 + (h / 2), y[i - 1] + (s1 / 2));
        let s3 = h * f3(x1 + (h / 2), y[i - 1] + (s2 / 2));
        let s4 = h * f3(x1 + h, y[i - 1] + s3);
        let s = (s1 + (2 * s2) + (2 * s3) + s4) / 6;
        y[i] = y[i - 1] + s;
        x1 += h;
    }
    return y;
}
//# sourceMappingURL=euler.js.map