import { Sequelize } from "sequelize-typescript";
import { CustomerModel } from "../../database/sequelize/model/customer/customer.model";
import { CustomerRepository } from "./customer.repository";
import { Customer } from "../../../domain/entity/customer/customer.entity";
import { Address } from "../../../domain/entity/address/address.entity";

describe('Customer repository', () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: { force: true }
        })

        await sequelize.addModels([CustomerModel]);
        await sequelize.sync()
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer({
            id: '1',
            verified: false,
            name: 'Vinicius Italo',
            email: 'test@example.com',
        })

        const address = new Address({
            number: "123",
            country: "US",
            zipCode: "0923",
            state: "California",
            street: "Name street",
            city: "San Francisco",
        });

        customer.address = address;

        console.log(JSON.stringify(customer, null, 2));

        await customerRepository.create(customer);

        // const customerModel = await CustomerModel.findOne({ where: { id: '1' } });

        // console.log(customerModel.toJSON())

        // expect(customerModel.toJSON()).toStrictEqual({
        //     id: '1',
        //     verified: false,
        //     name: 'Vinicius Italo',
        //     email: 'test@example.com',
        //     number: "123",
        //     country: "US",
        //     zipCode: "0923",
        //     state: "California",
        //     street: "Name street",
        //     city: "San Francisco",
        // });
    });
});