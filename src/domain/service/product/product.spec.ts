import { TypeProductEnum } from "../../entity/product/enums/types.enums";
import { Product } from "../../entity/product/product.entity";
import { ProductService } from "./product.service";

describe("Scheduling Service", () => {
    it("should change the prices of all products", () => {
        const productFirst = new Product({
            id: "1",
            price: 50,
            name: "First",
            types: [TypeProductEnum.BUFFET],
        });
        const productSecond = new Product({
            id: "2",
            price: 100,
            name: "Second",
            types: [TypeProductEnum.CLEANING],
        });

        const products = [productFirst, productSecond];

        ProductService.increasePriceInPercentage(products, 25);

        expect(productFirst.price).toBe(62.5);
        expect(productSecond.price).toBe(125);
    });
});