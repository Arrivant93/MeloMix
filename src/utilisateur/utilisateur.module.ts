import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { UtilisateurEntity } from './utilisateur.entity/utilisateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UtilisateurEntity])],
  providers: [UtilisateurService],
  controllers: [UtilisateurController]
})
export class UtilisateursModule {}
