import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MeditationSubPageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MeditationSubPages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Order" source="order" />
        <TextField label="SessionType" source="sessionType" />
        <TextField label="SubPageTitle" source="subPageTitle" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
