import { Service } from "./service.entity";
import { TypeServiceEnum } from "./enums/types.enums";

describe('Service Entity', () => {
    describe("Success", () => {
        it("should create a service entity", () => {
            const scheduling = new Service({
                id: "1",
                name: "2",
                price: 50,
                types: [TypeServiceEnum.BUFFET],
            });

            expect(scheduling).toBeDefined();
        });

        it("should be update services in call of changeTypesService", () => {
            const scheduling = new Service({
                id: "1",
                name: "2",
                price: 50,
                types: [TypeServiceEnum.BUFFET],
            });

            expect(scheduling.types).toHaveLength(1);

            scheduling.changeTypesService([TypeServiceEnum.CLEANING, TypeServiceEnum.CUSTOM])

            expect(scheduling.types).toHaveLength(2);
        });
    });

    describe("Error", () => {
        it("should throw an error if the id is not valid", () => {
            expect(() => {
                new Service({
                    id: "",
                    name: "2",
                    price: 50,
                    types: [TypeServiceEnum.BUFFET],
                });
            }).toThrowError("Id is required")
        });

        it("should throw an error if the name is not valid", () => {
            expect(() => {
                new Service({
                    id: "1",
                    name: "",
                    price: 50,
                    types: [TypeServiceEnum.BUFFET],
                })
            }).toThrowError("Name is required")
        });

        it("should throw an error if the type is not valid", () => {
            expect(() => {
                new Service({
                    id: "1",
                    name: "2",
                    price: 50,
                    types: [],
                })
            }).toThrowError("Type services must have a type")
        });

        it("should throw an error if the price is not valid", () => {
            expect(() => {
                new Service({
                    id: "1",
                    name: "2",
                    price: -1,
                    types: [TypeServiceEnum.CLEANING],
                })
            }).toThrowError("Price must be greater than zero")
        });
    });
});