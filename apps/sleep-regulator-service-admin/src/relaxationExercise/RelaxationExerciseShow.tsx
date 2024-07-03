import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RelaxationExerciseShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AudioURL" source="audioUrl" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Duration" source="duration" />
        <TextField label="ExerciseID" source="exerciseId" />
        <TextField label="ID" source="id" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VideoURL" source="videoUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
