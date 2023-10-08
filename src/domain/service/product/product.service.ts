import { Product } from "../../entity/product/product.entity";

export class ProductService {
    static increasePriceInPercentage(products: Product[], percentage: number): Product[] {
        products.forEach(product => {
            product.changePrice((product.price * percentage) / 100 + product.price);
        });

        return products
    }
}