import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { StyleService } from './style.service';
import { StyleEntity } from './style.entity/style.entity';


@Controller('Styles')
export class StyleController {
    constructor(private service: StyleService ) { }

    @Get()
    getAll() {
        return this.service.getStyles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getStyle(params.id);
    }


    @Post()
    create(@Body() Style: StyleEntity) {
        return this.service.createStyle(Style);
    }

    @Put()
    update(@Body() Style: StyleEntity) {
        return this.service.updateStyle(Style);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteStyle(params.id);
    }
}
