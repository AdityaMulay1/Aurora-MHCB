import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const SleepPatternEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Notes" multiline source="notes" />
        <TextInput label="PatternID" source="patternId" />
        <DateTimeInput label="SleepDate" source="sleepDate" />
        <NumberInput step={1} label="SleepDuration" source="sleepDuration" />
        <DateTimeInput label="SleepEnd" source="sleepEnd" />
        <TextInput label="SleepQuality" source="sleepQuality" />
        <DateTimeInput label="SleepStart" source="sleepStart" />
        <TextInput label="UserID" source="userId" />
        <NumberInput step={1} label="WakeUpCount" source="wakeUpCount" />
      </SimpleForm>
    </Edit>
  );
};
