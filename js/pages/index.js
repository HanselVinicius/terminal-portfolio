import { createItemEventListener } from '../utils.js';
import { addParagraph } from '../paragraph.js';

addEventListener("DOMContentLoaded", (event) => {
    populeYearParagph();
    actionSetter();

});

function populeYearParagph(){
    const yearsParagraph = document.getElementById("p-years");
    let yearsExp =  new Date().getFullYear() - 2022 ; 
    yearsParagraph.textContent = `${yearsExp} Years Experience Fullstack Developer.`;
}


function actionSetter(){
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        createItemEventListener(item,clickCases);
    });
}

function clickCases(itemId){
    const contentDiv = document.getElementById("content");
    const dropdown = contentDiv.querySelector("#dropdown");
    const spanText = document.getElementById(itemId).textContent;

    switch(itemId) {
        case 'skills':
            window.location.href = 'skills.html';
            break;
        case 'experience':
            window.location.href = 'experience.html';
            break;    
        case 'contact':
            const contactText = `Email: hanelvinicius@gmail.com`
            addParagraph(contentDiv,dropdown,contactText,"user Portfolio %"+spanText);
            break;
        case 'linkedin':
            addParagraph(contentDiv,dropdown,"","user Portfolio %"+spanText);
            window.open('https://www.linkedin.com/in/vinicius-hansel-figueiredo-da-costa-b90b1b220/');
            break;
        case 'github':
            addParagraph(contentDiv,dropdown,"","user Portfolio %"+spanText);
            window.open('https://github.com/HanselVinicius');
            break;
    }
}
