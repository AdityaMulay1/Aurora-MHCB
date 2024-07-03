import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BedtimeReminderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
