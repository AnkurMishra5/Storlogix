export type BuyerDetails = {
    buyerName: string;
    email: string;
    phone: string;
    shippingAddress: {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    };
};

export type Product = {
    itemId: string;
    itemName: string;
    quantity: number;
    price: number;
};

export type OrderManagementDetail = {
    orderId: string;
    buyerDetails: BuyerDetails;
    productList: Product[];
    paymentStatus: string;
    totalAmount: number;
    orderDate: string;
    status: string;
    trackingId: string | null;
};
