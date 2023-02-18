import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AmocrmOauthStrategy extends PassportStrategy(Strategy, 'amocrm') {
  async validate(_accessToken: string) {
    return {
      provider: 'amocrm'
    };
  }
}