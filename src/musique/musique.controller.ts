import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { MusiqueService } from './musique.service';
import { MusiqueEntity } from "src/musique/musique.entity/musique.entity";

@Controller('Musique')
export class MusiqueController {
    constructor(private service: MusiqueService) { }

    @Get()
    getAll() {
        return this.service.getMusiques();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getMusique(params.id);

    }

    @Post()
    create(@Body() Musique: MusiqueEntity) {
        return this.service.createMusique(Musique);
    }

    @Put()
    update(@Body() Musique: MusiqueEntity) {
        return this.service.updateMusique(Musique);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteMusique(params.id);
    }
}
