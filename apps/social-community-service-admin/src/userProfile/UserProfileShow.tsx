import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="JoinDate" source="joinDate" />
        <TextField label="ProfilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
        <TextField label="Username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
