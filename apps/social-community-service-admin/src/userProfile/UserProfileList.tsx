import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="JoinDate" source="joinDate" />
        <TextField label="ProfilePicture" source="profilePicture" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
