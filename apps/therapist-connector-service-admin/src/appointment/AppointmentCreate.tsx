import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="AppointmentDate" source="appointmentDate" />
        <TextInput label="AppointmentID" source="appointmentId" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Notes" multiline source="notes" />
        <TextInput label="Status" source="status" />
        <TextInput label="TherapistID" source="therapistId" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
