import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VotesModule } from './votes/votes.module';
import { RewardsModule } from './rewards/rewards.module';

@Module({
  imports: [VotesModule, RewardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
