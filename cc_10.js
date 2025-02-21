// Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }

    updateStock(quantity) {
        this.stock -= quantity;
    }
}

// Test Case for Product
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected: Product details
prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected: Stock reduced to 7

// Task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;

        // Ensure stock is reduced when an order is created
        if (product.stock >= quantity) {
            product.updateStock(quantity);
        } else {
            throw new Error("Not enough stock to place this order");
        }
    }

    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

// Test Case for Order
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected: Order details
console.log(prod1.getDetails()); // Expected: Stock reduced to 5