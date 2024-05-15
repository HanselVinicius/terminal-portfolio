export function createItemEventListener(item, clickCases) {
    item.addEventListener('click', function() {
        let itemId = this.id;
        clickCases(itemId);
    });
}