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
import { RelaxationExerciseWhereInput } from "./RelaxationExerciseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RelaxationExerciseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RelaxationExerciseWhereInput,
  })
  @ValidateNested()
  @Type(() => RelaxationExerciseWhereInput)
  @IsOptional()
  @Field(() => RelaxationExerciseWhereInput, {
    nullable: true,
  })
  every?: RelaxationExerciseWhereInput;

  @ApiProperty({
    required: false,
    type: () => RelaxationExerciseWhereInput,
  })
  @ValidateNested()
  @Type(() => RelaxationExerciseWhereInput)
  @IsOptional()
  @Field(() => RelaxationExerciseWhereInput, {
    nullable: true,
  })
  some?: RelaxationExerciseWhereInput;

  @ApiProperty({
    required: false,
    type: () => RelaxationExerciseWhereInput,
  })
  @ValidateNested()
  @Type(() => RelaxationExerciseWhereInput)
  @IsOptional()
  @Field(() => RelaxationExerciseWhereInput, {
    nullable: true,
  })
  none?: RelaxationExerciseWhereInput;
}
export { RelaxationExerciseListRelationFilter as RelaxationExerciseListRelationFilter };
