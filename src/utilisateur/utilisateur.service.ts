import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilisateurEntity } from 'src/utilisateur/utilisateur.entity/utilisateur.entity';

const bcrypt = require('bcrypt');

@Injectable()
export class UtilisateurService {
  constructor(
    @InjectRepository(UtilisateurEntity)
    private UtilisateursRepository: Repository<UtilisateurEntity>,
  ) {}

  async getUtilisateurs(): Promise<UtilisateurEntity[]> {
    return await this.UtilisateursRepository.find({ relations: ['Playlist'] });
  }

  async getUtilisateur(_id: number): Promise<UtilisateurEntity> {
    return await this.UtilisateursRepository.findOneBy({ id: _id });
  }

  async createUtilisateur(user: UtilisateurEntity) {
    if (user.mdp) {
      const mdp = user.mdp;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(mdp, saltOrRounds);
      user.mdp = hash;
    }
    return await this.UtilisateursRepository.save(user);
  }

  async updateUtilisateur(user: UtilisateurEntity) {
    if (user.mdp) {
      const mdp = user.mdp;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(mdp, saltOrRounds);
      user.mdp = hash;
    }
    return await this.UtilisateursRepository.update(user.id, user);
  }

  async deleteUtilisateur(Utilisateur: UtilisateurEntity) {
    return await this.UtilisateursRepository.delete(Utilisateur);
  }

  async findOne(username: string) {
    return this.UtilisateursRepository.findOneBy({ email: username });
  }
}
