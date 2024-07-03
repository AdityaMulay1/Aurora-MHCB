import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="CommentID" source="commentId" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
        <TextInput label="UserPostID" source="userPostId" />
      </SimpleForm>
    </Edit>
  );
};
