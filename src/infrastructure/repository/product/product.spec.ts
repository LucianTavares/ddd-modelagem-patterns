import { Sequelize } from "sequelize-typescript";

import { ProductRepository } from "./product.repository";
import { Product } from "../../../domain/entity/product/product.entity";
import { TypeProductEnum } from "../../../domain/entity/product/enums/types.enums";
import { ProductModel } from "../../database/sequelize/model/product/product.model";

describe("Product repository", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        });

        ;
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create a product", async () => {
        const productRepoistory = new ProductRepository();
        const product = new Product({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        });

        await productRepoistory.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } })

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        })
    });

    it("should find a product", async () => {
        const productRepoistory = new ProductRepository();
        const product = new Product({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        });

        await productRepoistory.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } })
        const foundProduct = await productRepoistory.findById("1");

        expect(productModel.toJSON()).toStrictEqual({
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
            types: foundProduct.types,
        })
    });

    it("should find and delete a product", async () => {
        const productRepoistory = new ProductRepository();
        const product = new Product({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        });

        await productRepoistory.create(product);

        const foundProduct = await productRepoistory.findById("1");

        expect(foundProduct).not.toBeNull();

        await productRepoistory.delete(foundProduct.id);


    });


    it("should find all a product", async () => {
        const productRepoistory = new ProductRepository();
        const productOne = new Product({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        });

        await productRepoistory.create(productOne);

        const productTwo = new Product({
            id: "2",
            price: 100,
            name: "Second product",
            types: [TypeProductEnum.BUFFET]
        });

        await productRepoistory.create(productTwo);

        const foundProducts = await productRepoistory.findAll();
        const products = [productOne, productTwo];

        expect(products).toEqual(foundProducts);
        expect(products.length).toEqual(2);
    });

    it("should update a product", async () => {
        const productRepoistory = new ProductRepository();
        const product = new Product({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        });

        await productRepoistory.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } })

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            price: 50,
            name: "First product",
            types: [TypeProductEnum.CLEANING]
        })

        product.changeName("Second product");
        product.changePrice(100);
        product.changeTypesProduct([TypeProductEnum.BUFFET]);

        await productRepoistory.update(product);

        const productUpdate = await ProductModel.findOne({ where: { id: "1" } });

        expect(productUpdate.toJSON()).toStrictEqual({
            id: "1",
            price: 100,
            name: "Second product",
            types: [TypeProductEnum.BUFFET]
        });
    });
});