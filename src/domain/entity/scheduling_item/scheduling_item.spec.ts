import { SchedulingItem } from "./scheduling_item.entity";

describe('SchedulingItem Entity', () => {
    describe("Success", () => {
        it("should create a schedulingItem entity", () => {
            const schedulingItem = new SchedulingItem({
                id: "1",
                price: 50,
                productId: "1",
                scheduledTime: "08:00",
                name: "Vinicius Italo",
                scheduledDate: new Date(),
            });

            expect(schedulingItem).toBeDefined();
        });
    });

    describe("Error", () => {
        it("should throw an error if the id is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "",
                    price: 50,
                    productId: "1",
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(),
                });
            }).toThrowError("Id is required")
        });

        it("should throw an error if the scheduledTime is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 0,
                    productId: "1",
                    scheduledTime: "",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Scheduled Time is required")
        });

        it("should throw an error if the price is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: -1,
                    productId: "1",
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Price must be greater than zero")
        });

        it("should throw an error if the scheduledDate is less than the current date", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 50,
                    productId: "1",
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(2023, 1, 1),
                })
            }).toThrowError("Scheduled date must be later or equal today")
        });

        it("should throw an error if the name is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 0,
                    name: "",
                    productId: "1",
                    scheduledTime: "08:00",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Name is required")
        });

        it("should throw an error if the productId is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 0,
                    name: "",
                    productId: "",
                    scheduledTime: "08:00",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Product Id is required")
        });
    });
});