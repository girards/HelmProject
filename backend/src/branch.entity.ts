import { Entity, Column, PrimaryColumn, BaseEntity } from "typeorm";

@Entity()
export class Branch extends BaseEntity {
  @PrimaryColumn()
  name: string
}