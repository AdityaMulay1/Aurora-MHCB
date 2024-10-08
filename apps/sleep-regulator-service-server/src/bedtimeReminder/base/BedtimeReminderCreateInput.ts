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
import { EnumBedtimeReminderDaysOfWeek } from "./EnumBedtimeReminderDaysOfWeek";
import {
  IsEnum,
  IsOptional,
  IsBoolean,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BedtimeReminderCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumBedtimeReminderDaysOfWeek,
    isArray: true,
  })
  @IsEnum(EnumBedtimeReminderDaysOfWeek, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumBedtimeReminderDaysOfWeek], {
    nullable: true,
  })
  daysOfWeek?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  reminderId?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reminderTime?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;
}

export { BedtimeReminderCreateInput as BedtimeReminderCreateInput };
