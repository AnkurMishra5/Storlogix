import { OrderManagementDetail } from './types';

const orderData: OrderManagementDetail = {
    orderId: "1001",
    buyerDetails: {
        buyerName: "Ravi Singh",
        email: "ravisingh@example.com",
        phone: "123-456-7890",
        shippingAddress: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
            country: "USA"
        }
    },
    productList: [
        {
            itemId: "A101",
            itemName: "Laptop",
            quantity: 1,
            price: 1200.00
        },
        {
            itemId: "A102",
            itemName: "Mouse",
            quantity: 1,
            price: 20.00
        }
    ],
    paymentStatus: "Paid",
    totalAmount: 1220.00,
    orderDate: "2024-09-20",
    status: "Shipped",
    trackingId: "TRACK123456"
};

export { orderData };

