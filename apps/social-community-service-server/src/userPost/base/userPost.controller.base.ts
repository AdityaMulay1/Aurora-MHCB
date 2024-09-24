/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserPostService } from "../userPost.service";
import { UserPostCreateInput } from "./UserPostCreateInput";
import { UserPost } from "./UserPost";
import { UserPostFindManyArgs } from "./UserPostFindManyArgs";
import { UserPostWhereUniqueInput } from "./UserPostWhereUniqueInput";
import { UserPostUpdateInput } from "./UserPostUpdateInput";

export class UserPostControllerBase {
  constructor(protected readonly service: UserPostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserPost })
  async createUserPost(
    @common.Body() data: UserPostCreateInput
  ): Promise<UserPost> {
    return await this.service.createUserPost({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        likesCount: true,
        postId: true,
        timestamp: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserPost] })
  @ApiNestedQuery(UserPostFindManyArgs)
  async userPosts(@common.Req() request: Request): Promise<UserPost[]> {
    const args = plainToClass(UserPostFindManyArgs, request.query);
    return this.service.userPosts({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        likesCount: true,
        postId: true,
        timestamp: true,
        updatedAt: true,
        userId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userPost(
    @common.Param() params: UserPostWhereUniqueInput
  ): Promise<UserPost | null> {
    const result = await this.service.userPost({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        likesCount: true,
        postId: true,
        timestamp: true,
        updatedAt: true,
        userId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserPost(
    @common.Param() params: UserPostWhereUniqueInput,
    @common.Body() data: UserPostUpdateInput
  ): Promise<UserPost | null> {
    try {
      return await this.service.updateUserPost({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          likesCount: true,
          postId: true,
          timestamp: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserPost(
    @common.Param() params: UserPostWhereUniqueInput
  ): Promise<UserPost | null> {
    try {
      return await this.service.deleteUserPost({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          likesCount: true,
          postId: true,
          timestamp: true,
          updatedAt: true,
          userId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
