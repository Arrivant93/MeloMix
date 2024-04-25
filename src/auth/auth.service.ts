import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(private readonly utilisateursService: UtilisateurService, private jwtService: JwtService) { }

  async validateUser(email: string, motDePasse: string) {
    const user = await this.utilisateursService.findOne(email);
    const { mdp, ...result } = user;
    const isMatch = (motDePasse == user.mdp);
    // const isMatch = await bcrypt.compare(motDePasse == user.mdp);
    if (isMatch) return result;
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
