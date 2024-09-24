import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MeditationSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AudioURL" source="audioUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VideoURL" source="videoUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
