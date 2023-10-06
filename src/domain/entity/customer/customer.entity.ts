import { Address } from "../address/address.entity";
import { ICustomer } from "./customer.types";

export class Customer {
    _id: string;
    _name: string;
    _email: string;
    _address!: Address;
    _verified: boolean;

    constructor({ id, name, verified, email }: ICustomer) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._verified = verified;
        this.validate();
    }

    validate(): void {
        if (!!this._name.length) {
            throw new Error("Name is required");
        }

        if (!!this._id.length) {
            throw new Error("Id is required");
        }

        if (!!this._email.length) {
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

    verified() {
        if (!!this._address || !!this._email) {
            throw new Error("Email and address is required for verification");
        }
        
        this._verified = true;
    }

    set Address(address: Address) {
        this._address = address;
    }
}