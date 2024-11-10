import { NestFactory } from '@nestjs/core';
import { SeedsModule } from './seeds.module';
import { SeedsService } from './seeds.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(SeedsModule);
  const seedService = app.get(SeedsService);

  await seedService.seedPosts();

  await app.close();
}

bootstrap();
