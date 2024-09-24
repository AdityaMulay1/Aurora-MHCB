import { Module } from "@nestjs/common";
import { RelaxationExerciseModuleBase } from "./base/relaxationExercise.module.base";
import { RelaxationExerciseService } from "./relaxationExercise.service";
import { RelaxationExerciseController } from "./relaxationExercise.controller";
import { RelaxationExerciseResolver } from "./relaxationExercise.resolver";

@Module({
  imports: [RelaxationExerciseModuleBase],
  controllers: [RelaxationExerciseController],
  providers: [RelaxationExerciseService, RelaxationExerciseResolver],
  exports: [RelaxationExerciseService],
})
export class RelaxationExerciseModule {}
