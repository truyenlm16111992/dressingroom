class SelectedItem {
    constructor(_id, _type, _imgSrc_png) {
        this.id = _id;
        this.type = _type;
        this.imgSrc_png = _imgSrc_png;
    }
    getPositionImg(){
        switch(this.type){
            case "topclothes":
                return "bikinitop";
            case "botclothes":
                return "bikinibottom";
            case "shoes":
                return "feet";
            case "handbags":
                return "handbag";
            case "necklaces":
                return "necklace";
            default:
                return this.type;
        }
    }
}
export default SelectedItem;