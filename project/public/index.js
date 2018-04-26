// The selectors
const btnOpenMenu = document.querySelector('.header__burger-pic');
const btnCloseMenu = document.querySelector('.header__times-pic');
const headerMenu = document.querySelector('.header__menu');
const productMiniature = document.querySelector('.projects__product-miniature');
const timelineAll = document.querySelector('.projects__timeline-item--all');
const timeline_2017 = document.querySelector('.projects__timeline-item--2017');
const timeline_2015 = document.querySelector('.projects__timeline-item--2015');
const timeline_2013 = document.querySelector('.projects__timeline-item--2013');
const timeline_2012 = document.querySelector('.projects__timeline-item--2012');
const timeline_2010 = document.querySelector('.projects__timeline-item--2010');
const typeAll = document.querySelector('.projects__nav-item--all');
const typeHouse = document.querySelector('.projects__nav-item--house');
const typeCommercial = document.querySelector('.projects__nav-item--commercial');
const typePersonal = document.querySelector('.projects__nav-item--personal');
const typeStudioLab = document.querySelector('.projects__nav-item--studio-lab');
const btnViewProject = document.querySelectorAll('.projects__product-view');
const singleProductView = document.querySelector('.projects__product-single');
const singleProductMiniImages= document.querySelectorAll('.projects__product-single-another-img');
const btnCloseSingleProduct = document.querySelector('.projects__times-pic');
const projectsLikes = document.querySelectorAll('.projects__product-likes');

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
    {name: 'fondue', designer: 'francesco dompieri', typology: 'suspension lamp', client: 'david design', type: 'personal', year: '2015', img: 'img/project_fondue.jpg', like: false},
    {name: 'louis xx', designer: 'philippe starck', typology: 'chairs', client: 'vitra', type: 'commercial', year: '2012', img: 'img/project_louis.jpg', like: false},
    {name: '395-396 p22', designer: 'patrick norguet', typology: 'arimchairs', client: 'cassina', type: 'commercial', year: '2013', img: 'img/project_p22.jpg', like: false},
    {name: 'sesann', designer: 'gianfranco frattini', typology: 'arimchairs', client: 'cassina', type: 'commercial', year: '2010', img: 'img/project_sesann.jpg', like: false},
    {name: 'alessi' , designer: 'piero lissoni', typology: 'decor', client: 'alessi', type: 'studio lab', year: '2017', img: 'img/project_alessi.jpg', like: false},
    {name: 'potter', designer: 'francesco dompieri', typology: 'accessory', client: 'vitra', type: 'commercial', year: '2010', img: 'img/project_potter.jpg', like: false},
    {name: 'tabano', designer: 'patrica urquiola', typology: 'arimchairs', client: 'b&b italia', type: 'house', year: '2015', img: 'img/project_tabano.jpg', like: false},
    {name: 'fiji', designer: 'cuno frommherz', typology: 'arimchairs', client: 'b&b italia', type: 'house', year: '2015', img: 'img/project_fiji.jpg', like: false}
];

let projectsAll = [];

let projectsTimelineAll = [];
let projects_2017 = [];
let projects_2015 = [];
let projects_2013 = [];
let projects_2012 = [];
let projects_2010 = [];

let projectsTypeAll = [];
let projectsHouse = [];
let projectsCommercial = [];
let projectsPersonal= [];
let projectsStudioLab = [];

let yearPoint;
let typePoint;

