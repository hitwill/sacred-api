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
  contentURL: string;

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
    contentURL: string,
    userId: string,
    userAddress: string,
    vote: number
  ) {
    this.contentURL = contentURL;
    this.userId = userId;
    this.userAddress = userAddress;
    this.vote = vote;
  }
}
