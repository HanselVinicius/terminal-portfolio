import {createItemEventListener} from '../utils.js';
import { addParagraph, clearParagraphs } from '../service/paragraph.js';

addEventListener("DOMContentLoaded", (event) => {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        createItemEventListener(item,clickCases);
    });

});


function clickCases(itemId){
    const contentDiv = document.getElementById("content");
    const dropdown = contentDiv.querySelector("#dropdown");
    const spanText = document.getElementById(itemId).textContent;

    switch(itemId) {
        case 'gvd':
            const gvdExperienceText = `Software Developer II August 2022 - Present
            Gvd Intelligent Solutions Ribeirão Preto, SP
            • Adjustments and new features in practical and theoretical driving lesson management systems.
            • Utilization of Docker for both deployment and development purposes.
            • Work in multidisciplinary teams.`; 
            addParagraph(contentDiv,dropdown,gvdExperienceText,"user Portfolio/Experience %"+spanText);
            break;
        case 'usp':
            const uspExperienceText = `
            Scientific Initiation February 2024 - Present University of São Paulo Ribeirão Preto, SP
            • Development of new features and adjustments in the ClusterApp project at CCBL using Python, Flask, Pandas,
            NumPy, scikit-learn, HTML, CSS, and JavaScript.
            • Utilization of Docker for both deployment and development purposes.
            • Meetings with international stakeholders.
            `;
            addParagraph(contentDiv,dropdown,uspExperienceText,"user Portfolio/Experience %"+spanText);
            break;
        case 'portfolio':
            window.location.href = 'index.html';
            break;
        case 'clear':
            clearParagraphs();
            break;
    }
}