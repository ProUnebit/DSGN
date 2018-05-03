// The selectors
const googleMap = document.getElementById('map');
const btnOpenMenu = document.querySelector('.header__burger-pic');
const btnCloseMenu = document.querySelector('.header__times-pic');
const headerMenu = document.querySelector('.header__menu');
const linkToProjects = document.querySelector('[href^="#projects"]');
const linkToStudio = document.querySelector('[href^="#studio"]');
const linkToNews = document.querySelector('[href^="#news"]');
const linkToContact = document.querySelector('[href^="#contact"]');
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
const studioPhoto = document.querySelector('.studio__photo');
const studioPhotoChoice = document.querySelector('.studio__photo-choice');
const cvOpen = document.querySelectorAll('.studio__cv');
const cvView = document.querySelector('.studio__cv-more');
const btnCloseCvView = document.querySelector('.studio__close-cv-more-button');
const newsReadMore = document.querySelectorAll('.news__article-read-more');
const btnSubOpen = document.querySelector('.header__menu-item--sub');
const btnSubClose = document.querySelector('.modal-sub__times-pic');
const modalWindow = document.querySelector('.modal-sub');
const modalContent = document.querySelector('.modal-sub__content');
const mailSubForm = document.querySelector('.modal-sub__form');
const mailSubInput = document.querySelectorAll('.modal-sub__input');
const mailSubValGood = document.querySelector('.modal-sub__validation-successfully');
const mailSubValBad = document.querySelector('.modal-sub__validation-unsuccessfully');
const mailSubInputName = document.getElementById('input-name');
const mailSubInputMail = document.getElementById('input-mail');
const mailSubSubmit = document.querySelector('.modal-sub__submit');
const toLiftUpArrow = document.querySelector('.footer__to-lift-up');

// B L O C K S
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
// projects collection
let projectsAllColl = [
    {
        name: 'fondue',
        designer: 'francesco dompieri',
        typology: 'suspension lamp',
        client: 'david design',
        type: 'personal',
        year: '2015',
        img: 'img/project_fondue.jpg',
        like: false
    }, {
        name: 'louis xx',
        designer: 'philippe starck',
        typology: 'chairs',
        client: 'vitra',
        type: 'commercial',
        year: '2012',
        img: 'img/project_louis.jpg',
        like: false
    }, {
        name: '395-396 p22',
        designer: 'patrick norguet',
        typology: 'arimchairs',
        client: 'cassina',
        type: 'commercial',
        year: '2013',
        img: 'img/project_p22.jpg',
        like: false
    }, {
        name: 'sesann',
        designer: 'gianfranco frattini',
        typology: 'arimchairs',
        client: 'cassina',
        type: 'commercial',
        year: '2010',
        img: 'img/project_sesann.jpg',
        like: false
    }, {
        name: 'alessi',
        designer: 'piero lissoni',
        typology: 'decor',
        client: 'alessi',
        type: 'studio lab',
        year: '2017',
        img: 'img/project_alessi.jpg',
        like: false
    }, {
        name: 'potter',
        designer: 'francesco dompieri',
        typology: 'accessory',
        client: 'vitra',
        type: 'commercial',
        year: '2010',
        img: 'img/project_potter.jpg',
        like: false
    }, {
        name: 'tabano',
        designer: 'patrica urquiola',
        typology: 'arimchairs',
        client: 'b&b italia',
        type: 'house',
        year: '2015',
        img: 'img/project_tabano.jpg',
        like: false
    }, {
        name: 'fiji',
        designer: 'cuno frommherz',
        typology: 'arimchairs',
        client: 'b&b italia',
        type: 'house',
        year: '2015',
        img: 'img/project_fiji.jpg',
        like: false
    }
];
// result sort all
let projectsAll = [];
// result sort timeline
let projectsTimelineAll = [];
let projects_2017 = [];
let projects_2015 = [];
let projects_2013 = [];
let projects_2012 = [];
let projects_2010 = [];
// result sort type
let projectsTypeAll = [];
let projectsHouse = [];
let projectsCommercial = [];
let projectsPersonal= [];
let projectsStudioLab = [];
// points for choice sorting
let yearPoint;
let typePoint;

