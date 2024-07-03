import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const BedtimeReminderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DaysOfWeek" source="daysOfWeek" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Message" source="message" />
        <TextField label="ReminderID" source="reminderId" />
        <TextField label="ReminderTime" source="reminderTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
      </SimpleShowLayout>
    </Show>
  );
};
