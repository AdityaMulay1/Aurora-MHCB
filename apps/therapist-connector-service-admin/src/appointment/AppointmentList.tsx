import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
