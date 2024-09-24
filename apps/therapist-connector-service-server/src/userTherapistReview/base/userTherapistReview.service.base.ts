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
  UserTherapistReview as PrismaUserTherapistReview,
} from "@prisma/client";

export class UserTherapistReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserTherapistReviewCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userTherapistReview.count(args);
  }

  async userTherapistReviews(
    args: Prisma.UserTherapistReviewFindManyArgs
  ): Promise<PrismaUserTherapistReview[]> {
    return this.prisma.userTherapistReview.findMany(args);
  }
  async userTherapistReview(
    args: Prisma.UserTherapistReviewFindUniqueArgs
  ): Promise<PrismaUserTherapistReview | null> {
    return this.prisma.userTherapistReview.findUnique(args);
  }
  async createUserTherapistReview(
    args: Prisma.UserTherapistReviewCreateArgs
  ): Promise<PrismaUserTherapistReview> {
    return this.prisma.userTherapistReview.create(args);
  }
  async updateUserTherapistReview(
    args: Prisma.UserTherapistReviewUpdateArgs
  ): Promise<PrismaUserTherapistReview> {
    return this.prisma.userTherapistReview.update(args);
  }
  async deleteUserTherapistReview(
    args: Prisma.UserTherapistReviewDeleteArgs
  ): Promise<PrismaUserTherapistReview> {
    return this.prisma.userTherapistReview.delete(args);
  }
}