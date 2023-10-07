import { TypeServiceEnum } from "./enums/types.enums";
import { IService } from "./service.types";

export class Service {
    private _id: string;
    private _name: string;
    private _price: number;
    private _types: TypeServiceEnum[];

    constructor({ id, name, price, types }: IService) {
        this._id = id;
        this._types = types;
        this._name = name;
        this._price = price;
        this.validate();
    }

    get types(): TypeServiceEnum[] {
        return this._types;
    }

    validate(): void {
        if (!this._id.length) {
            throw new Error("Id is required");
        }

        if (!this._name.length) {
            throw new Error("Name is required");
        }

        if (this._price < 0) {
            throw new Error("Price must be greater than zero");
        }

        if (!this._types.length) {
            throw new Error("Type services must have a type");
        }
    }

    changeTypesService(types: TypeServiceEnum[]): void {
        this._types = types;
        this.validate();
    }
}