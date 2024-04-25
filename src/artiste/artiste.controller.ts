import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { ArtisteService } from './artiste.service';
import { ArtisteEntity } from './artiste.entity/artiste.entity';

@Controller('Artistes')
export class ArtisteController {

  constructor(private service: ArtisteService) { }

  @Get()
  getAll() {
    return this.service.getArtistes();
  }
  @Get(':id')
  get(@Param() params) {
    return this.service.getArtiste(params.id);
  }
  @Get('/nom/:nom')
  getByName(@Param() params) {
    return this.service.getArtisteByName(params.nom);
  }
  @Post()
  create(@Body() Artiste: ArtisteEntity) {
    return this.service.createArtiste(Artiste);
  }
  @Put()
  update(@Body() Artiste: ArtisteEntity) {
    return this.service.updateArtiste(Artiste);
  }
  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteArtiste(params.id);
  }
}
