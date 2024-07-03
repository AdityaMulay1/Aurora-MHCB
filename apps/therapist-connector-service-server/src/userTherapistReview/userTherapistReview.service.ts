import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserTherapistReviewServiceBase } from "./base/userTherapistReview.service.base";

@Injectable()
export class UserTherapistReviewService extends UserTherapistReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
