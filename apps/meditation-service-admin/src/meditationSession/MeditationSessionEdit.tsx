import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MeditationSessionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AudioURL" source="audioUrl" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
