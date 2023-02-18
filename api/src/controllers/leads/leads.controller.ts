import { Controller, Post } from '@nestjs/common';
import { CrmService } from 'src/services/crm/crm.service';

@Controller('leads')
export class LeadsController {
  constructor(private crmService: CrmService) {}

  @Post('/create')
  async postCreateLead(): Promise<object> {
    const result = await this.crmService.createItem('leads');
    return result;
  }
}
