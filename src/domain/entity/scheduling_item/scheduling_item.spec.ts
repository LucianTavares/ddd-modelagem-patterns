import { SchedulingItem } from "./scheduling_item.entity";

describe('SchedulingItem Entity', () => {
    describe("Success", () => {
        it("should create a schedulingItem entity", () => {
            const schedulingItem = new SchedulingItem({
                id: "1",
                price: 50,
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
                    price: undefined,
                    scheduledTime: "08:00",
                    name: "Vinicius Italo",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Price is required")
        });

        it("should throw an error if the scheduledDate is not valid", () => {
            expect(() => {
                new SchedulingItem({
                    id: "1",
                    price: 50,
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
                    scheduledTime: "08:00",
                    name: "",
                    scheduledDate: new Date(),
                })
            }).toThrowError("Name is required")
        });
    });
});