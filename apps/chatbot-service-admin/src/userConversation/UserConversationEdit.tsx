import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserConversationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
