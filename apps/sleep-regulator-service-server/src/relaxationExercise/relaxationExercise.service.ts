import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RelaxationExerciseServiceBase } from "./base/relaxationExercise.service.base";

@Injectable()
export class RelaxationExerciseService extends RelaxationExerciseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
