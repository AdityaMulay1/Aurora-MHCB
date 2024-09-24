import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const UserTherapistReviewEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Rating" source="rating" />
        <TextInput label="ReviewID" source="reviewId" />
        <TextInput label="ReviewText" multiline source="reviewText" />
        <TextInput label="TherapistID" source="therapistId" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
