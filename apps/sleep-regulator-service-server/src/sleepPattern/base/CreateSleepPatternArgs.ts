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
import { SleepPatternCreateInput } from "./SleepPatternCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSleepPatternArgs {
  @ApiProperty({
    required: true,
    type: () => SleepPatternCreateInput,
  })
  @ValidateNested()
  @Type(() => SleepPatternCreateInput)
  @Field(() => SleepPatternCreateInput, { nullable: false })
  data!: SleepPatternCreateInput;
}

export { CreateSleepPatternArgs as CreateSleepPatternArgs };
