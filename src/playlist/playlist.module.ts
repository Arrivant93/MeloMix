import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { PlaylistEntity } from './playlist.entity/playlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlaylistEntity])],
  providers: [PlaylistService],
  controllers: [PlaylistController]
})
export class PlaylistModule {}
