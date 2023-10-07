export interface ISchedulingItem {
    id: string;
    name: string;
    price: number;
    productId: string;
    scheduledDate: Date;
    scheduledTime: string;
}