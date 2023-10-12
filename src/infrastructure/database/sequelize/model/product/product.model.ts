import { DataTypes } from "sequelize";
import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "products",
    timestamps: false,
})
export class ProductModel extends Model {

    @PrimaryKey
    @Column
    declare id: string;

    @Column({
        allowNull: false,
    })
    declare name: string;

    @Column({
        allowNull: false,
    })
    declare price: number;

    @Column({
        allowNull: false,
        type: DataTypes.JSON,
    })
    declare types: string[];
}