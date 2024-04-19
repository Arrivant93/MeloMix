import { Controller, Post, Body, Get, Put, Delete,Param, UseGuards} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurEntity } from './utilisateur.entity/utilisateur.entity';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('Utilisateurs')
export class UtilisateurController {
    constructor(private service: UtilisateurService ) { }

    @Get()
    getAll() {
        return this.service.getUtilisateurs();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUtilisateur(params.id);
    }


    @Post()
    create(@Body() Utilisateur: UtilisateurEntity) {
        return this.service.createUtilisateur(Utilisateur);
    }

    @Put()
    update(@Body() Utilisateur: UtilisateurEntity) {
        return this.service.updateUtilisateur(Utilisateur);
    }

    @UseGuards(AuthGuard) // Pour ne pas supprimer un uttilisateur sans token 
    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUtilisateur(params.id);
    }
}
