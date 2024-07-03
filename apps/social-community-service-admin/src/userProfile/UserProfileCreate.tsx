import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserProfileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Bio" multiline source="bio" />
        <DateTimeInput label="JoinDate" source="joinDate" />
        <TextInput label="ProfilePicture" source="profilePicture" />
        <TextInput label="UserID" source="userId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
