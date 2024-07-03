import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LikeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="LikeID" source="likeId" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
        <TextInput label="UserPostID" source="userPostId" />
      </SimpleForm>
    </Create>
  );
};
