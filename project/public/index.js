// The selectors
const btnOpenMenu = document.querySelector('.header__burger-pic');
const btnCloseMenu = document.querySelector('.header__times-pic');
const headerMenu = document.querySelector('.header__menu');
const timelineAll = document.querySelector('.projects__timeline-item--all');
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
let projectsAllColl = [
    {name: 'fondue', designer: 'francesco dompieri', typology: 'suspension lamp', client: 'david design', year: '2015', img: 'img/project_fondue.jpg'},
    {name: 'louis xx', designer: 'philippe starck', typology: 'chairs', client: 'vitra', year: '2012', img: 'img/project_louis.jpg'},
    {name: '395-396 p22', designer: 'patrick norguet', typology: 'arimchairs', client: 'cassina', year: '2013', img: 'img/project_p22.jpg'},
    {name: 'sesann', designer: 'gianfranco frattini', typology: 'arimchairs', client: 'cassina', year: '2010', img: 'img/project_sesann.jpg'},
    {name: 'alessi' , designer: 'piero lissoni', typology: 'decor', client: 'alessi', year: '2017', img: 'img/project_alessi.jpg'},
    {name: 'potter', designer: 'francesco dompieri', typology: 'accessory', client: 'vitra', year: '2010', img: 'img/project_potter.jpg'},
    {name: 'tabano', designer: 'patrica urquiola', typology: 'arimchairs', client: 'b&b italia', year: '2015', img: 'img/project_tabano.jpg'},
    {name: 'fiji', designer: 'cuno frommherz', typology: 'arimchairs', client: 'b&b italia', year: '2015', img: 'img/project_fiji.jpg'}
];

let projectsAll = [];
let projects_2017 = [];
let projects_2015 = [];
let projects_2013 = [];
let projects_2012 = [];
let projects_2010 = [];

function addProjectsAll(projectsArr) {
    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.visibility = "visible";
    }
    for ( var i = 0; i < projectsAllColl.length; i++ ) {
        if (projectsAllColl[i].year == '2010' || '2012' || '2013' || '2015' || '2017') {
            projectsArr.push(projectsAllColl[i]);
        }
    }
    for ( let x = 0; x < projectsArr.length; x++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${x+1}`);
        varSelector.querySelector('.projects__product-name').textContent = projectsArr[x].name;
        varSelector.querySelector('.projects__product-designer-value').textContent = projectsArr[x].designer;
        varSelector.querySelector('.projects__product-typology-value').textContent = projectsArr[x].typology;
        varSelector.querySelector('.projects__product-client-value').textContent = projectsArr[x].client;
        varSelector.querySelector('.projects__product-year-value').textContent = projectsArr[x].year;
        varSelector.style.background = `url(${projectsArr[x].img}) no-repeat`;
        varSelector.style.backgroundSize = 'cover';
        varSelector.style.backgroundPosition = 'center';
    }
    for ( let y = projectsArr.length; y < projectsAllColl.length; y++ ) {
        let varSelector2 = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector2.style.visibility = "hidden";
    }
}

function timelineSort(projectsArr, yearArg) {
    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.visibility = "visible";
    }
    for ( let i = 0; i < projectsAllColl.length; i++ ) {
        if (projectsAllColl[i].year == yearArg) {
            projectsArr.push(projectsAllColl[i]);
        }
    }
    for ( let x = 0; x < projectsArr.length; x++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${x+1}`);
        varSelector.querySelector('.projects__product-name').textContent = projectsArr[x].name;
        varSelector.querySelector('.projects__product-designer-value').textContent = projectsArr[x].designer;
        varSelector.querySelector('.projects__product-typology-value').textContent = projectsArr[x].typology;
        varSelector.querySelector('.projects__product-client-value').textContent = projectsArr[x].client;
        varSelector.querySelector('.projects__product-year-value').textContent = projectsArr[x].year;
        varSelector.style.background = `url(${projectsArr[x].img}) no-repeat`;
        varSelector.style.backgroundSize = 'cover';
        varSelector.style.backgroundPosition = 'center';
    }
    for ( let y = projectsArr.length; y < projectsAllColl.length; y++ ) {
        let varSelector2 = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector2.style.visibility = "hidden";
    }
}

function timelineActive(selector) {
    let pseudoArr = document.querySelectorAll('.projects__timeline-item');
    for ( let i = 0; i < pseudoArr.length; i++ ) {
        pseudoArr[i].classList.remove('projects__timeline-item--active');
    }
    selector.classList.add('projects__timeline-item--active');
}

document.addEventListener("DOMContentLoaded", addProjectsAll(projectsAll));
// &
timelineAll.addEventListener('click', () => {
    projectsAll = [];
    addProjectsAll(projectsAll);
    timelineActive(timelineAll);
});

timeline_2017.addEventListener('click', () => {
    projects_2017 = [];
    timelineSort(projects_2017, 2017);
    timelineActive(timeline_2017);
});

timeline_2015.addEventListener('click', () => {
    projects_2015 = [];
    timelineSort(projects_2015, 2015);
    timelineActive(timeline_2015);
});

timeline_2013.addEventListener('click', () => {
    projects_2013 = [];
    timelineSort(projects_2013, 2013);
    timelineActive(timeline_2013);
});

timeline_2012.addEventListener('click', () => {
    projects_2012 = [];
    timelineSort(projects_2012, 2012);
    timelineActive(timeline_2012);
});

timeline_2010.addEventListener('click', () => {
    projects_2010 = [];
    timelineSort(projects_2010, 2010);
    timelineActive(timeline_2010);
});

// Studio
