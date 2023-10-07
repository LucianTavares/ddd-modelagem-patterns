import { TypeProductEnum } from "./enums/types.enums";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    types: TypeProductEnum[];
}