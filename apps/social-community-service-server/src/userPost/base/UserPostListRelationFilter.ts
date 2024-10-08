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
import { UserPostWhereInput } from "./UserPostWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserPostListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserPostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPostWhereInput)
  @IsOptional()
  @Field(() => UserPostWhereInput, {
    nullable: true,
  })
  every?: UserPostWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPostWhereInput)
  @IsOptional()
  @Field(() => UserPostWhereInput, {
    nullable: true,
  })
  some?: UserPostWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserPostWhereInput,
  })
  @ValidateNested()
  @Type(() => UserPostWhereInput)
  @IsOptional()
  @Field(() => UserPostWhereInput, {
    nullable: true,
  })
  none?: UserPostWhereInput;
}
export { UserPostListRelationFilter as UserPostListRelationFilter };
