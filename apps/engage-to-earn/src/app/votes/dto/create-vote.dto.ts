import {
  IsString,
  IsNumber,
  IsEthereumAddress,
  Min,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreateVoteDto {
  @IsString()
  @IsNotEmpty()
  contentHash: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEthereumAddress()
  userAddress: string;

  @IsNumber()
  @Min(-1)
  @Max(1)
  vote: number;

  constructor(
    contentHash: string,
    userId: string,
    userAddress: string,
    vote: number
  ) {
    this.contentHash = contentHash;
    this.userId = userId;
    this.userAddress = userAddress;
    this.vote = vote;
  }
}
