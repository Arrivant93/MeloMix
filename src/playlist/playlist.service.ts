
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlaylistEntity } from './playlist.entity/playlist.entity';

@Injectable()
export class PlaylistService {

    constructor(@InjectRepository(PlaylistEntity) private PlaylistsRepository: Repository<PlaylistEntity>) { }

    async getPlaylists(): Promise<PlaylistEntity[]> {
        return await this.PlaylistsRepository.find({ relations: ['Utilisateur'] });
    }

    async getPlaylist(_id: number): Promise<PlaylistEntity> {
        return await this.PlaylistsRepository.findOneBy({id:_id})
    }

    async createPlaylist(Playlist: PlaylistEntity) {
        return await this.PlaylistsRepository.save(Playlist)
    }

    async updatePlaylist(Playlist: PlaylistEntity) {
        return await this.PlaylistsRepository.update(Playlist.id, Playlist);
    }

    async deletePlaylist(Playlist: PlaylistEntity) {
        return await this.PlaylistsRepository.delete(Playlist);
    }
}
