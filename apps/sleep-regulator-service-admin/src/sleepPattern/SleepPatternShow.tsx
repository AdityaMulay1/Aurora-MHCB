import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const SleepPatternShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="PatternID" source="patternId" />
        <TextField label="SleepDate" source="sleepDate" />
        <TextField label="SleepDuration" source="sleepDuration" />
        <TextField label="SleepEnd" source="sleepEnd" />
        <TextField label="SleepQuality" source="sleepQuality" />
        <TextField label="SleepStart" source="sleepStart" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
        <TextField label="WakeUpCount" source="wakeUpCount" />
      </SimpleShowLayout>
    </Show>
  );
};