// timeline functions
// all
function timelineSortAll(projectsArr) {

    yearPoint = null;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector.style.display = "";
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
        let varSelector = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}
// any one
function timelineSort(projectsArr, yearArg) {

    yearPoint = yearArg;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector.style.display = "";
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
        let varSelector = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}
// activated sort-item
function timelineActive(selector) {
    let pseudoArr = document.querySelectorAll('.projects__timeline-item');
    for ( let i = 0; i < pseudoArr.length; i++ ) {
        pseudoArr[i].classList.remove('projects__timeline-item--active');
    }
    selector.classList.add('projects__timeline-item--active');
}
// choice sort-item
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

// type functions
// all
function typeSortAll(projectsArr) {

    typePoint = null;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector.style.display = "";
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
        let varSelector = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}
// any one
function typeSort(projectsArr, typeArg) {

    typePoint = typeArg;

    for ( let z = 0; z < projectsAllColl.length; z++ ) {
        let varSelector = document.querySelector(`.projects__product-miniature--${z+1}`);
        varSelector.style.display = "";
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
        let varSelector = document.querySelector(`.projects__product-miniature--${y+1}`);
        varSelector.style.display = "none";
    }
    for ( let l = 0; l < projectsLikes.length; l++ ) {
        projectsLikes[l].classList.remove('likes-active');
    }
}
// activated sort-item
function typeActive(selector) {
    let pseudoArr = document.querySelectorAll('.projects__nav-item');
    for ( let i = 0; i < pseudoArr.length; i++ ) {
        pseudoArr[i].classList.remove('projects__nav-item--active');
    }
    selector.classList.add('projects__nav-item--active');
}
// choice sort-item
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
// add "like"
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
// open any one single project
Array.from(btnViewProject).forEach( el => {
    el.addEventListener('click', () => {
        singleProductView.style.animation = 'p-s-open-go .4s ease-in';
        singleProductView.style.opacity = '1';
        singleProductView.style.display = 'block';

        let namePoint = el.parentNode.querySelector('.projects__product-name').textContent;

        let name = singleProductView.querySelector('.projects__product-name');
        let designer = singleProductView.querySelector('.projects__product-designer-value');
        let typology = singleProductView.querySelector('.projects__product-typology-value');
        let client = singleProductView.querySelector('.projects__product-client-value');
        let year = singleProductView.querySelector('.projects__product-year-value');

        switch (namePoint) {
            case projectsAllColl[0].name:
                document.singleProductMainPic.src = 'img/project_single_fondue.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_fondue-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_fondue-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_fondue.jpg';
                name.textContent = projectsAllColl[0].name;
                designer.textContent = projectsAllColl[0].designer;
                typology.textContent = projectsAllColl[0].typology;
                client.textContent = projectsAllColl[0].client;
                year.textContent = projectsAllColl[0].year;
            break;
            case projectsAllColl[1].name:
                document.singleProductMainPic.src = 'img/project_single_louis.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_louis-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_louis-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_louis.jpg';
                name.textContent = projectsAllColl[1].name;
                designer.textContent = projectsAllColl[1].designer;
                typology.textContent = projectsAllColl[1].typology;
                client.textContent = projectsAllColl[1].client;
                year.textContent = projectsAllColl[1].year;
            break;
            case projectsAllColl[2].name:
                document.singleProductMainPic.src = 'img/project_single_p22.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_p22-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_p22-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_p22.jpg';
                name.textContent = projectsAllColl[2].name;
                designer.textContent = projectsAllColl[2].designer;
                typology.textContent = projectsAllColl[2].typology;
                client.textContent = projectsAllColl[2].client;
                year.textContent = projectsAllColl[2].year;
            break;
            case projectsAllColl[3].name:
                document.singleProductMainPic.src = 'img/project_single_sesann.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_sesann-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_sesann-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_sesann.jpg';
                name.textContent = projectsAllColl[3].name;
                designer.textContent = projectsAllColl[3].designer;
                typology.textContent = projectsAllColl[3].typology;
                client.textContent = projectsAllColl[3].client;
                year.textContent = projectsAllColl[3].year;
            break;
            case projectsAllColl[4].name:
                document.singleProductMainPic.src = 'img/project_single_alessi.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_alessi-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_alessi-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_alessi.jpg';
                name.textContent = projectsAllColl[4].name;
                designer.textContent = projectsAllColl[4].designer;
                typology.textContent = projectsAllColl[4].typology;
                client.textContent = projectsAllColl[4].client;
                year.textContent = projectsAllColl[4].year;
            break;
            case projectsAllColl[5].name:
                document.singleProductMainPic.src = 'img/project_single_potter.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_potter-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_potter-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_potter.jpg';
                name.textContent = projectsAllColl[5].name;
                designer.textContent = projectsAllColl[5].designer;
                typology.textContent = projectsAllColl[5].typology;
                client.textContent = projectsAllColl[5].client;
                year.textContent = projectsAllColl[5].year;
            break;
            case projectsAllColl[6].name:
                document.singleProductMainPic.src = 'img/project_single_tabano.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_tabano-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_tabano-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_tabano.jpg';
                name.textContent = projectsAllColl[6].name;
                designer.textContent = projectsAllColl[6].designer;
                typology.textContent = projectsAllColl[6].typology;
                client.textContent = projectsAllColl[6].client;
                year.textContent = projectsAllColl[6].year;
            break;
            case projectsAllColl[7].name:
                document.singleProductMainPic.src = 'img/project_single_fiji.jpg';
                document.ingleProductAnotherPic_1.src = 'img/project_single_fiji-1.jpg';
                document.ingleProductAnotherPic_2.src = 'img/project_single_fiji-2.jpg';
                document.ingleProductAnotherPic_3.src = 'img/project_single_fiji.jpg';
                name.textContent = projectsAllColl[7].name;
                designer.textContent = projectsAllColl[7].designer;
                typology.textContent = projectsAllColl[7].typology;
                client.textContent = projectsAllColl[7].client;
                year.textContent = projectsAllColl[7].year;
            break;
        }
    })
});
// choise pic in single project
Array.from(singleProductMiniImages).forEach( el => {
    el.addEventListener('click', () => {
        for ( let i = 0; i < singleProductMiniImages.length; i++) {
            singleProductMiniImages[i].style.border = '';
        }
        document.singleProductMainPic.src = el.src;
        el.style.border = '2px solid rgba(235, 178, 64, 1)';
    })
});
// close any one single project
btnCloseSingleProduct.addEventListener('click', () => {
    singleProductView.style.animation = 'p-s-close-go .3s ease-in-out';
    singleProductView.style.opacity = '0';
    setTimeout(() => { singleProductView.style.display = ''; }, 350)
    for ( let i = 0; i < singleProductMiniImages.length; i++) {
        singleProductMiniImages[i].style.border = '';
    }
});

