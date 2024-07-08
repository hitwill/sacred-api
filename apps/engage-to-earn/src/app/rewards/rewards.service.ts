import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { Schema } from '../schemas';
import { RedisService } from '../redis/redis.service';
import { RedisClientType } from 'redis';
import { Repository } from 'redis-om';

@Injectable()
export class RewardsService {
  private readonly redisClient: RedisClientType;
  rewardsRepository: Repository;

  constructor(private redisService: RedisService) {
    this.rewardsRepository = new Repository(
      Schema.votes,
      this.redisService.client
    );
  }

  create(createRewardDto: CreateRewardDto) {
    return 'This action adds a new reward';
  }

  findAll() {
    return `This action returns all rewards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reward`;
  }

  update(id: number, updateRewardDto: UpdateRewardDto) {
    return `This action updates a #${id} reward`;
  }

  remove(id: number) {
    return `This action removes a #${id} reward`;
  }
}
