import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  appointmentDate?: SortOrder;
  appointmentId?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  status?: SortOrder;
  therapistId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
