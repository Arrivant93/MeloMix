import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilisateurEntity } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';


@Injectable()
export class UtilisateurService {

    constructor(@InjectRepository(UtilisateurEntity) private UtilisateursRepository: Repository<UtilisateurEntity>) { }

    async getUtilisateurs(): Promise<UtilisateurEntity[]> {
        return await this.UtilisateursRepository.find({ relations: ['Playlist'] });
    }

    async getUtilisateur(_id: number): Promise<UtilisateurEntity> {
        return await this.UtilisateursRepository.findOneBy({id:_id})
    }

    async createUtilisateur(Utilisateur: UtilisateurEntity) {
        return await this.UtilisateursRepository.save(Utilisateur)
    }

    async updateUtilisateur(Utilisateur: UtilisateurEntity) {
        return await this.UtilisateursRepository.update(Utilisateur.id, Utilisateur);
    }

    async deleteUtilisateur(Utilisateur: UtilisateurEntity) {
        return await this.UtilisateursRepository.delete(Utilisateur);
    }
}
