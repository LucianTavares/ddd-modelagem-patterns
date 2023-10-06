import { Address } from "../address/address.entity";

export interface ICustomer {
    id: string;
    name: string;
    email: string;
    address?: Address;
    verified: boolean;
}