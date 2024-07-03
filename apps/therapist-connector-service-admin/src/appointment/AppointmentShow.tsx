import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AppointmentDate" source="appointmentDate" />
        <TextField label="AppointmentID" source="appointmentId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Status" source="status" />
        <TextField label="TherapistID" source="therapistId" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
