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
            email: entity.email,
            verified: entity.verified,
            city: entity.Address.city,
            state: entity.Address.state,
            number: entity.Address.number,
            street: entity.Address.street,
            country: entity.Address.country,
            zipCode: entity.Address.zipCode,
            rewardPoints: entity.rewardPoints,
        });
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}