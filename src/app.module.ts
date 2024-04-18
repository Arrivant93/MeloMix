import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusiquesModule } from './musique/musique.module';

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
            }),MusiquesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}