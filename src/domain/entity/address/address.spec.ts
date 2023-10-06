import { Address } from "./address.entity";

describe('Address Entity', () => {
    describe("Success", () => {
        it("should create a address entity", () => {
            const address = new Address({
                number: "123",
                country: "US",
                zipCode: "0923",
                state: "California",
                street: "Name street",
                city: "San Francisco",
            });

            expect(address).toBeDefined();
        });

        it("should return correctly formatted address", () => {
            const address = new Address({
                number: "1A",
                country: "Brasil",
                state: "São Paulo",
                zipCode: "00000-000",
                city: "Ribeirão Pires",
                street: "Fulano de tal",
            });

            expect(address.toStringBR())
                .toEqual("Fulano de tal, 1A 00000-000, Ribeirão Pires/São Paulo - Brasil")
        })
    });

    describe("Error", () => {
        it("should throw an error if the number is not valid", () => {
            expect(() => {
                new Address({
                    number: "",
                    country: "Brasil",
                    state: "São Paulo",
                    zipCode: "00000-000",
                    city: "Ribeirão Pires",
                    street: "Fulano de tal",
                });
            }).toThrowError("Number is required")
        });

        it("should throw an error if the country is not valid", () => {
            expect(() => {
                new Address({
                    number: "1A",
                    country: "",
                    state: "São Paulo",
                    zipCode: "00000-000",
                    city: "Ribeirão Pires",
                    street: "Fulano de tal",
                });
            }).toThrowError("Country is required")
        });

        it("should throw an error if the state is not valid", () => {
            expect(() => {
                new Address({
                    number: "1A",
                    country: "Brasil",
                    state: "",
                    zipCode: "00000-000",
                    city: "Ribeirão Pires",
                    street: "Fulano de tal",
                });
            }).toThrowError("State is required")
        });

        it("should throw an error if the zip code is not valid", () => {
            expect(() => {
                new Address({
                    number: "1A",
                    country: "Brasil",
                    state: "São Paulo",
                    zipCode: "",
                    city: "Ribeirão Pires",
                    street: "Fulano de tal",
                });
            }).toThrowError("Zip Code is required")
        });

        it("should throw an error if the city is not valid", () => {
            expect(() => {
                new Address({
                    number: "1A",
                    country: "Brasil",
                    state: "São Paulo",
                    zipCode: "00000-000",
                    city: "",
                    street: "Fulano de tal",
                });
            }).toThrowError("City is required")
        });

        it("should throw an error if the street is not valid", () => {
            expect(() => {
                new Address({
                    number: "1A",
                    country: "Brasil",
                    state: "São Paulo",
                    zipCode: "00000-000",
                    city: "Ribeirão Pires",
                    street: "",
                });
            }).toThrowError("Street is required")
        });
    });
});