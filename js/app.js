

window.onscroll = () => {

    let scroll = window.scrollY;

    const levelScroll = document.querySelector('.scroll');

    if (scroll > 300) {
        levelScroll.classList.add('activo');
    }
    else{
        levelScroll.classList.remove('activo');
    }
}