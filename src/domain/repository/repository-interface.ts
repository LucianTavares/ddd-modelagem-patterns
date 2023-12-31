export interface IRepository<T> {
    findAll(): Promise<T[]>;
    update(entity: T): Promise<void>;
    findById(id: string): Promise<T>;
    create(entity: T): Promise<void>;
    update(entity: T): Promise<void>;
    delete(id: string): Promise<void>;
}