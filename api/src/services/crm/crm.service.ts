/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios/dist';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CrmService {
  constructor(private readonly httpService: HttpService) {}

  private clientId = 30878566;

  private async getAccessData() {
    const URL = 'https://test.gnzs.ru/oauth/get-token.php';
    const headers = {
        'Content-Type': 'application/json',
        'X-Client-Id': this.clientId
    };

    const response = await firstValueFrom(this.httpService.get(URL, {headers: headers}));
    const data = response.data;

    if (data && data.base_domain && data.access_token) {
      return {
        accessToken: data.access_token,
        baseDomain: data.base_domain
      };
    }
    return {};
  }

  public async createItem(type: string): Promise<object> {

    const { accessToken, baseDomain } = await this.getAccessData();

    const apiURL = `https://${baseDomain}/api/v4/${type}`;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    };

    const body = [{ name: 'Brand new!' }];

    try {
      const response = await firstValueFrom(
        this.httpService.post(apiURL, body, {
          headers: headers
        })
      );
      if (response && response.data) {
        return { status: 'ok', items: response.data._embedded[type] };
      } else {
        throw new Error();
      }
    } catch (error) {
      return { status: 'error', message: 'Bad request!' };
    }
  }
}
