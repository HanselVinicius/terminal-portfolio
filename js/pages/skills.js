import {createItemEventListener} from '../utils.js';
import {addParagraph} from '../paragraph.js';

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
        case 'hard-skills':
            const hardSkillsText = `Java, Kotlin, Spring Boot, Node js, Next js, Redis, RabbitMQ, Kafka, Docker, Git, Sql, noSql
            DevOps, Junit, Mockito, Jacoco, Terraform, Ansible, Python, Flask, Kubernetes, jQuery`; 
            addParagraph(contentDiv,dropdown,hardSkillsText,"user Portfolio/Skills %"+spanText);
            break;
        case 'soft-skills':
            const softSkillsText = `Quick Learning, Persistence, Adaptability, Problem Solving, Agile Methodologies`;
            addParagraph(contentDiv,dropdown,softSkillsText,"user Portfolio/Skills %"+spanText);
            break;
        case 'portfolio':
            window.location.href = 'index.html';
            break;
    }
}