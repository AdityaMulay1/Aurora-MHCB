import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TherapistProfileServiceBase } from "./base/therapistProfile.service.base";

@Injectable()
export class TherapistProfileService extends TherapistProfileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
