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
import { SleepPatternWhereInput } from "./SleepPatternWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SleepPatternListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SleepPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => SleepPatternWhereInput)
  @IsOptional()
  @Field(() => SleepPatternWhereInput, {
    nullable: true,
  })
  every?: SleepPatternWhereInput;

  @ApiProperty({
    required: false,
    type: () => SleepPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => SleepPatternWhereInput)
  @IsOptional()
  @Field(() => SleepPatternWhereInput, {
    nullable: true,
  })
  some?: SleepPatternWhereInput;

  @ApiProperty({
    required: false,
    type: () => SleepPatternWhereInput,
  })
  @ValidateNested()
  @Type(() => SleepPatternWhereInput)
  @IsOptional()
  @Field(() => SleepPatternWhereInput, {
    nullable: true,
  })
  none?: SleepPatternWhereInput;
}
export { SleepPatternListRelationFilter as SleepPatternListRelationFilter };
