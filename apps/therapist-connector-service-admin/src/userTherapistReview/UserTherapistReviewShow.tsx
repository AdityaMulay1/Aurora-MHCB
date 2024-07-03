import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UserTherapistReviewShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <TextField label="ReviewID" source="reviewId" />
        <TextField label="ReviewText" source="reviewText" />
        <TextField label="TherapistID" source="therapistId" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
