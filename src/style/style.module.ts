import { Module } from '@nestjs/common';
import { StyleService } from './style.service';
import { StyleController } from './style.controller';
import { StyleEntity } from './style.entity/style.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StyleEntity])],
  providers: [StyleService],
  controllers: [StyleController]
})
export class StyleModule {}
