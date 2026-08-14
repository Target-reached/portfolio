//Importing sections
const homePage = document.querySelector('.universalContainer');
const aboutPage = document.querySelector('.aboutpage');
const projectsPage = document.querySelector('.projectspage');
const certificatePage = document.querySelector('.certificatepage');
const educationalInfo = document.querySelector('.educational_info');
const sendAlertbtn = document.querySelector('.send_btn');
const download_cvBtn = document.querySelector('.downloadcvbtn');
const viewProjectsbtn = document.querySelector('.viewprojectsbtn');


//importing section buttons
const homepagebutton = document.querySelector('.homebtn');
const aboutpagebutton = document.querySelector('.aboutbtn');
const projectspagebutton = document.querySelector('.projectsbtn');
const certificatepagebutton = document.querySelector('.certificatebtn');

//function to hide all sections
function hideAllSections() {
    homePage.classList.add('hidden');
    aboutPage.classList.add('hidden');
    projectsPage.classList.add('hidden');
    certificatePage.classList.add('hidden');;
}

homepagebutton.addEventListener('click', (e) => {
    hideAllSections();
    homePage.classList.remove('hidden');

});
aboutpagebutton.addEventListener('click', (e) => {
    hideAllSections();
    aboutPage.classList.remove('hidden');
    typer(name, nameLine, current_index1);
    typer(phone, phoneLine, current_index2);
    typer(mail, mailLine, current_index3);
    setTimeout(() => {
        educationalInfo.classList.remove('hidden_info');
        educationalInfo.style.opacity = '1';
    }, 2000);

});
projectspagebutton.addEventListener('click', (e) => {
    hideAllSections();
    projectsPage.classList.remove('hidden');

});
certificatepagebutton.addEventListener('click', (e) => {
    hideAllSections();
    certificatePage.classList.remove('hidden');
    delayeddisplay(certificate_1, 300);
    delayeddisplay(certificate_2, 600);
    delayeddisplay(certificate_3, 900);

});
viewProjectsbtn.addEventListener('click', (e) => {
    hideAllSections();
    projectsPage.classList.remove('hidden');
})

// Code for Slideshow in homepage!
const slideshowFrame = document.querySelector('.projects_slideshow_container');
const allprojects = document.querySelectorAll('.slide_box').length;
const slider = document.querySelector('.display_frame');
let currentSlide = 0;

setInterval(() => {
    currentSlide = (currentSlide + 1) % allprojects;
    slider.style.transform = `translateX(-${currentSlide * slideshowFrame.clientWidth}px)`;
}, 3000);

//About Page Code logic!

//function for typewritter
function typer(info, address, current_index) {
    address.textContent = '';
    aboutpagebutton.disabled = true;
    const interval_id = setInterval(() => {
        if (current_index >= info.length) {
            clearInterval(interval_id);

            setTimeout(() => {
                aboutpagebutton.disabled = false;
            }, 1000);


            return;
        }
        address.textContent += info[current_index];
        current_index++;
    }, 50);
}
const typewritter = document.querySelector('.typewritter');
const nameLine = document.querySelector('.name_line');
const phoneLine = document.querySelector('.phone_line');
const mailLine = document.querySelector('.mail_line');
const name = 'Name : Jagan Mohan Talari';
const phone = 'Phone : 9629342968';
const mail = 'Mail : target.8.reached@gmail.com';
let current_index1 = 0;
let current_index2 = 0;
let current_index3 = 0;

//certificate page logic
const certificate_1 = document.querySelector('.c-1');
const certificate_2 = document.querySelector('.c-2');
const certificate_3 = document.querySelector('.c-3');

//function for dispaying with delay!
function delayeddisplay(item, time) {
    const interval_id = setInterval(() => {
        item.classList.remove('hidden_info');
        item.style.opacity = '1';
    }, time);
}

download_cvBtn.addEventListener('click', (e) => {
    alert('This will be available soon..!');
    return;

});
sendAlertbtn.addEventListener('click', (e) => {
    alert('This will be available soon!');
    return;
});








