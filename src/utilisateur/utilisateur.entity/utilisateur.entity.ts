import { PlaylistEntity } from 'src/playlist/playlist.entity/playlist.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class UtilisateurEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 250 })
  nom: string;
  @Column({ length: 250 })
  prenom: string;

  @Column({ length: 250 })
  email: string;

  @Column({ length: 250 })
  telephone: string;

  @Column('text')
  mdp: string;

  @Column('text')
  image: string;

  @OneToMany(() => PlaylistEntity, (playlist) => playlist.Utilisateur)
  Playlist: PlaylistEntity[];
}
