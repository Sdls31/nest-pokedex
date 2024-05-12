import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt({ message: 'no should be a number' })
  @IsPositive()
  @Min(1)
  no: number;

  @IsString({ message: 'name should be a string' })
  @MinLength(1)
  name: string;
}
