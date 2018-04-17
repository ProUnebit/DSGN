// All the selectors
const btnOpenMenu = document.querySelector('.header__burger-pic');
const btnCloseMenu = document.querySelector('.header__times-pic');
const headerMenu = document.querySelector('.header__menu');
const timeline_2017 = document.querySelector('.projects__timeline-item--2017');
const timeline_2015 = document.querySelector('.projects__timeline-item--2015');
const timeline_2013 = document.querySelector('.projects__timeline-item--2013');
const timeline_2012 = document.querySelector('.projects__timeline-item--2012');
const timeline_2010 = document.querySelector('.projects__timeline-item--2010');

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
let projectsAll = [
    {name: 'fondue', typology: 'suspension lamp', year: '2015'},
    {name: 'louis xx', typology: 'chairs', year: '2012'},
    {name: '395-396 p22', typology: 'arimchairs', year: '2013'},
    {name: 'sesann', typology: 'arimchairs', year: '2010'},
    {name: 'alessi' , typology: 'decor', year: '2017'},
    {name: 'potter', typology: 'accessory', year: '2010'},
    {name: 'tabano', typology: 'arimchairs', year: '2015'},
    {name: 'fiji', typology: 'arimchairs', year: '2015'}
];

let projects_2017 = [];
let projects_2015 = [];
let projects_2013 = [];
let projects_2012 = [];
let projects_2010 = [];

timeline_2015.addEventListener('click', () => {
    for ( var i = 0; i < projectsAll.length; i++ ) {
        if (projectsAll[i].year === '2015') {
            projects_2015.push(projectsAll[i]);
        }
    }
    for ( let x = 0; x < projects_2015.length; x++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${x+1}`);
        varSelector.innerHTML = projects_2015[x].name;
    }

    for ( let y = projects_2015.length; y < projectsAll.length; y++ ) {
        let varSelector2 = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector2.style.visibility = "hidden";
    }
});
