import { Controller, Post } from '@nestjs/common';
import { CrmService } from 'src/services/crm/crm.service';

@Controller('contacts')
export class ContactsController {
  constructor(private crmService: CrmService) {}

  @Post('/create')
  async postCreateLead(): Promise<object> {
    const result = await this.crmService.createItem('contacts');
    return result;
  }
}
