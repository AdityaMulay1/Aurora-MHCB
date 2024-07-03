import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserTherapistReviewList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserTherapistReviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Rating" source="rating" />
        <TextField label="ReviewID" source="reviewId" />
        <TextField label="ReviewText" source="reviewText" />
        <TextField label="TherapistID" source="therapistId" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserID" source="userId" />
      </Datagrid>
    </List>
  );
};
