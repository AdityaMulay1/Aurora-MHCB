import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppointmentWhereInput = {
  appointmentDate?: DateTimeNullableFilter;
  appointmentId?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  status?: StringNullableFilter;
  therapistId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
