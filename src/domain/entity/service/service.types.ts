import { TypeServiceEnum } from "./enums/types.enums";

export interface IService {
    id: string;
    name: string;
    price: number;
    types: TypeServiceEnum[];
}