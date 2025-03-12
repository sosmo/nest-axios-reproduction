import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private readonly httpService: HttpService) {}

  async onApplicationBootstrap() {
    console.log('\nSTART app.service');

    try {
      await firstValueFrom(this.httpService.get('https://example.sfdsdf'));
    } catch (e) {
      console.log('\nStack from http service:\n');
      console.log(e.stack);
    }

    try {
      await this.httpService.axiosRef.get('https://example.sfdsdf')
    } catch (e) {
      console.log('\nStack from raw axios client:\n');
      console.log(e.stack);
    }
  }
}
