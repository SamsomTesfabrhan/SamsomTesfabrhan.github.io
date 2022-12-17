module.exports = class{
    constructor(productName, price, description, id){
        this.productName = productName;
        this.price =price;
        this.description = description;
        this.id = id;
    }
    produtsData(){
        return "productName :" + this.productName + "price :" + this.price +
         "description :" + this.description + "id :" + this.id
    }
}