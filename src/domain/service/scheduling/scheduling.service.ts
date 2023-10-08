import { v4 as uuid } from "uuid";

import { Customer } from "../../entity/customer/customer.entity";
import { Scheduling } from "../../entity/scheduling/scheduling.entity";
import { SchedulingItem } from "../../entity/scheduling_item/scheduling_item.entity";

export class SchedulingService {
    static totalAllScheduling(schedules: Scheduling[]): number {
        return schedules.reduce((total, schedule) => total + schedule.total(), 0);
    };

    static placeOrder(customer: Customer, scheduleItems: SchedulingItem[]): Scheduling {
        if (!scheduleItems.length) {
            throw new Error('Schedule must have at least one item')
        }

        const order = new Scheduling({
            id: uuid(),
            items: scheduleItems,
            customerId: customer.id,
        });

        customer.addRewardPoints(order.total() / 2);

        return order;
    }
}