import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TherapistProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TherapistProfiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Availability" source="availability" />
        <TextField label="Bio" source="bio" />
        <TextField label="ContactInfo" source="contactInfo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ExperienceYears" source="experienceYears" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="ProfilePictureURL" source="profilePictureUrl" />
        <TextField label="Qualifications" source="qualifications" />
        <TextField label="Rating" source="rating" />
        <TextField label="Specialization" source="specialization" />
        <TextField label="TherapistID" source="therapistId" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
