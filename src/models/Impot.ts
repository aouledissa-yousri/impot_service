import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";


@Entity()
export class Impot {


    @PrimaryGeneratedColumn("increment") cin: number
    @Column() private montant: number
    @Column() private paye: boolean

}