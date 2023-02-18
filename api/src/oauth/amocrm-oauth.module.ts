import { Module } from '@nestjs/common';
import { AmocrmOauthStrategy } from './amocrm-oauth.strategy';

@Module({
  imports: [],
  controllers: [],
  providers: [AmocrmOauthStrategy],
})
export class AmocrmOauthModule {}