export const zeroFill = (number, fill=2) => {
    let res = number.toString();
    while(res.length < fill) {
        res = '0' + res;
    }
    return res;
};
