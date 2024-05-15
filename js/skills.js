import {createItemEventListener} from './utils.js';

addEventListener("DOMContentLoaded", (event) => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        createItemEventListener(item,pageCases);
    });

});


function pageCases(itemId){
    const contentDiv = document.getElementById("content");
    const dropdown = contentDiv.querySelector("#dropdown");
    const spanText = document.getElementById(itemId).textContent;

    switch(itemId) {
        case 'hard-skills':
            addWrittenParagraph(contentDiv,dropdown,spanText);
            addHardSkillsParagraph(contentDiv,dropdown,spanText);
            break;

        case 'soft-skills':
            addWrittenParagraph(contentDiv,dropdown,spanText);
            addSoftSkillsParagraph(contentDiv,dropdown);
            break;
        case 'portfolio':
            window.location.href = 'index.html';
            break;
    }
}

function addHardSkillsParagraph(contentDiv, dropdown) {
    const experienceParagraph = document.createElement("p");
    experienceParagraph.textContent = "hard-skills.txt is Under development..."; 
    experienceParagraph.classList.add("mb-4");

    contentDiv.insertBefore(experienceParagraph, dropdown);
}

function addSoftSkillsParagraph(contentDiv, dropdown) {
    const experienceParagraph = document.createElement("p");
    experienceParagraph.textContent = "soft-skills.txt is Under development..."; 
    experienceParagraph.classList.add("mb-4");

    contentDiv.insertBefore(experienceParagraph, dropdown);
}


function addWrittenParagraph(contentDiv, dropdown,spanText) {
    const writtenCommand = document.createElement("p");
    writtenCommand.textContent = "user Portfolio/Skills %"+ spanText;
    writtenCommand.classList.add("mb-4", "text-gray-700");

    contentDiv.insertBefore(writtenCommand, dropdown);
}