import { Customer } from "../entity/customer/customer.entity";
import { IRepository } from "./repository-interface";

export interface ICustomerRepository
    extends IRepository<Customer> { }