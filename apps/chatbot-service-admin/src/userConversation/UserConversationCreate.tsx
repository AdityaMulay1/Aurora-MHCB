import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserConversationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Message" multiline source="message" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
