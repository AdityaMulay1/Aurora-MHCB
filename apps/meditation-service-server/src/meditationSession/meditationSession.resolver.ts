import * as graphql from "@nestjs/graphql";
import { MeditationSessionResolverBase } from "./base/meditationSession.resolver.base";
import { MeditationSession } from "./base/MeditationSession";
import { MeditationSessionService } from "./meditationSession.service";

@graphql.Resolver(() => MeditationSession)
export class MeditationSessionResolver extends MeditationSessionResolverBase {
  constructor(protected readonly service: MeditationSessionService) {
    super(service);
  }
}
