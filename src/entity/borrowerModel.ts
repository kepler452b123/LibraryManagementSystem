import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Borrower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;
}
