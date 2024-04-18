import { UtilisateurEntity } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class PlaylistEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    nom:string;

    @Column({ length: 250})
    description: string;

    @Column({ length: 250})
    list_musique: string; // Pas touche  Théo a c  raison 

    @Column('text')
    pochette: string;

    @ManyToOne(() => UtilisateurEntity, (utilisateur) => utilisateur.Playlist)
  Utilisateur: UtilisateurEntity;

}
