/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeditationSubPageWhereInput } from "./MeditationSubPageWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MeditationSubPageOrderByInput } from "./MeditationSubPageOrderByInput";

@ArgsType()
class MeditationSubPageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MeditationSubPageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MeditationSubPageWhereInput, { nullable: true })
  @Type(() => MeditationSubPageWhereInput)
  where?: MeditationSubPageWhereInput;

  @ApiProperty({
    required: false,
    type: [MeditationSubPageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MeditationSubPageOrderByInput], { nullable: true })
  @Type(() => MeditationSubPageOrderByInput)
  orderBy?: Array<MeditationSubPageOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MeditationSubPageFindManyArgs as MeditationSubPageFindManyArgs };
