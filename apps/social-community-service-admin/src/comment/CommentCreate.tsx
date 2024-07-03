import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CommentID" source="commentId" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
        <TextInput label="UserPostID" source="userPostId" />
      </SimpleForm>
    </Create>
  );
};
