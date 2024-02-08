import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Book {
  @PrimaryColumn()
  id: number;

  @Column({ default: "Unknown" })
  title: string;

  @Column({ default: "Unknown" })
  author: string;

  @Column()
  isAvailable: boolean;
}
