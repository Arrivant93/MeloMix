import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtisteEntity } from './artiste.entity/artiste.entity';

@Injectable()
export class ArtisteService {
  constructor(
    @InjectRepository(ArtisteEntity)
    private ArtistesRepository: Repository<ArtisteEntity>,
  ) {}

  async getArtistes(): Promise<ArtisteEntity[]> {
    return await this.ArtistesRepository.find({ relations: ['Musique'] });
  }

  async getArtiste(_id: number): Promise<ArtisteEntity> {
    return await this.ArtistesRepository.findOneBy({ id: _id });
  }

  async createArtiste(Artiste: ArtisteEntity) {
    return await this.ArtistesRepository.save(Artiste);
  }

  async updateArtiste(Artiste: ArtisteEntity) {
    return await this.ArtistesRepository.update(Artiste.id, Artiste);
  }

  async deleteArtiste(Artiste: ArtisteEntity) {
    return await this.ArtistesRepository.delete(Artiste);
  }
}
