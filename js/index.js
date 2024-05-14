addEventListener("DOMContentLoaded", (event) => {
    populeYearParagph();
    openNextPage();

});

function populeYearParagph(){
    const yearsParagraph = document.getElementById("p-years");
    let yearsExp =  new Date().getFullYear() - 2022 ; 
    yearsParagraph.textContent = `${yearsExp} Years Experience Fullstack Developer.`;
}


function openNextPage(){
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        createItemEventListener(item);
    });
}

function createItemEventListener(item){
    item.addEventListener('click', function() {
        let itemId = this.id;
        switch(itemId) {
            case 'skills':
                console.log('skills clicked');
                break;
        }
    });
}