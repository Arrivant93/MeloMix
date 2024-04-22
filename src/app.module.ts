import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusiquesModule } from './musique/musique.module';
import { UtilisateursModule } from './utilisateur/utilisateur.module';
import { PlaylistModule } from './playlist/playlist.module';
import { ArtisteModule } from './artiste/artiste.module';
import { StyleModule } from './style/style.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "",
                "database": "melomix",
                "entities": ["dist/**/**.entity{.ts,.js}"],
                "synchronize": true
            }),MusiquesModule, UtilisateursModule, PlaylistModule, ArtisteModule, StyleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}