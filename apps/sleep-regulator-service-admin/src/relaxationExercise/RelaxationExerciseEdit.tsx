import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RelaxationExerciseEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AudioURL" source="audioUrl" />
        <TextInput label="Category" source="category" />
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="ExerciseID" source="exerciseId" />
        <TextInput label="Title" source="title" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
