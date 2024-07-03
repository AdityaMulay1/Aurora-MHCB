import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MeditationSubPageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Order" source="order" />
        <TextInput label="SessionType" source="sessionType" />
        <TextInput label="SubPageTitle" source="subPageTitle" />
      </SimpleForm>
    </Create>
  );
};
