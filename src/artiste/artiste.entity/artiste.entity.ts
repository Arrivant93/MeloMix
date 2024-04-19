import { MusiqueEntity } from 'src/musique/musique.entity/musique.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

@Entity()
export class ArtisteEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    nom:string;
    musiques: any;
    
    @OneToMany(() => MusiqueEntity, (musique) => musique.Artiste)
    Musique: MusiqueEntity[];
   
}
