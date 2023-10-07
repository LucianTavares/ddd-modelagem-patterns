import { SchedulingItem } from "../scheduling_item/scheduling_item.entity";

import { Scheduling } from "./scheduling.entity";

describe('Scheduling Entity', () => {
    describe("Success", () => {
        it("should create a customer entity", () => {
            const firstItem = new SchedulingItem({
                id: "1",
                price: 50,
                scheduledTime: "08:00",
                name: "Vinicius Italo",
                scheduledDate: new Date(),
            });
            const secondItem = new SchedulingItem({
                id: "2",
                price: 70,
                scheduledTime: "18:00",
                name: "Beatriz Barbara",
                scheduledDate: new Date(),
            });

            const scheduling = new Scheduling({
                id: "1",
                customerId: "2",
                items: [firstItem, secondItem],
            });

            expect(scheduling).toBeDefined();
        });

        it("should return correct calculate total", () => {
            const firstItem = new SchedulingItem({
                id: "1",
                price: 50,
                scheduledTime: "08:00",
                name: "Vinicius Italo",
                scheduledDate: new Date(),
            });


            const scheduling = new Scheduling({
                id: "1",
                customerId: "2",
                items: [firstItem],
            });

            let totalCalculate = scheduling.total();

            expect(totalCalculate).toEqual(50);

            const secondItem = new SchedulingItem({
                id: "2",
                price: 70,
                scheduledTime: "18:00",
                name: "Beatriz Barbara",
                scheduledDate: new Date(),
            });

            const newScheduling = new Scheduling({
                id: "1",
                customerId: "2",
                items: [firstItem, secondItem],
            });

            totalCalculate = newScheduling.total();

            expect(totalCalculate).toEqual(120);
        });
    });

    describe("Error", () => {
        it("should throw an error if the id is not valid", () => {
            expect(() => {
                new Scheduling({
                    id: "",
                    customerId: "2",
                    items: [],
                });
            }).toThrowError("Id is required")
        });

        it("should throw an error if the customerId is not valid", () => {
            expect(() => {
                new Scheduling({
                    id: "1",
                    customerId: "",
                    items: [],
                })
            }).toThrowError("Customer Id is required")
        });

        it("should throw an error if the items is empty", () => {
            expect(() => {
                new Scheduling({
                    id: "1",
                    customerId: "2",
                    items: [],
                })
            }).toThrowError("Items is required")
        });
    });
});