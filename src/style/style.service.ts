import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StyleEntity } from './style.entity/style.entity';

@Injectable()
export class StyleService {

    constructor(@InjectRepository(StyleEntity) private StylesRepository: Repository<StyleEntity>) { }

    async getStyles(): Promise<StyleEntity[]> {
        return await this.StylesRepository.find({ relations: ['Musique'] });
    }

    async getStyle(_id: number): Promise<StyleEntity> {
        return await this.StylesRepository.findOneBy({id:_id})
    }

    async createStyle(Style: StyleEntity) {
        return await this.StylesRepository.save(Style)
    }

    async updateStyle(Style: StyleEntity) {
        return await this.StylesRepository.update(Style.id, Style);
    }

    async deleteStyle(Style: StyleEntity) {
        return await this.StylesRepository.delete(Style);
    }
}
