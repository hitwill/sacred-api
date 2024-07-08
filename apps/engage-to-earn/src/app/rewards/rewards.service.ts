import { Injectable } from '@nestjs/common';
import { CreateRewardDto } from './dto/create-reward.dto';
import { UpdateRewardDto } from './dto/update-reward.dto';
import { RedisClientType } from 'redis';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class RewardsService {
  private readonly redisClient: RedisClientType;

  constructor(private redisService: RedisService) {
    this.redisClient = this.redisService.client;
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
