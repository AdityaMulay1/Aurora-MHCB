import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RelaxationExerciseWhereInput = {
  audioUrl?: StringNullableFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  exerciseId?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
