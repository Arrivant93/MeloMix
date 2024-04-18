import { PlaylistEntity } from 'src/playlist/playlist.entity/playlist.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany  } from 'typeorm';

@Entity()
export class UtilisateurEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250})
    nom:string;
    @Column({ length: 250 })
    prenom:string;

    @Column({ length: 250 })
    email:string;

    @Column({ default: 0})
    telephone:number;

    @Column('text')
    mdp:string;

    @OneToMany(() => PlaylistEntity, (playlists) => playlists.Utilisateur)
    Playlist: PlaylistEntity[];

   
}
