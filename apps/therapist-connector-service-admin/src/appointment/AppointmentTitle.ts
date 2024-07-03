import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "appointmentId";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.appointmentId?.toString() || String(record.id);
};
