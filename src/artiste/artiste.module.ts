import { Module } from '@nestjs/common';
import { ArtisteService } from './artiste.service';
import { ArtisteController } from './artiste.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtisteEntity } from './artiste.entity/artiste.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArtisteEntity])],
  providers: [ArtisteService],
  controllers: [ArtisteController]
})
export class ArtisteModule {}
