import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const UserPostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <NumberInput step={1} label="LikesCount" source="likesCount" />
        <TextInput label="PostID" source="postId" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
