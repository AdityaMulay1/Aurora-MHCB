import { RelaxationExercise as TRelaxationExercise } from "../api/relaxationExercise/RelaxationExercise";

export const RELAXATIONEXERCISE_TITLE_FIELD = "title";

export const RelaxationExerciseTitle = (
  record: TRelaxationExercise
): string => {
  return record.title?.toString() || String(record.id);
};
