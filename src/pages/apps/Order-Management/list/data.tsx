
import { orderManagementList } from './types';

const orderManagementData:orderManagementList[] = [
    {
        orderId: "1001",
        buyerName: "Ravi Singh",
        trackingId: "TRACK123456",
        status: "Shipped"
    },
    {
        orderId: "1002",
        buyerName: "Rani Mehra",
        trackingId: null,
        status: "Processing"
    },
    {
        orderId: "1003",
        buyerName: "Rakesh Kapoor",
        trackingId: "TRACK654321",
        status: "Delivered"
    }
];

export {orderManagementData}
