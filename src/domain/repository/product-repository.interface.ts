import { IRepository } from "./repository-interface";
import { Product } from "../entity/product/product.entity";

export interface IProductRepository
    extends IRepository<Product> { }