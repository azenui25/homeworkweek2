class ShoppingCart {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(name, quantity, pricePerUnit) {
        this.items.push({
            name: name,
            quantity: quantity,
            pricePerUnit: pricePerUnit
        })
    }

    clear() {
        this.items = []
    }

    total() {
        return this.items.reduce((total, item) => total + item.quantity * item.pricePerUnit, 0)
    }
}


module.exports = ShoppingCart