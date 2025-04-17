export type realTimeInventory = {
    itemId: string;
    itemName: string;
    currentStockLevel: number;
    stockThreshold: number;
    lastUpdated: string;
    status: string;
};
