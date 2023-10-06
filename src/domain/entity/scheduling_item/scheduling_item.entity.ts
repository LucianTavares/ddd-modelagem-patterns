import { ISchedulingItem } from "./scheduling_item.types";

export class SchedulingItem {
    _id: string;
    _name: string;
    _price: number;
    _scheduledDate: Date;
    _scheduledTime: string;

    constructor({ id, name, price, scheduledDate, scheduledTime }: ISchedulingItem) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._scheduledDate = scheduledDate;
        this._scheduledTime = scheduledTime;
        this.validate()
    }

    get price(): number {
        return this._price;
    }

    validate(): void {
        if (!!this._id.length) {
            throw new Error("Id is required");
        }

        if (!!this._name.length) {
            throw new Error("Name is required");
        }

        if (!!this._price === undefined) {
            throw new Error("Price is required");
        }

        if (!!this._scheduledDate === undefined) {
            throw new Error("Scheduled Date is required");
        }

        if (!!this._scheduledTime === undefined) {
            throw new Error("Scheduled Time is required");
        }
    }
}