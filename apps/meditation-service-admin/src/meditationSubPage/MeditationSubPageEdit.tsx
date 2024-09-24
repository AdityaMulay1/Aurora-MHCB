import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MeditationSubPageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <NumberInput step={1} label="Order" source="order" />
        <TextInput label="SessionType" source="sessionType" />
        <TextInput label="SubPageTitle" source="subPageTitle" />
      </SimpleForm>
    </Edit>
  );
};
