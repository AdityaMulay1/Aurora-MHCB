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
import { RelaxationExerciseWhereInput } from "./RelaxationExerciseWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RelaxationExerciseCountArgs {
  @ApiProperty({
    required: false,
    type: () => RelaxationExerciseWhereInput,
  })
  @Field(() => RelaxationExerciseWhereInput, { nullable: true })
  @Type(() => RelaxationExerciseWhereInput)
  where?: RelaxationExerciseWhereInput;
}

export { RelaxationExerciseCountArgs as RelaxationExerciseCountArgs };
