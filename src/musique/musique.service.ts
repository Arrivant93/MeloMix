import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MusiqueEntity } from "src/musique/musique.entity/musique.entity";

@Injectable()
export class MusiqueService {

    constructor(@InjectRepository(MusiqueEntity) private MusiquesRepository: Repository<MusiqueEntity>) { }

    async getMusiques(): Promise<MusiqueEntity[]> {
        return await this.MusiquesRepository.find({ relations: ['Artiste', 'Style'] });
    }
    async getMusique(id: number): Promise<MusiqueEntity> {
        return await this.MusiquesRepository.findOneBy({ id: id });
    }
    async getMusiqueByName(titre: string): Promise<MusiqueEntity> {
        return await this.MusiquesRepository.findOneBy({ titre: titre });
    }
    async createMusique(Musique: MusiqueEntity) {
        return await this.MusiquesRepository.save(Musique);
    }
    async updateMusique(Musique: MusiqueEntity) {
        return await this.MusiquesRepository.update(Musique.id, Musique);
    }
    async deleteMusique(Musique: MusiqueEntity) {
        return await this.MusiquesRepository.delete(Musique);
    }
}
