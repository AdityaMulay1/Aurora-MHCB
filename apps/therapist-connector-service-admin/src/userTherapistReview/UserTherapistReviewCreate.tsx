import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserTherapistReviewCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="ReviewID" source="reviewId" />
        <TextInput label="ReviewText" multiline source="reviewText" />
        <TextInput label="TherapistID" source="therapistId" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
