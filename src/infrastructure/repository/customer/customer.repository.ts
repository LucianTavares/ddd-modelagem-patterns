import { Customer } from "../../../domain/entity/customer/customer.entity";
import { ICustomerRepository } from "../../../domain/repository/customer-repository.interface";
import { CustomerModel } from "../../database/sequelize/model/customer/customer.model";

export class CustomerRepository implements ICustomerRepository {
    findAll(): Promise<Customer[]> {
        throw new Error("Method not implemented.");
    }

    update(entity: unknown): Promise<void> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Customer> {
        throw new Error("Method not implemented.");
    }

    async create(entity: Customer): Promise<void> {
        console.log('Entity: ', entity.address)
        await CustomerModel.create({
            id: entity.id,
            name: entity.name,
            city: entity.address.city,
            state: entity.address.state,
            number: entity.address.number,
            street: entity.address.street,
            country: entity.address.country,
            zipCode: entity.address.zipCode,
            rewardPoints: entity.rewardPoints,
        });
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}