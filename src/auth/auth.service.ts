import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';

const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private readonly utilisateursService: UtilisateurService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.utilisateursService.findOne(username);
    console.log(user);
    const { mdp, ...result } = user;
    const isMatch = await bcrypt.compare(pass, user.mdp);
    console.log(isMatch);
    if (isMatch) {
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
