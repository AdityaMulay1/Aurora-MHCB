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
  MeditationSession as PrismaMeditationSession,
} from "@prisma/client";

export class MeditationSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MeditationSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.meditationSession.count(args);
  }

  async meditationSessions(
    args: Prisma.MeditationSessionFindManyArgs
  ): Promise<PrismaMeditationSession[]> {
    return this.prisma.meditationSession.findMany(args);
  }
  async meditationSession(
    args: Prisma.MeditationSessionFindUniqueArgs
  ): Promise<PrismaMeditationSession | null> {
    return this.prisma.meditationSession.findUnique(args);
  }
  async createMeditationSession(
    args: Prisma.MeditationSessionCreateArgs
  ): Promise<PrismaMeditationSession> {
    return this.prisma.meditationSession.create(args);
  }
  async updateMeditationSession(
    args: Prisma.MeditationSessionUpdateArgs
  ): Promise<PrismaMeditationSession> {
    return this.prisma.meditationSession.update(args);
  }
  async deleteMeditationSession(
    args: Prisma.MeditationSessionDeleteArgs
  ): Promise<PrismaMeditationSession> {
    return this.prisma.meditationSession.delete(args);
  }
}
