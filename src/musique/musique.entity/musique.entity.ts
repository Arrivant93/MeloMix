import { ArtisteEntity } from 'src/artiste/artiste.entity/artiste.entity';
import { StyleEntity } from 'src/style/style.entity/style.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class MusiqueEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  titre: string;

  @Column({ default: 0 })
  duree: number;

  @Column({ default: 0 })
  annee: number;

  @Column('text')
  pochette: string;

  @ManyToOne(() => ArtisteEntity, (Artiste) => Artiste.musiques)
  Artiste: ArtisteEntity;

  @ManyToOne(() => StyleEntity, (Style) => Style.Musique)
  Style: StyleEntity;
}
