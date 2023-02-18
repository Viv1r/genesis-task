import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsController } from './controllers/leads/leads.controller';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { CompaniesController } from './controllers/companies/companies.controller';
import { CrmService } from './services/crm/crm.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, LeadsController, ContactsController, CompaniesController],
  providers: [AppService, CrmService],
})
export class AppModule {}
