import ChoseItem from "../models/SelectedItem.js";
import SelectedList from "../models/SelectedList.js";
import data from "../data/Data.json" assert {type: 'json'};
import SelectedItem from "../models/SelectedItem.js";
const { navPills, tabPanes } = data;
const selected = new SelectedList();
let tabHTML = "";
let tabContainerHTML = "";
navPills.forEach((navItem, navIndex) => {
    const { tabName, type, showName } = navItem;
    const tabContainerName = `${tabName}Container`;
    const active = !navIndex ? { tab: " active", tabContainer: " show active" } : { tab: "", tabContainer: "" };
    tabHTML += `
        <li class="nav-item" role="presentation">
            <button class="nav-link${active.tab}" id="${tabName}" data-toggle="tab" data-target="#${tabContainerName}" type="button" role="tab"
            aria-controls="${tabContainerName}" aria-selected="false">${showName}</button>
        </li>
    `;
    const listItem = tabPanes.filter(item => item.type === type).map(item => {
        const { id, name, type, imgSrc_jpg, imgSrc_png } = item;
        return `
        <div class="list-item w-100 d-flex flex-column justify-content-between text-center">
            <img class="img-fluid mb-2" src="${imgSrc_jpg}" alt="">
            <div class="d-flex justify-content-center align-items-center mb-2">
                <h6>${name}</h6>
            </div>
            <button class="btn btn-secondary" onclick="selectItem('${id}', '${type}', '${imgSrc_png}')">Thử đồ</button>
        </div>
        `;
    }).join("");
    tabContainerHTML += `
        <div class="tab-pane fade${active.tabContainer}" id="${tabContainerName}" role="tabpanel" aria-labelledby="${tabName}">
            <div class="grid-container p-3">
                ${listItem}
            </div>
        </div>
    `;
});
getElement("#listTabs").innerHTML = tabHTML;
getElement("#listTabContainer").innerHTML = tabContainerHTML;
const renderSelectedItem = () => {
    const items = {
        body: "../assets/images/allbody/bodynew.png",
        model: "../assets/images/model/1000new.png",
        hairstyle: "",
        necklace: "",
        bikinitop: "../assets/images/allbody/bikini_branew.png",
        bikinibottom: "../assets/images/allbody/bikini_pantsnew.png",
        handbag: "",
        feet: "../assets/images/shoes/shoes1.png",
        background: "../assets/images/background/background1.jpg"
    };
    selected.list.forEach(e => items[e.getPositionImg()] = e.imgSrc_png);
    Object.keys(items).forEach(e => getElement(`.${e}`).style.backgroundImage = `url("${items[e]}")`);
}
window.selectItem = (id, type, img) => {
    const index = selected.findIndexByType(type);
    if (index < 0)
        selected.addItem(new SelectedItem(id, type, img));
    else if (selected.list[index].id === id)
        selected.removeItem(index);
    else
        selected.updateItem(new SelectedItem(id, type, img), index);
    renderSelectedItem();
}

