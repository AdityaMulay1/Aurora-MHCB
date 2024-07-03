import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Bio" multiline source="bio" />
        <DateTimeInput label="JoinDate" source="joinDate" />
        <TextInput label="ProfilePicture" source="profilePicture" />
        <TextInput label="UserID" source="userId" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
