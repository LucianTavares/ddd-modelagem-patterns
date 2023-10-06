import { IAddress } from "./address.types";

export class Address {
    private _city: string;
    private _state: string;
    private _number: string;
    private _street: string;
    private _country: string;
    private _zipCode: string;

    constructor({ city, state, street, country, zipCode, number }: IAddress) {
        this._city = city;
        this._state = state;
        this._number = number;
        this._street = street;
        this._zipCode = zipCode;
        this._country = country;
        this.validate();
    }

    validate(): void {
        if (!this._city.length) {
            throw new Error("City is required");
        }

        if (!this._number.length) {
            throw new Error("Number is required");
        }

        if (!this._state.length) {
            throw new Error("State is required");
        }

        if (!this._street.length) {
            throw new Error("Street is required");
        }

        if (!this._country.length) {
            throw new Error("Country is required");
        }

        if (!this._zipCode.length) {
            throw new Error("Zip Code is required");
        }
    }

    toStringBR(): string {
        return `${this._street}, ${this._number} ${this._zipCode}, ${this._city}/${this._state} - ${this._country}`
    }
}