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
import { BedtimeReminderWhereInput } from "./BedtimeReminderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BedtimeReminderOrderByInput } from "./BedtimeReminderOrderByInput";

@ArgsType()
class BedtimeReminderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BedtimeReminderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BedtimeReminderWhereInput, { nullable: true })
  @Type(() => BedtimeReminderWhereInput)
  where?: BedtimeReminderWhereInput;

  @ApiProperty({
    required: false,
    type: [BedtimeReminderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BedtimeReminderOrderByInput], { nullable: true })
  @Type(() => BedtimeReminderOrderByInput)
  orderBy?: Array<BedtimeReminderOrderByInput>;

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

export { BedtimeReminderFindManyArgs as BedtimeReminderFindManyArgs };
