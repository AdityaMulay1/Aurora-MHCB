import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserConversationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"User Conversations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserId" source="userId" />
      </Datagrid>
    </List>
  );
};
