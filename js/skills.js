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
        case 'gvd':
            addWrittenParagraph(contentDiv,dropdown,spanText);
            addGvdParagraph(contentDiv,dropdown,spanText);
            break;

        case 'usp':
            addWrittenParagraph(contentDiv,dropdown,spanText);
            addUspParagraph(contentDiv,dropdown);
            break;
        case 'portfolio':
            window.location.href = '/index.html';
            break;
    }
}

function addGvdParagraph(contentDiv, dropdown) {
    const experienceParagraph = document.createElement("p");
    experienceParagraph.textContent = "gvd.text is Under development..."; 
    experienceParagraph.classList.add("mb-4");

    
    contentDiv.insertBefore(experienceParagraph, dropdown);
}

function addUspParagraph(contentDiv, dropdown) {
    const experienceParagraph = document.createElement("p");
    experienceParagraph.textContent = "usp.txt is Under development..."; 
    experienceParagraph.classList.add("mb-4");

    
    contentDiv.insertBefore(experienceParagraph, dropdown);
}


function addWrittenParagraph(contentDiv, dropdown,spanText) {
    const writtenCommand = document.createElement("p");
    writtenCommand.textContent = "user Portfolio/Skills %"+ spanText;
    writtenCommand.classList.add("mb-4", "text-gray-700");

    contentDiv.insertBefore(writtenCommand, dropdown);
}