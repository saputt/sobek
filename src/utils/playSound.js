export const playSound = (fileName) => {
    const audio = new Audio(`./assets/sounds/${fileName}`);
    audio.volume = 0.5
    audio.play().catch(err => console.log("User must interact with the page first."));
};