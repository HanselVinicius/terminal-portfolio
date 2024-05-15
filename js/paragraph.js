export function addParagraph(contentDiv, dropdown, text,spanText) {
    addWrittenParagraph(contentDiv,dropdown,spanText);
    const paragraph = document.createElement("p");
    paragraph.textContent = text; 
    paragraph.innerHTML = text.replace(/\n/g, '<br>');
    paragraph.classList.add("mb-4");

    contentDiv.insertBefore(paragraph, dropdown);
}

function addWrittenParagraph(contentDiv, dropdown,spanText) {
    const writtenCommand = document.createElement("p");
    writtenCommand.textContent = spanText;
    writtenCommand.classList.add("mb-4", "text-gray-700");

    contentDiv.insertBefore(writtenCommand, dropdown);
}