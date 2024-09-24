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
import { RelaxationExerciseWhereUniqueInput } from "./RelaxationExerciseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RelaxationExerciseUpdateInput } from "./RelaxationExerciseUpdateInput";

@ArgsType()
class UpdateRelaxationExerciseArgs {
  @ApiProperty({
    required: true,
    type: () => RelaxationExerciseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RelaxationExerciseWhereUniqueInput)
  @Field(() => RelaxationExerciseWhereUniqueInput, { nullable: false })
  where!: RelaxationExerciseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => RelaxationExerciseUpdateInput,
  })
  @ValidateNested()
  @Type(() => RelaxationExerciseUpdateInput)
  @Field(() => RelaxationExerciseUpdateInput, { nullable: false })
  data!: RelaxationExerciseUpdateInput;
}

export { UpdateRelaxationExerciseArgs as UpdateRelaxationExerciseArgs };
