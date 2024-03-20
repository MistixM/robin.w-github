const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_btn');
const body = document.querySelector('body');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtn.style.position = 'fixed';
        navBtn.style.top = '45px';
        navBtn.style.right = '20px';
    } else {
        navBtn.style.position = 'inherit';
    }
}