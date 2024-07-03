import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SleepPatternList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SleepPatterns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
