import SelecttedItem from "../models/SelectedItem.js"
class SelectedList {
    constructor(_list = []) {
        this.list = _list;
    }
    saveLocalStorage() {
        localStorage.setItem("listSelectedItem", JSON.stringify(this.list));
    }
    loadLocalStorage() {
        let data = localStorage.getItem("listSelectedItem");
        if (data) {
            data = JSON.parse(data);
            this.list = data.map(e => {
                const { id, type, imgSrc_png } = e;
                return new SelecttedItem(id, type, imgSrc_png);
            });
        }

    }

    findIndexById(id) {
        return this.list.findIndex(e => e.id === id);
    }

    findIndexByType(type) {
        return this.list.findIndex(e => e.type === type);
    }

    addItem(item) {
        this.list.push(item);
    }

    updateItem(item, index) {
        if (index > -1 && index < this.list.length)
            this.list.splice(index, 1, item);
    }

    removeItem(index) {
        if (index > -1 && index < this.list.length)
            this.list.splice(index, 1);
    }


}
export default SelectedList;