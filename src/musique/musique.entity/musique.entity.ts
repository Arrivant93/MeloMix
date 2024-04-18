import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class MusiqueEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    titre:string;

    @Column({ length: 45 })
    duree: string;

    @Column({ default: 0})
    annee: number;

}
