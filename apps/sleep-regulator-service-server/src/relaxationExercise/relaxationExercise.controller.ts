import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelaxationExerciseService } from "./relaxationExercise.service";
import { RelaxationExerciseControllerBase } from "./base/relaxationExercise.controller.base";

@swagger.ApiTags("relaxationExercises")
@common.Controller("relaxationExercises")
export class RelaxationExerciseController extends RelaxationExerciseControllerBase {
  constructor(protected readonly service: RelaxationExerciseService) {
    super(service);
  }
}
