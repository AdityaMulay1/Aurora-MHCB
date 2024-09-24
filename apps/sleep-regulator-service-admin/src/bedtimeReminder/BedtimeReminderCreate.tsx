import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BedtimeReminderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="DaysOfWeek"
          source="daysOfWeek"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Message" source="message" />
        <TextInput label="ReminderID" source="reminderId" />
        <DateTimeInput label="ReminderTime" source="reminderTime" />
        <TextInput label="UserID" source="userId" />
      </SimpleForm>
    </Create>
  );
};
