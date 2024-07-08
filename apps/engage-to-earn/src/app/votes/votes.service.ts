import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Schema } from '../schemas';
import { RedisService } from '../redis/redis.service';
import { RedisClientType } from 'redis';
import { Repository } from 'redis-om';

@Injectable()
export class VotesService {
  private readonly redisClient: RedisClientType;
  votesRepository: Repository;

  constructor(private redisService: RedisService) {
    this.votesRepository = new Repository(
      Schema.votes,
      this.redisService.client
    );
  }
  create(createVoteDto: CreateVoteDto) {
    return 'This action adds a new vote';
  }

  findAll() {
    return `This action returns all votes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vote`;
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
