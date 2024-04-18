import { MusiqueEntity } from 'src/musique/musique.entity/musique.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

@Entity()
export class StyleEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    nom:string;

    @OneToMany(() => MusiqueEntity, (Musique) => Musique.Style)
    Musique: MusiqueEntity[];
}