// Studio
// mini-slider photo choice
function photoChoice(sel, numPic) {
    sel.addEventListener('click', () => {
        for ( var i = 0; i < studioPhotoChoice.children.length; i++) {
            studioPhotoChoice.children[i].classList.remove('studio__photo-active');
        }
        studioPhoto.src = `img/studio_img${numPic+1}.jpg`;
        sel.classList.add('studio__photo-active');
    });
}
// calls
photoChoice(studioPhotoChoice.children[0], 0);
photoChoice(studioPhotoChoice.children[1], 1);
photoChoice(studioPhotoChoice.children[2], 2);
photoChoice(studioPhotoChoice.children[3], 3);
// cv-person view open
Array.from(cvOpen).forEach( el => {
    el.addEventListener('click', () => {
        cvView.style.display = 'flex';
    })
});
// cv-person view close
btnCloseCvView.addEventListener('click', () => {
    cvView.style.display = '';
});

// News
// read more - hover
Array.from(newsReadMore).forEach( el => {
    el.addEventListener('mouseover', () => {
        el.parentNode.children[0].style.background = ' linear-gradient(65deg, rgba(212, 237, 191, 0.9) 35%, transparent 100%)';
    })
    el.addEventListener('mouseout', () => {
        el.parentNode.children[0].style.background = '';
    })
});

