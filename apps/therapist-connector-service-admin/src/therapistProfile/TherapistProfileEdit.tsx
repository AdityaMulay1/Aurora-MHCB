import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TherapistProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Availability" multiline source="availability" />
        <TextInput label="Bio" multiline source="bio" />
        <TextInput label="ContactInfo" source="contactInfo" />
        <NumberInput
          step={1}
          label="ExperienceYears"
          source="experienceYears"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="ProfilePictureURL" source="profilePictureUrl" />
        <TextInput label="Qualifications" multiline source="qualifications" />
        <NumberInput label="Rating" source="rating" />
        <TextInput label="Specialization" source="specialization" />
        <TextInput label="TherapistID" source="therapistId" />
      </SimpleForm>
    </Edit>
  );
};
