/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  UserConversation as PrismaUserConversation,
} from "@prisma/client";

export class UserConversationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserConversationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userConversation.count(args);
  }

  async userConversations(
    args: Prisma.UserConversationFindManyArgs
  ): Promise<PrismaUserConversation[]> {
    return this.prisma.userConversation.findMany(args);
  }
  async userConversation(
    args: Prisma.UserConversationFindUniqueArgs
  ): Promise<PrismaUserConversation | null> {
    return this.prisma.userConversation.findUnique(args);
  }
  async createUserConversation(
    args: Prisma.UserConversationCreateArgs
  ): Promise<PrismaUserConversation> {
    return this.prisma.userConversation.create(args);
  }
  async updateUserConversation(
    args: Prisma.UserConversationUpdateArgs
  ): Promise<PrismaUserConversation> {
    return this.prisma.userConversation.update(args);
  }
  async deleteUserConversation(
    args: Prisma.UserConversationDeleteArgs
  ): Promise<PrismaUserConversation> {
    return this.prisma.userConversation.delete(args);
  }
}