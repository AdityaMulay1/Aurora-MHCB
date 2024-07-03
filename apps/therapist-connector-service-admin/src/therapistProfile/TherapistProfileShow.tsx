import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TherapistProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
