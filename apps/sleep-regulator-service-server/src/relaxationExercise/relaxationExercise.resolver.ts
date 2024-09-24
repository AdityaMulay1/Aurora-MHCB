import * as graphql from "@nestjs/graphql";
import { RelaxationExerciseResolverBase } from "./base/relaxationExercise.resolver.base";
import { RelaxationExercise } from "./base/RelaxationExercise";
import { RelaxationExerciseService } from "./relaxationExercise.service";

@graphql.Resolver(() => RelaxationExercise)
export class RelaxationExerciseResolver extends RelaxationExerciseResolverBase {
  constructor(protected readonly service: RelaxationExerciseService) {
    super(service);
  }
}
