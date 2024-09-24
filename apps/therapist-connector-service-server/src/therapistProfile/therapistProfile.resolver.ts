import * as graphql from "@nestjs/graphql";
import { TherapistProfileResolverBase } from "./base/therapistProfile.resolver.base";
import { TherapistProfile } from "./base/TherapistProfile";
import { TherapistProfileService } from "./therapistProfile.service";

@graphql.Resolver(() => TherapistProfile)
export class TherapistProfileResolver extends TherapistProfileResolverBase {
  constructor(protected readonly service: TherapistProfileService) {
    super(service);
  }
}
