import { Address } from "../address/address.entity";
import { Customer } from "./customer.entity";

describe('Customer Entity', () => {
    describe("Success", () => {
        it("should create a customer entity", () => {
            const customer = new Customer({
                id: '1',
                verified: false,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            expect(customer).toBeDefined();
        });

        it("should update the name after calling the 'changeName' function", () => {
            const customer = new Customer({
                id: '1',
                verified: false,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            customer.changeName("New Example")

            expect(customer.name).toEqual("New Example");
        });

        it("should update the points after calling the 'addRewardPoints' function", () => {
            const customer = new Customer({
                id: '1',
                verified: false,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            customer.addRewardPoints(5)

            expect(customer.rewardPoints).toEqual(5);
        });

        it("should update the e-mail after calling the 'changeEmail' function", () => {
            const customer = new Customer({
                id: '1',
                verified: false,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            customer.changeEmail("test2@example.com")

            expect(customer.email).toEqual("test2@example.com");
        });

        it("should change to true status 'verified' after calling function 'check'", () => {
            const address = new Address({
                number: "123",
                country: "US",
                zipCode: "0923",
                state: "California",
                street: "Name street",
                city: "San Francisco",
            });

            const customer = new Customer({
                address,
                id: '1',
                verified: false,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            customer.check();

            expect(customer.verified).toBeTruthy();
        });

        it("should change to false status 'verified' after calling function 'removeVerification'", () => {
            const customer = new Customer({
                id: '1',
                verified: true,
                name: 'Vinicius Italo',
                email: 'test@example.com',
            });

            customer.removeVerification();

            expect(customer.verified).toBeFalsy();
        });
    });

    describe("Error", () => {
        it("should throw an error if the name is not valid", () => {
            expect(() => {
                new Customer({
                    id: '1',
                    verified: false,
                    name: '',
                    email: 'test@example.com',
                });
            }).toThrowError("Name is required")
        });

        it("should throw an error if the id is not valid", () => {
            expect(() => {
                new Customer({
                    id: '',
                    verified: false,
                    name: 'Vinicius italo',
                    email: 'test@example.com',
                });
            }).toThrowError("Id is required")
        });

        it("should throw an error if the e-mail is not valid", () => {
            expect(() => {
                new Customer({
                    id: '1',
                    verified: false,
                    name: 'Vinicius italo',
                    email: '',
                });
            }).toThrowError("E-mail is required")
        });

        it("should throw an error if the e-mail is not valid or address in call to check", () => {
            expect(() => {
                let customer = new Customer({
                    id: '1',
                    verified: false,
                    name: 'Vinicius italo',
                    email: 'test@example.com',
                });

                customer.check();
            }).toThrowError("Email and address is required for verification")
        });
    });
});