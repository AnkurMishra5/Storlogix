// InteractionHistoryTypes.ts

export interface BuyerInteraction {
    id: string;                 // Unique identifier for each interaction
    buyerName: string;         // Name of the buyer
    date: string;              // Interaction date in ISO format
    message: string;           // Message content from the buyer
    responseStatus: string;    // Status indicating if the message has been responded to
}

