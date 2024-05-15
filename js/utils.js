export function createItemEventListener(item, pageCases) {
    item.addEventListener('click', function() {
        let itemId = this.id;
        pageCases(itemId);
    });
}