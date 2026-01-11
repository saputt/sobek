export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainCont = document.querySelector('.main-cont');
    if (mainCont) {
        mainCont.scrollTo({ top: 0, behavior: 'smooth' });
    }
}