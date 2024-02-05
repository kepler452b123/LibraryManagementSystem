import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Borrower {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phoneNumber: string;
}
