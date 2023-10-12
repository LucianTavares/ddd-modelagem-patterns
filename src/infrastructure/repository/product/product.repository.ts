import { Product } from "../../../domain/entity/product/product.entity";
import { IProductRepository } from "../../../domain/repository/product-repository.interface";
import { ProductModel } from "../../database/sequelize/model/product/product.model";

export class ProductRepository implements IProductRepository {
    async findAll(): Promise<Product[]> {
        const productModels = await ProductModel.findAll();

        return productModels.map((product) =>
            new Product({
                id: product.id,
                name: product.name,
                price: product.price,
                types: product.types,
            })
        );
    }

    async create(entity: Product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            types: entity.types,
            price: entity.price,
        })
    }

    async update(entity: Product): Promise<void> {
        await ProductModel.update({
            name: entity.name,
            price: entity.price,
            types: entity.types,
        }, {
            where: {
                id: entity.id,
            }
        })
    }

    async delete(id: string): Promise<void> {
        await ProductModel.destroy
            ({
                where: { id }
            })
    }

    async findById(id: string): Promise<Product> {
        const productModel = await ProductModel.findOne({ where: { id } });

        return new Product({
            id: productModel.id,
            name: productModel.name,
            price: productModel.price,
            types: productModel.types,
        })
    }
}