class SelectedList {
    constructor(_list = []) {
        this.list = _list;
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