// Footer
// google map
function initMap() {
    let options = {
        zoom: 12,
        center: new google.maps.LatLng(33.79518714128755,-118.15709964257815),
        mapTypeId: 'terrain'
    };
    let image = {
    url: 'img/map_pin.svg',
    scaledSize: new google.maps.Size(45, 60)
    };
    let map = new google.maps.Map(googleMap, options);
    let marker = new google.maps.Marker({
        map: map,
        position: options.center,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });
    let infowindow = new google.maps.InfoWindow({
        content:'<strong style="font-weight: 600; color: #7bcfc4">DSGN</strong><br>California, Long Beach<br>'
    });
    google.maps.event.addListener(marker, 'click', () => {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
};

// Modal sub
// modal open
btnSubOpen.addEventListener('click', () => {
    modalWindow.style.animation = 'modal-open-go .65s ease-out';
    modalWindow.style.display = 'block';
    modalContent.style.animation = 'modal-content-go .35s linear';
    modalContent.style.display = 'block';
    headerMenu.style.display = '';
});
// modal close
btnSubClose.addEventListener('click', () => {
    modalWindow.style.animation = 'modal-close-go .30s ease-out';
    modalContent.style.animation = 'modal-content-out-go .30s linear';
    setTimeout( () => {
        modalWindow.style.display = '';
        modalContent.style.display = '';
    }, 300);
});
// input auto value
function blurInput(e) {
    this.value = (this.value == '') ? this.title : this.value;
};

function focusInput(e) {
    this.value = (this.value == this.title) ? '' : this.value;
};
// to appoint
Array.from(mailSubInput).forEach( el => {
    el.addEventListener('blur', blurInput);
    el.addEventListener('focus', focusInput);
});
// validation
// regular expression for #input-mail (check), example: test@test.com
let regExForMailSub = /\S+@\S+\.\S+/;
// check #input-name & #input-mail
function checkInput() {
    if (mailSubInputName.value.trim() !== ''
    &&
    mailSubInputName.value !== mailSubInputName.title
    &&
    regExForMailSub.test(mailSubInputMail.value)) {
        mailSubSubmit.style.backgroundColor = '#7bcfc4';
        mailSubSubmit.style.cursor = 'pointer';
        mailSubSubmit.disabled = false;
    } else {
        mailSubSubmit.style.backgroundColor = '';
        mailSubSubmit.style.cursor = 'not-allowed';
        mailSubSubmit.disabled = true;
    }
}
// submitted data and preventDefault method for sub-form, reload page -> to appoint default value
mailSubForm.addEventListener('submit', e => {
    e.preventDefault();

    if (mailSubInputName.value == mailSubInputName.title && mailSubInputMail.value == mailSubInputMail.title) return;

    mailSubValGood.innerHTML = `${mailSubInputName.value}, ${mailSubValGood.textContent} <i class="fas fa-spinner fa-spin"></i>`;
    mailSubValGood.style.display = 'block';
    setTimeout( () => { location.reload(); }, 3500);
    mailSubInputName.value = mailSubInputName.title;
    mailSubInputMail.value = mailSubInputMail.title;
});

// Scroll functionality
// footer -> to lift up
function toLiftUp() {
    let t;
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -50);
        t = setTimeout('toLiftUp()', 10);
    } else clearTimeout(t);
    return false;
}
// call
toLiftUpArrow.onclick = toLiftUp;
// scrolling to sections (#projects, #studio, #news, #contact)
function ScrollTo(e) {
    e.preventDefault();
    const speed = 0.5;
    let w = window.pageYOffset;
    let hash = this.href.replace(/[^#]*(.*)/, '$1');
    let t = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
        if (start === null) start = time;
        let progress = time - start;
        let r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
        window.scrollTo(0, r);
        if (r !== w + t) {
            requestAnimationFrame(step);
        } else {
            location.hash = hash;
        }
    }
}
// listeners
linkToProjects.addEventListener('click', ScrollTo, false);
linkToStudio.addEventListener('click', ScrollTo, false);
linkToNews.addEventListener('click', ScrollTo, false);
linkToContact.addEventListener('click', ScrollTo, false);

// Onload
// auto load obj. (projectsAllColl) in section "projects"
document.addEventListener("DOMContentLoaded", timelineSortAll(projectsAll));
