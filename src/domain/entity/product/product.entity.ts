import { TypeProductEnum } from "./enums/types.enums";
import { IProduct } from "./product.types";

export class Product {
    private _id: string;
    private _name: string;
    private _price: number;
    private _types: string[];

    constructor({ id, name, price, types }: IProduct) {
        this._id = id;
        this._types = types;
        this._name = name;
        this._price = price;
        this.validate();
    }

    get types(): string[] {
        return this._types;
    }

    get price(): number {
        return this._price;
    }

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
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

    changeTypesProduct(types: string[]): void {
        this._types = types;
        this.validate();
    }

    changePrice(price: number): void {
        this._price = price;
    }

    changeName(name: string): void {
        this._name = name;
    }
}