import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MeditationSessionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AudioURL" source="audioUrl" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <TextInput label="VideoURL" source="videoUrl" />
      </SimpleForm>
    </Create>
  );
};
