import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RelaxationExerciseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AudioURL" source="audioUrl" />
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="ExerciseID" source="exerciseId" />
        <TextInput label="Title" source="title" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
