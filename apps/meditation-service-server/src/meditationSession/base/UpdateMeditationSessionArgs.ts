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
import { MeditationSessionWhereUniqueInput } from "./MeditationSessionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MeditationSessionUpdateInput } from "./MeditationSessionUpdateInput";

@ArgsType()
class UpdateMeditationSessionArgs {
  @ApiProperty({
    required: true,
    type: () => MeditationSessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MeditationSessionWhereUniqueInput)
  @Field(() => MeditationSessionWhereUniqueInput, { nullable: false })
  where!: MeditationSessionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MeditationSessionUpdateInput,
  })
  @ValidateNested()
  @Type(() => MeditationSessionUpdateInput)
  @Field(() => MeditationSessionUpdateInput, { nullable: false })
  data!: MeditationSessionUpdateInput;
}

export { UpdateMeditationSessionArgs as UpdateMeditationSessionArgs };