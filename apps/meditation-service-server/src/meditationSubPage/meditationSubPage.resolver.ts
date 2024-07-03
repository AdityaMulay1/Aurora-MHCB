import * as graphql from "@nestjs/graphql";
import { MeditationSubPageResolverBase } from "./base/meditationSubPage.resolver.base";
import { MeditationSubPage } from "./base/MeditationSubPage";
import { MeditationSubPageService } from "./meditationSubPage.service";

@graphql.Resolver(() => MeditationSubPage)
export class MeditationSubPageResolver extends MeditationSubPageResolverBase {
  constructor(protected readonly service: MeditationSubPageService) {
    super(service);
  }
}
