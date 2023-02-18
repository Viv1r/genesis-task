import { Controller, Post } from '@nestjs/common';
import { CrmService } from 'src/services/crm/crm.service';

@Controller('companies')
export class CompaniesController {
  constructor(private crmService: CrmService) {}

  @Post('/create')
  async postCreateLead(): Promise<object> {
    const result = await this.crmService.createItem('companies');
    return result;
  }
}
