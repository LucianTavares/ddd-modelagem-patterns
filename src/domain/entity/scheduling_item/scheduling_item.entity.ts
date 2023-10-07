import { ISchedulingItem } from "./scheduling_item.types";

export class SchedulingItem {
    private _id: string;
    private _name: string;
    private _price: number;
    private _serviceId: string;
    private _scheduledDate: Date;
    private _scheduledTime: string;

    constructor({ id, name, price, scheduledDate, scheduledTime, serviceId }: ISchedulingItem) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._serviceId = serviceId;
        this._scheduledTime = scheduledTime;
        this._scheduledDate = scheduledDate;
        this.timeValidate()
        this.validate()
    }

    get price(): number {
        return this._price;
    }

    timeValidate(): void {
        const currentTime = new Date().getTime();
        const eventTime = this._scheduledDate.getTime();

        const isPrevDateScheduling = currentTime <= eventTime;

        if (!isPrevDateScheduling) {
            throw new Error("Scheduled date must be later or equal today");
        }
    }

    validate(): void {
        if (!this._id.length) {
            throw new Error("Id is required");
        }

        if (!this._serviceId.length) {
            throw new Error("Product Id is required");
        }

        if (!this._name.length) {
            throw new Error("Name is required");
        }

        if (this._price < 0) {
            throw new Error("Price must be greater than zero");
        }

        if (!this._scheduledTime) {
            throw new Error("Scheduled Time is required");
        }
    }
}