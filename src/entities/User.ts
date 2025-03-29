import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", unique: true, nullable: false })
    email!: string;

    @Column({ type: "varchar", nullable: false })
    title!: string;

    @Column({ type: "varchar", nullable: false })
    firstName!: string;

    @Column({ type: "varchar", nullable: false })
    lastName!: string;

    @Column({ type: "varchar", nullable: false })
    role!: string;
}