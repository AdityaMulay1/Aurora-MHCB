import * as graphql from "@nestjs/graphql";
import { SleepPatternResolverBase } from "./base/sleepPattern.resolver.base";
import { SleepPattern } from "./base/SleepPattern";
import { SleepPatternService } from "./sleepPattern.service";

@graphql.Resolver(() => SleepPattern)
export class SleepPatternResolver extends SleepPatternResolverBase {
  constructor(protected readonly service: SleepPatternService) {
    super(service);
  }
}
