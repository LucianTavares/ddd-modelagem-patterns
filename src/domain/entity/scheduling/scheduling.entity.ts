import { SchedulingItem } from "../scheduling_item/scheduling_item.entity";

import { IScheduling } from "./scheduling.types";

export class Scheduling {
    private _id: string;
    private _total: number;
    private _customerId: string;
    private _items: SchedulingItem[] = [];

    constructor({ id, customerId, items }: IScheduling) {
        this._id = id;
        this._items = items;
        this._customerId = customerId;
        this._total = this.total();
        this.validate();
    }

    validate(): void {
        if (!this._id.length) {
            throw new Error("Id is required");
        }

        if (!this._customerId.length) {
            throw new Error("Customer Id is required");
        }

        if (!this._items.length) {
            throw new Error("Items is required");
        }
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
}