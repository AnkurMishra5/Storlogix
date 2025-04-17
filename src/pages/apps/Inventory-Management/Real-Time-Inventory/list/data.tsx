// types
import { realTimeInventory } from './types';


const realTimeInventoryData: realTimeInventory[] = [
        {
            itemId: "001",
            itemName: "Widget A",
            currentStockLevel: 150,
            stockThreshold: 50,
            lastUpdated: "2024-09-24 10:30",
            status: "In Stock"
        },
        {
            itemId: "002",
            itemName: "Widget B",
            currentStockLevel: 25,
            stockThreshold: 30,
            lastUpdated: "2024-09-24 10:35",
            status: "Low Stock"
        },
        {
            itemId: "003",
            itemName: "Widget C",
            currentStockLevel: 0,
            stockThreshold: 20,
            lastUpdated: "2024-09-24 10:40",
            status: "Out of Stock"
        },
        {
            itemId: "004",
            itemName: "Widget D",
            currentStockLevel: 75,
            stockThreshold: 20,
            lastUpdated: "2024-09-24 10:45",
            status: "In Stock"
        }
]

export { realTimeInventoryData };
