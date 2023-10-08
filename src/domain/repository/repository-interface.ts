export interface IRepository<T> {
    findAll(): Promise<T[]>;
    update(id: string): Promise<T>;
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    delate(id: string): Promise<void>;
}