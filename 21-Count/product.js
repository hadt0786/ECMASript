class Product {
    constructor(id, name, price, quantity){
        this.id= id;
        this.name= name;
        this.price = price;
        this.quantity = quantity;
    }

    total(){
        return this.quantity*this.price;
    }
    toString(){
        return "ID : "+this.id+"\nName "+this.name+"\nPrice "+this.price+"\nQuantity "+this.quantity;
    }
}

module.exports = Product;