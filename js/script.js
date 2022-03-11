const headerHeading = document.querySelector('.header-heading');
const aboutHeading = document.querySelector('.about-heading');
const aboutPara = document.querySelector('.about-p');
const diskDiagram = document.querySelector('.diskDiagram');
const require = document.querySelector('.require');
const content = document.querySelector('.content');
const footerHeading = document.querySelector('#footerHeading');

// Reveal Elements at page loading
window.addEventListener("load", () => {
    headerHeading.style.transform = "translateY(0)";
});

// Hide and display element when scroll
window.onscroll = () => {

    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        aboutHeading.style.transform = "translateY(0)";
        aboutPara.style.transform = "translateX(0)";
        aboutHeading.style.transition = "1s";
        aboutPara.style.transition = "1s";
        diskDiagram.style.opacity = "1";
        diskDiagram.style.transition = "1s";
    }else{
        aboutHeading.style.transform = "translateY(-1000px)";
        aboutPara.style.transform = "translateX(-2000px)";
        aboutHeading.style.transition = "1s";
        aboutPara.style.transition = "1s";
        diskDiagram.style.opacity = "0";
        diskDiagram.style.transition = "1s";
    }

    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        require.style.opacity = "1";
        require.style.transition = "1s";

        content.style.opacity = "1";
        content.style.transition = "1s";
    }
    else {
        require.style.opacity = "0";
        require.style.transition = "1s";

        content.style.opacity = "0";
        content.style.transition = "1s";
    }

    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        footerHeading.style.opacity = "1";
        footerHeading.style.transition = "1.5s";
    }
    else {
        footerHeading.style.opacity = "0";
        footerHeading.style.transition = "1.5s";
    }
}