// timeline
function timelineSortAll(projectsArr) {

    yearPoint = null;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.display = "";
    }
    for ( var i = 0; i < projectsAllColl.length; i++ ) {
        if (typePoint) {
            if ((projectsAllColl[i].year == '2010' || '2012' || '2013' || '2015' || '2017') && (projectsAllColl[i].type == typePoint)) {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (!typePoint) {
            if (projectsAllColl[i].year == '2010' || '2012' || '2013' || '2015' || '2017') {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (typePoint && yearPoint) {
            if ((projectsAllColl[i].type == typePoint) && (projectsAllColl[i].year == yearPoint)) {
                projectsArr.push(projectsAllColl[i]);
            }
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
        varSelector2.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}

function timelineSort(projectsArr, yearArg) {

    yearPoint = yearArg;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.display = "";
    }
    for ( let i = 0; i < projectsAllColl.length; i++ ) {
        if (typePoint) {
            if (projectsAllColl[i].type == typePoint && projectsAllColl[i].year == yearArg) {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (projectsAllColl[i].year == yearArg) {
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
        varSelector2.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}

function timelineActive(selector) {
    let pseudoArr = document.querySelectorAll('.projects__timeline-item');
    for ( let i = 0; i < pseudoArr.length; i++ ) {
        pseudoArr[i].classList.remove('projects__timeline-item--active');
    }
    selector.classList.add('projects__timeline-item--active');
}

timelineAll.addEventListener('click', () => {
    projectsTimelineAll = [];
    timelineSortAll(projectsTimelineAll);
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

// type
function typeSortAll(projectsArr) {

    typePoint = null;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.display = "";
    }
    for ( var i = 0; i < projectsAllColl.length; i++ ) {
        if (yearPoint) {
            if ((projectsAllColl[i].type == 'house' || 'commercial' || 'personal' || 'studio lab') && (projectsAllColl[i].year == yearPoint)) {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (!yearPoint) {
            if (projectsAllColl[i].type == 'house' || 'commercial' || 'personal' || 'studio lab') {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (typePoint && yearPoint) {
            if ((projectsAllColl[i].type == typePoint) && (projectsAllColl[i].year == yearPoint)) {
                projectsArr.push(projectsAllColl[i]);
            }
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
        varSelector2.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}

function typeSort(projectsArr, typeArg) {

    typePoint = typeArg;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector3 = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector3.style.display = "";
    }
    for ( let i = 0; i < projectsAllColl.length; i++ ) {
        if (yearPoint) {
            if (projectsAllColl[i].year == yearPoint && projectsAllColl[i].type == typeArg) {
                projectsArr.push(projectsAllColl[i]);
            }
        } else if (projectsAllColl[i].type == typeArg) {
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
        varSelector2.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}

function typeActive(selector) {
    let pseudoArr = document.querySelectorAll('.projects__nav-item');
    for ( let i = 0; i < pseudoArr.length; i++ ) {
        pseudoArr[i].classList.remove('projects__nav-item--active');
    }
    selector.classList.add('projects__nav-item--active');
}

typeAll.addEventListener('click', () => {
    projectsTypeAll = [];
    typeSortAll(projectsTypeAll);
    typeActive(typeAll);
});

typeHouse.addEventListener('click', () => {
    projectsHouse = [];
    typeSort(projectsHouse, 'house');
    typeActive(typeHouse);
});

typeCommercial.addEventListener('click', () => {
    projectsCommercial = [];
    typeSort(projectsCommercial, 'commercial');
    typeActive(typeCommercial);
});

typePersonal.addEventListener('click', () => {
    projectsPersonal = [];
    typeSort(projectsPersonal, 'personal');
    typeActive(typePersonal);
});

typeStudioLab.addEventListener('click', () => {
    projectsStudioLab = [];
    typeSort(projectsStudioLab, 'studio lab');
    typeActive(typeStudioLab);
});
// auto load obj.
document.addEventListener("DOMContentLoaded", timelineSortAll(projectsAll));
// likes
Array.from(projectsLikes).forEach( el => {
    el.addEventListener('click', (e) => {
        if (el.classList.contains('likes-active')) {
            let likes = el.textContent;
            let result = `+ ${Number(likes.substring(2)) - 1}`;
            el.textContent = result;
            el.classList.remove('likes-active');
        } else {
            let likes = el.textContent;
            let result = `+ ${Number(likes.substring(2)) + 1}`;
            el.textContent = result;
            el.classList.add('likes-active');
        }
    })
});
// single product
// open s.p.
Array.from(btnViewProject).forEach( el => {
    el.addEventListener('click', () => {
        singleProductView.style.animation = 'p-s-open-go .4s ease-in';
        singleProductView.style.opacity = '1';
        singleProductView.style.display = 'block';

        let namePoint = el.parentNode.querySelector('.projects__product-name').textContent;

        if (namePoint == projectsAllColl[0].name) {

            document.singleProductMainPic.src = 'img/project_single_fondue.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_single_fondue-1.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_single_fondue-2.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[0].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[0].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[0].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[0].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[0].year;

        } else if (namePoint == projectsAllColl[1].name) {

            document.singleProductMainPic.src = 'img/project_louis.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_louis.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_louis.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[1].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[1].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[1].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[1].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[1].year;

        } else if (namePoint == projectsAllColl[2].name){

            document.singleProductMainPic.src = 'img/project_p22.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_p22.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_single_fondue.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[2].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[2].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[2].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[2].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[2].year;

        } else if (namePoint == projectsAllColl[3].name){

            document.singleProductMainPic.src = 'img/project_sesann.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_sesann.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_sesann.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[3].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[3].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[3].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[3].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[3].year;

        } else if (namePoint == projectsAllColl[4].name){

            document.singleProductMainPic.src = 'img/project_alessi.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_alessi.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_alessi.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[4].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[4].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[4].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[4].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[4].year;

        } else if (namePoint == projectsAllColl[5].name){

            document.singleProductMainPic.src = 'img/project_potter.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_potter.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_potter.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[5].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[5].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[5].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[5].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[5].year;

        } else if (namePoint == projectsAllColl[6].name){

            document.singleProductMainPic.src = 'img/project_tabano.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_tabano.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_tabano.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[6].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[6].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[6].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[6].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[6].year;

        } else if (namePoint == projectsAllColl[7].name){

            document.singleProductMainPic.src = 'img/project_fiji.jpg';
            document.ingleProductAnotherPic_1.src = 'img/project_fiji.jpg';
            document.ingleProductAnotherPic_2.src = 'img/project_fiji.jpg';
            singleProductView.querySelector('.projects__product-name').textContent = projectsAllColl[7].name;
            singleProductView.querySelector('.projects__product-designer-value').textContent = projectsAllColl[7].designer;
            singleProductView.querySelector('.projects__product-typology-value').textContent = projectsAllColl[7].typology;
            singleProductView.querySelector('.projects__product-client-value').textContent = projectsAllColl[7].client;
            singleProductView.querySelector('.projects__product-year-value').textContent = projectsAllColl[7].year;
        }
    })
});
// choise pic
Array.from(singleProductMiniImages).forEach( el => {
    el.addEventListener('click', () => {
        document.singleProductMainPic.src = el.src;
    })
});
// close s.p.
btnCloseSingleProduct.addEventListener('click', () => {
    singleProductView.style.animation = 'p-s-close-go .3s ease-in-out';
    singleProductView.style.opacity = '0';
    setTimeout(() => { singleProductView.style.display = ''; }, 350)
});

// Studio
