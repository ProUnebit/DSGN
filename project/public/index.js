// All the selectors
const btnOpenMenu = document.querySelector('.header__burger-pic');
const btnCloseMenu = document.querySelector('.header__times-pic');
const headerMenu = document.querySelector('.header__menu');

// BLOCKS
// Header
// global close menu function
function closeMenu(e) {
    if (!e.target.matches('.header__menu, .header__menu *')) {
    headerMenu.style.display = '';
    this.removeEventListener('click', closeMenu);
    }
}
// open menu
btnOpenMenu.addEventListener('click', () => {
    headerMenu.style.animation = 'open-menu .35s ease';
    headerMenu.style.display = 'flex';
    setTimeout(() => { document.addEventListener('click', closeMenu) }, 350);
});
// close menu
btnCloseMenu.addEventListener('click', () => {
    headerMenu.style.display = '';
    document.removeEventListener('click', closeMenu);
});

// Projects
