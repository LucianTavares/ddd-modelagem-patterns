import { Customer } from "../../entity/customer/customer.entity";
import { Scheduling } from "../../entity/scheduling/scheduling.entity";
import { SchedulingItem } from "../../entity/scheduling_item/scheduling_item.entity";
import { SchedulingService } from "./scheduling.service";

describe("Scheduling service", () => {
    describe("Success", () => {
        it("should place an schedule", () => {
            const customer = new Customer({
                id: '1',
                name: 'John',
                email: 'john@example.com',
                verified: false,
            });

            const firstItem = new SchedulingItem({
                id: "1",
                price: 50,
                productId: "1",
                scheduledTime: "08:00",
                name: "Vinicius Italo",
                scheduledDate: new Date(),
            });

            const schedule = SchedulingService.placeOrder(customer, [firstItem])

            expect(customer.rewardPoints).toEqual(25);
            expect(schedule.total()).toEqual(50);
        });

        it("should get total of all scheduling", () => {
            const firstItem = new SchedulingItem({
                id: "1",
                price: 50,
                productId: "1",
                scheduledTime: "08:00",
                name: "Vinicius Italo",
                scheduledDate: new Date(),
            });

            const secondItem = new SchedulingItem({
                id: "2",
                price: 70,
                productId: "1",
                scheduledTime: "18:00",
                name: "Beatriz Barbara",
                scheduledDate: new Date(),
            });

            const firstSchedule = new Scheduling({
                id: "1",
                customerId: "2",
                items: [firstItem],
            });

            const secondSchedule = new Scheduling({
                id: "2",
                customerId: "4",
                items: [secondItem],
            });

            const totalAllScheduling = SchedulingService.totalAllScheduling([firstSchedule, secondSchedule]);

            expect(totalAllScheduling).toEqual(120);
        });
    });

    describe("Error", () => {
        it("should throw error when items is empty", () => {
            expect(() => {
                const customer = new Customer({
                    id: '1',
                    name: 'John',
                    email: 'john@example.com',
                    verified: false,
                });

                SchedulingService.placeOrder(customer, [])
            }).toThrowError("Schedule must have at least one item")
        });
    });
});