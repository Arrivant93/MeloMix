import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistEntity } from './playlist.entity/playlist.entity';

@Controller('Playlist')
export class PlaylistController {
    constructor(private service: PlaylistService) { }

    @Get()
    getAll() {
        return this.service.getPlaylists();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getPlaylist(params.id);

    }

    @Post()
    create(@Body() Playlist: PlaylistEntity) {
        return this.service.createPlaylist(Playlist);
    }

    @Put()
    update(@Body() Playlist: PlaylistEntity) {
        return this.service.updatePlaylist(Playlist);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deletePlaylist(params.id);
    }
}
