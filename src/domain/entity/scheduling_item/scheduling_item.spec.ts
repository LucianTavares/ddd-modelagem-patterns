import { SchedulingItem } from "./scheduling_item.entity";

describe('SchedulingItem Entity', () => {
    describe("Success", () => {
        it("should create a schedulingItem entity", () => {
            const schedulingItem = new SchedulingItem({
                id: "1",
                price: 50,
                serviceId: "1",
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
                    serviceId: "1",
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
                    serviceId: "1",
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
                    serviceId: "1",
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Price must be greater than zero")
        });

        it("should throw an error if the scheduledDate is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 50,
                    serviceId: "1",
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: undefined,
                })
            }).toThrowError("Scheduled Date is required")
        });

        it("should throw an error if the name is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 0,
                    name: "",
                    serviceId: "1",
                    scheduledTime: "08:00",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Name is required")
        });

        it("should throw an error if the serviceId is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 0,
                    name: "",
                    serviceId: "",
                    scheduledTime: "08:00",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Product Id is required")
        });
    });
});