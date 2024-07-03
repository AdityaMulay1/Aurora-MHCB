import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const UserPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <NumberInput step={1} label="LikesCount" source="likesCount" />
        <TextInput label="PostID" source="postId" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
