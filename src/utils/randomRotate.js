export const randomRotate = (maxR, minR) => {
    const min = maxR;
    const max = minR;
    return Math.floor(Math.random() * (max - min + 1) + min);
};