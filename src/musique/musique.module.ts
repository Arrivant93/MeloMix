import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusiqueService } from './musique.service';
import { MusiqueController } from './musique.controller';
import { MusiqueEntity } from "src/musique/musique.entity/musique.entity";
@Module({
  imports: [TypeOrmModule.forFeature([MusiqueEntity])],
  providers: [MusiqueService],
  controllers: [MusiqueController]
})
export class MusiquesModule {}
