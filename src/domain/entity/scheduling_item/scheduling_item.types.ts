export interface ISchedulingItem {
    id: string;
    name: string;
    price: number;
    serviceId: string;
    scheduledDate: Date;
    scheduledTime: string;
}