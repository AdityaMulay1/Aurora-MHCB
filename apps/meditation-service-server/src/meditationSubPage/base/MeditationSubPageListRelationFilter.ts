/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MeditationSubPageWhereInput } from "./MeditationSubPageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MeditationSubPageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MeditationSubPageWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditationSubPageWhereInput)
  @IsOptional()
  @Field(() => MeditationSubPageWhereInput, {
    nullable: true,
  })
  every?: MeditationSubPageWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeditationSubPageWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditationSubPageWhereInput)
  @IsOptional()
  @Field(() => MeditationSubPageWhereInput, {
    nullable: true,
  })
  some?: MeditationSubPageWhereInput;

  @ApiProperty({
    required: false,
    type: () => MeditationSubPageWhereInput,
  })
  @ValidateNested()
  @Type(() => MeditationSubPageWhereInput)
  @IsOptional()
  @Field(() => MeditationSubPageWhereInput, {
    nullable: true,
  })
  none?: MeditationSubPageWhereInput;
}
export { MeditationSubPageListRelationFilter as MeditationSubPageListRelationFilter };