import { Address } from "../address/address.entity";
import { ICustomer } from "./customer.types";

export class Customer {
    private _id: string;
    private _name: string;
    private _email: string;
    private _address?: Address;
    private _verified: boolean;
    private _rewardPoints: number = 0;

    constructor({ id, name, verified, email }: ICustomer) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._verified = verified;
        this.validate();
    }

    get id(): string { return this._id; }

    get name(): string { return this._name; }

    get email(): string { return this._email; }

    get verified(): boolean { return this._verified; }

    get rewardPoints(): number { return this._rewardPoints; }

    get Address(): Address {
        return this._address;
    }

    set address(address: Address | undefined) {
        this._address = address;
    }

    validate(): void {
        if (!this._name.length) {
            throw new Error("Name is required");
        }

        if (!this._id.length) {
            throw new Error("Id is required");
        }

        if (!this._email.length) {
            throw new Error("E-mail is required");
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    changeEmail(email: string) {
        this._email = email;
        this.validate();
    }

    removeVerification() {
        this._verified = false;
    }

    addRewardPoints(points: number) {
        this._rewardPoints += points;
    }

    check() {
        if (!this._address || !this._email) {
            throw new Error("Email and address is required for verification");
        }

        this._verified = true;
    }
}