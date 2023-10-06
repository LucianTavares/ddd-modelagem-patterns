import { SchedulingItem } from "../scheduling_item/scheduling_item.entity";

export interface IScheduling {
    id: string;
    customerId: string;
    items: SchedulingItem[];
}